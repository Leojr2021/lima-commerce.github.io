
document.querySelector('#date_time').textContent = document.lastModified;

var d = new Date();
var y = d.getFullYear();

document.querySelector('#year').textContent = y;

function toggleMenu() {

    document.getElementsByClassName("nav-list")[0].classList.toggle("responsive")
}



/*year*/
var d = new Date();
var y = d.getFullYear();

document.querySelector('#year').textContent = y;

