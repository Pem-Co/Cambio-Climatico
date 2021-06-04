window.addEventListener("load", function(){
    this.document.getElementById("cargando").classList.remove("cargando");
    this.document.getElementById("cargando").classList.remove("lds-ring");
    this.document.getElementById("cargando").classList.toggle("cargando2")
});
jQuery('document').ready(function($){
    var menuBtn = $('.ico'),
        menu = $('.navega ul');

    menuBtn.click(function(){
        if (menu.hasClass('show')){
            menu.removeClass('show');
        }else{
            menu.addClass('show');
        }
    })    
});
document.getElementById("sendthis").onclick = btnActivado;