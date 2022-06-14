const newPostHandler = async (evt) => {
    evt.preventDefault();
    // const title = document.querySelector('#create-post-title').value;
    const content = document.querySelector('#create-post-content').value;
  
    await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    //document.location.replace('/dashboard');
  };
  
  document
    .querySelector('#comment-button')
    .addEventListener('submit', newPostHandler);