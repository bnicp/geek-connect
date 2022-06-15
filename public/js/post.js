const newPostHandler = async (evt) => {
    // evt.preventDefault();
    // const title = document.querySelector('#create-post-title').value;
    const content = document.querySelector('#comment-text-area').value.trim();
    const postId = evt.target.dataset.id;
    console.log(content)
    console.log(postId)
    await fetch(`/api/post/comment/${postId}`, {
      method: 'POST',
      body: JSON.stringify({
        content,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.reload();
  };
  
  document
    .querySelector('#comment-submit')
    .addEventListener('click', newPostHandler);