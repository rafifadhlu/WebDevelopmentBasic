let ham = document.querySelector('#hamburger-icon');
let navbar = document.querySelector('.nav-bar');
let item = document.querySelector('.item')

ham.addEventListener("click", function(){
    if(navbar.classList.contains("showNav-bar")){
        navbar.classList.remove("showNav-bar");
    }else{
        navbar.classList.add("showNav-bar");
    }
});