const modalOpenEl = document.getElementsByClassName("post_button");

const signupFormHandler = async (event) => {
    event.preventDefault();
    // const tagid = event.target.id
    // const name = document.querySelector('#name').value.trim();
    const title = document.querySelector('#post_title_create').value.trim();
    const content = document.querySelector('#post_content_create').value.trim();
    // const tagid = document.querySelector('#post_button').dataset.id;
  
    // console.log(`${title} ${content} ${tagid}`)

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

  
//   document
//     .querySelector('#post-form')
//     .addEventListener('submit', signupFormHandler);

function openPostModal(){
    
    for (var i=0; i < modalOpenEl.length; i++){
        modalOpenEl[i].addEventListener('click', function(event){
            event.preventDefault();
            // console.log(event.target.dataset.id)
            const targetId = event.target.dataset.id;
            document.getElementById('post_modal').style.display='block';

            const form = document.querySelector("#post-form");
            form.addEventListener('submit', async function(event){
                // event.preventDefault();

                const tagId = targetId;
                const title = document.querySelector('#post_title_create').value.trim();
                const content = document.querySelector('#post_content_create').value.trim();
                console.log(tagId)
                console.log(title)
                console.log(content)

                if (tagId && title && content) {
                    const response = await fetch(`/api/post/${tagId}`, {
                      method: 'POST',
                      body: JSON.stringify({ title, content }),
                      headers: { 'Content-Type': 'application/json' },
                    });
                
                    if (response.ok) {
                    //   document.location.reload;
                    //   console.log("Okay")
                    } else {
                      alert("Nope");
                    }
                  }
            })
        })
    }

    //  modalOpenEl.addEventListener('click', function(event){
    //      event.preventDefault();
    //     console.log(modalOpenEl.dataset.id)
    //     document.getElementById("post_modal").style.display='block'


    //  } )
}

openPostModal();

{/* <button onclick="document.getElementById('post_modal').style.display='block'" class="" id="post_button_{{0.id}}" data-id="{{0.id}}">Make new Post</button> */}
