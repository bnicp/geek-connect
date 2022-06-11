const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const username = document.querySelector('#username').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      // if (response.ok) {
      //   // document.location.replace('/profile');
      //   console.log("Okay")
      // } else {
      //   alert("Nope");
      // }
    }
  };

  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);