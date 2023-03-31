var navbar=document.getElementById('navbar-container');

window.onload = function(){
    loadNavBar();
}

function loadNavBar() {
  fetch('../navBar/navBar.html')
    .then(response => response.text())
    .then(htmlText => {
      
      navbar.innerHTML = htmlText;
    })
    .catch(error => console.error(error));
}
