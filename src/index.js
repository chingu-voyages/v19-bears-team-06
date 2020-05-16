import styles from './styles.module.css'
import React, { useState, useEffect } from 'react'; 
import { RepoCard } from './components'

const api = {
  getUserInfo() {
    return fetch("https://api.github.com/users/jaywood128")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        setIsLoaded(true);
        setData(result)
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  },
  getUserRepos(username) {
    return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
    .catch((error) => {
      throw new Error(error);
    }
    )
  }
}

function githubTimeline(){

  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    
    api.getUserRepos('jaywood128').then(res => {
      if(res) {
        setData(res);
        setIsLoaded(true);
        return res;
      }
    });
  
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
              
  // for(let d in data){
  //   gitHTML.push(<li key={d}>{data[d]}</li>)
  // } 
  
  // <img alt="avatar" style={{ width: '70px' }} src={d.avatar_url}/>
  
  return <div>
    {data.map(repo => (
      <RepoCard repo={repo} key={repo.id} />
    ))}
  </div>
}

export default githubTimeline;