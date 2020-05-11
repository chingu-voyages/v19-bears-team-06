import React from 'react'
import styles from './styles.module.css'

class GithubTimeline extends React.Component {
  state = {
    username: this.props.username
  }

  componentDidMount(){
    fetch(`https://api.github.com/users/${this.state.username}`)
    .then( resp => resp.json())
    .then(result => console.log(result))
  }
  render () {
    return(
        <div></div>
      )
  }


 }

 export default GithubTimeline;
