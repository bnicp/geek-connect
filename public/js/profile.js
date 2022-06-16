async function loadTags(){
  const response = await fetch('/profile/test', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const tags = await response.json();

  console.log(tags)
}

document.getElementById('button').addEventListener('click', loadTags)

  // const response = await fetch('/profile/test', {
  //   method: 'GET',
  //   body: JSON.stringify({ username, email, password }),
  //   headers: { 'Content-Type': 'application/json' },
  // });

  // const tags = await response.json();

  // console.log = tags

  document.querySelector('.posts').onmousemove = (e) => {

    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
  
    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
    
  }
  