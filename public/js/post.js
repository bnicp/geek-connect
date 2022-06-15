const newPostHandler = async (evt) => {
    evt.preventDefault();
    
    const content = document.querySelector('#comment-text-area').value.trim();
    const postId = evt.target.dataset.id;
    
    if (!content) {
      alert("nothing entered")
    } else {

    await fetch(`/api/post/comment/${postId}`, {
      method: 'POST',
      body: JSON.stringify({
        content,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.reload();
  }
  };
  
  document
    .querySelector('#comment-submit')
    .addEventListener('click', newPostHandler);