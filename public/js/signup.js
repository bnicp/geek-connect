const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email_signup').value.trim();
    const password = document.querySelector('#password_signup').value.trim();
    const username = document.querySelector('#username_signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/signup');
        // console.log("Okay")
      } else {
        document.getElementById('errMsg2').innerHTML=`<span style="color:red"><strong>Email already registered.</strong></span>`
      }
    }
  };

  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);