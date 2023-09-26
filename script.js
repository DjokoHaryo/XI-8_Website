// ==============navbar hide and show==============

const barbtn = document.getElementById("bar-icon");
const dropdown = document.getElementById("menu");

barbtn.addEventListener("click", ()=>{
    dropdown.classList.toggle("show");
})


// submenu

const droptog = document.querySelectorAll(".droptoggle");
const submenu = document.getElementsByClassName("submenu");

for(let x = 0; x < droptog.length; x++){
    droptog[x].addEventListener("click", ()=>{
        submenu[x].classList.toggle("submenushow");
    })
}


