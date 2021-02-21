// Get the modal
var signUpModal = document.getElementById("SignUpModal");

// Get the button that opens the modal
var signUpbtn = document.getElementById("SignUp");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeSignUp")[0];

// When the user clicks on the button, open the modal
signUpbtn.onclick = function() {
  signUpModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  signUpModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
}

// Get the modal
var SignInModal = document.getElementById("SignInModal");

// Get the button that opens the modal
var signInbtn = document.getElementById("SignIn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeSignIn")[0];

// When the user clicks on the button, open the modal
signInbtn.onclick = function() {
  SignInModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  SignInModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == SignInModal) {
    SignInModal.style.display = "none";
  }
}

hyperLinkSignUp.onclick = function(){
  SignInModal.style.display = "none";
  signUpModal.style.display = "block";
}

var allPostsButton = document.getElementById("AllPostsBtn");
allPostsButton.onclick = function(){
  window.location.href="./html/postslist.html"
}