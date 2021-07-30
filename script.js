//Scroll to top button
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//Google forms
let className = document.querySelectorAll(".className");
let val = document.querySelector(".addForm");
console.log(className);

val.addEventListener("change", function () {
  for (let i = 0; i < className.length; i++) {
    if (i == val.value) {
      className[i].style.display = "block";
    } else {
      className[i].style.display = "none";
    }
  }
});
