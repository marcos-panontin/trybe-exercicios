let users

fetch('https://dummyjson.com/users')
  .then((response) => response
    .json()
    .then((data) => { users = data.users }));


    setTimeout(() => {
      console.log(users);
      
    }, 5000);