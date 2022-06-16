// function myFunction(x) {
//     x.classList.toggle("fa-thumbs-down");
//   }

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

