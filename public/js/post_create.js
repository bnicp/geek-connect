const signupFormHandler = async (event) => {
    event.preventDefault();
    const tagid = event.target.id
    // const name = document.querySelector('#name').value.trim();
    const title = document.querySelector('#post_title_create').value.trim();
    const content = document.querySelector('#post_content_create').value.trim();
    // const tagid = document.querySelector('#post_button').dataset.id;
  
    console.log(`${title} ${content} ${tagid}`)

    // if (username && email && password) {
    //   const response = await fetch('/api/users', {
    //     method: 'POST',
    //     body: JSON.stringify({ username, email, password }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/signup');
    //     console.log("Okay")
    //   } else {
    //     alert("Nope");
    //   }
    // }
  };

  
  document
    .querySelector('#post-form')
    .addEventListener('submit', signupFormHandler);