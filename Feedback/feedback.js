fetch('Navbar.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('#navbar').innerHTML = data;
  });

const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

// Toggle dropdown function
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});

// Storing User Inputs
var Username = document.getElementById("name").value;
console.log(Username);

var Username = document.getElementById("email").value;
console.log(Username);

var Username = document.getElementById("phone").value;
console.log(Username);

var rateEle = document.getElementsByName('rate-1').value;

var e = document.getElementById("Method").value;

var rateEle2 = document.getElementsByName('rate -2').value;

var rateEle3 = document.getElementsByName('rate -3').value;




function validateForm() {
  let x = document.forms["myForm"]["Name"].value;
  if (x == "") {
    text ="Feild Required!"
  }
  document.getElementById("demo").innerHTML = text;
}
