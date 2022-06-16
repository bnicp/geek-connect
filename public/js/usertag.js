const signupFormHandler = async (event) => {
    event.preventDefault();

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

    const colorArr = []
    const dragons = document.getElementsByName('dragon2');
    var selected = Array.from(dragons).find(radio => radio.checked);
    // var dragon = selected.value
    // console.log(selected)

    if (selected) {
        var dragon = selected.value
    } else {
        const color = "blue";
        const dragonfile = "/images/dragon.svg";
        colorArr.push(color);
        colorArr.push(dragonfile);
    }

    

        if (dragon){
            if(dragon === "/images/dragon.svg"){
                const color = "blue";
                const dragonfile = "/images/dragon.svg";
                colorArr.push(color);
                colorArr.push(dragonfile);
            } else if (dragon === "/images/dragon_variations/dragon_green.png"){
                const color = "green";
                const dragonfile = "/images/dragon_variations/dragon_green.png";
                colorArr.push(color);
                colorArr.push(dragonfile);
            } else if (dragon === "/images/dragon_variations/dragon_orange.png"){
                const color ="orange";
                const dragonfile ="/images/dragon_variations/dragon_orange.png";
                colorArr.push(color);
                colorArr.push(dragonfile);
                // console.log(color)
            } else if (dragon === "/images/dragon_variations/dragon_pink.png"){
                const color ="pink";
                const dragonfile ="/images/dragon_variations/dragon_pink.png";
                colorArr.push(color);
                colorArr.push(dragonfile);
            } else {
                const color = "purple";
                const dragonfile = "/images/dragon_variations/dragon_purple.png";
                colorArr.push(color);
                colorArr.push(dragonfile);
            }
        } else {
            const color = "blue";
            const dragonfile = "/images/dragon.svg";
            colorArr.push(color);
            colorArr.push(dragonfile);
        }
    

    // console.log(arr);
    if (arr.length) {
    console.log(colorArr[0]);
    console.log(colorArr[1]);
    const sendDragon = await fetch('/api/users/usercolor', {
        method: 'PUT',
        body: JSON.stringify({ color: colorArr[0], dragonfile: colorArr[1] }),
        headers: { 'Content-Type': 'application/json' },
    });

    
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