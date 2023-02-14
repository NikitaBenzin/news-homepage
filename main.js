const menu = document.querySelector('.burger'),
      menuClose = document.querySelector('.burger-close'),
      nav = document.querySelector('.nav'),
      overflowMenu = document.querySelector('.overflow');

menuClose.style.display = 'none';
overflowMenu.style.visibility = 'hidden';

function closeBurger(){
    menu.style.display = 'block';
    menuClose.style.display = 'none';
    nav.style.display = 'none';
    overflowMenu.style.visibility = 'hidden';
}

function openBurger(){
    menu.style.display = 'none';
    menuClose.style.display = 'block';
    nav.style.display = 'flex';
    overflowMenu.style.visibility = 'visible';
}

document.addEventListener('click', (e) => {
    if(menuClose.style.display == 'block' && e.target !== nav){
        closeBurger();
    } else if(e.target === menu){
        openBurger();
    } else if(e.target === menuClose){
        closeBurger();
    }
});
