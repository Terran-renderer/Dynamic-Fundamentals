let logo = document.querySelector('img');
let bodyElement = document.querySelector('body')
const themeSelector = document.querySelector('#theme-select');

themeSelector.addEventListener('change', changeTheme);

function changeTheme(){
    let currentTheme = themeSelector.value;
    if (currentTheme == 'dark'){
        bodyElement.classList.add("dark");
        logo.setAttribute("src", "byui-logo_white.png")
    }else{
        bodyElement.classList.remove("dark");
        logo.setAttribute("src", "logo.webp")
    }
}