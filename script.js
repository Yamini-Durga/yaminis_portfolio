// hamburger toggling
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// tab content changes in about me section
var tablinks = document.querySelectorAll('.tab-links');
var tabcontents = document.querySelectorAll('.tab-contents');

function opentab(tabName){
    for(var tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(var tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}
