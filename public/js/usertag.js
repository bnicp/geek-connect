const signupFormHandler = async (event) => {
    event.preventDefault();
  
    
    // const name = document.querySelector('#name').value.trim();
    // const email = document.querySelector('#email_signup').value.trim();
    // const password = document.querySelector('#password_signup').value.trim();
    // const username = document.querySelector('#username_signup').value.trim();
    
    // const tag_id = document.querySelector('#').value;
    // const form = document.querySelector('#form')
    // const test = document.querySelector('.starwars:checked').val;
    // console.log(test);
    const arr = []

    const starwars = document.getElementsByName('SW');
    for (var radio of starwars)
    {
        if (radio.checked){
            console.log(radio.value);
            arr.push(radio.value);
        }
    }

    const got = document.getElementsByName('GoT');
    for (var radio of got)
    {
        if (radio.checked){
            console.log(radio.value);
            arr.push(radio.value);
        }
    }

    const hp = document.getElementsByName('HP');
    for (var radio of hp)
    {
        if (radio.checked){
            console.log(radio.value);
            arr.push(radio.value);
        }
    }

    // console.log(arr);

    if (arr.length) {
        for (let i = 0; i < arr.length; i++) {
            const tag_id = arr[i];
        
            const response = await fetch('/api/users/usertag', {
                method: 'POST',
                body: JSON.stringify({ tag_id }),
                headers: { 'Content-Type': 'application/json' },
              });
            
            if (response.ok){
                console.log('added')
            } else {
                alert("nope");
            }
        }


    //   const response = await fetch('/api/users/usertag', {
    //     method: 'POST',
    //     body: JSON.stringify({ tag_id }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });
  
        document.location.replace('/profile');
        console.log("Okay")
    } else {
        document.getElementById('errorMsg').innerHTML=`<span style="color:red"><strong>Please select at least 1 faction to continue.</strong></span>`;
    }
  };

  
  document
    .querySelector('#form')
    .addEventListener('submit', signupFormHandler);