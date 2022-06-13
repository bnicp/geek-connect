const signupFormHandler = async (event) => {
    event.preventDefault();
  
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

        document.location.replace('/profile');
        console.log("Okay")
    } else {
        document.getElementById('errorMsg').innerHTML=`<span style="color:red"><strong>Please select at least 1 faction to continue.</strong></span>`;
    }
  };

  
  document
    .querySelector('#form')
    .addEventListener('submit', signupFormHandler);