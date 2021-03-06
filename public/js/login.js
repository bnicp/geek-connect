// console.log("Hello sup")

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        document.getElementById('errMsg').innerHTML=`<span style="color:red"><strong>Email or password is incorrect.</strong></span>`;
      }
    }
  };

  document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

  // Get the modal
var modal1 = document.getElementById("id01");
var modal2 = document.getElementById("id02");

// Get the button that opens the modal
var btn = document.getElementById("login");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal1.style.display = "block";
}

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display ="none";
  }
}

// window.onclick = function(event) {
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
// }

// Accordion factions on signup page
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Slideshow on home
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}

var slideIndex2 = 0;
carousel1();

function carousel1() {
  var i;
  var y = document.getElementsByClassName("mySlides2");
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > y.length) {slideIndex2 = 1}
 y[slideIndex2-1].style.display = "block";
  setTimeout(carousel1, 3000); // Change image every 3 seconds
}