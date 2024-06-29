var iconMenu = document.querySelector('.icone-menu');
var ul = document.querySelector('.ul');

//addEventListener - capturo os eventos dos elementos
iconMenu.addEventListener('click',()=>{
    if(ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('.icone-menu img').src = 'img/menu.png'; // img de menu 
    }else{
        ul.classList.add('ativo')
        document.querySelector('.icone-menu img').src = 'img/close.png'; // trocar para img close
    } //contains me diz se a tag possui a classe ativo
})
