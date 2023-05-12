import React from 'react';

import './App.css';

class App extends React.Component {

  state = {
    loading: true,
    user: undefined,
  }

  fetchUser = async () => {
    this.setState({
       loading: true,
    }, async () => {
      const response = await fetch('https://api.randomuser.me/');
       const data = await response.json();
       this.setState({
         loading: false,
         user: data.results[0],
        //  olderThan50: data.results[0].dob.age >= 50,
       })
      
     })
  }

async componentDidMount() {
  await this.fetchUser();
}
  
shouldComponentUpdate(_nextProps, nextState) {
  console.log(nextState.user);
    return nextState.user.dob.age >=50;
  }

  render() {
    const { loading, user } = this.state;
    // const olderThan50 = (user.dob.age >= 50) || false;
    const loadingElement = <span>Loading...</span>
    return (<div>
      {loading ? loadingElement :
        <div>
          <p>{user.name.first} {user.name.last}</p>
          <p>{user.location.city} - {user.location.country}</p>
          <p>{user.gender}</p>
          <p>{user.dob.age}</p>
          <img src={user.picture.thumbnail}/>
      </div>}
  </div>
  
  )

}

}

export default App;
