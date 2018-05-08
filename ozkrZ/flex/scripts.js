(function(){
'use strict';
    const sidemenu = document.querySelector ('.sidemenu');
    const modal = document.querySelector('.modal');
    const modalButton = document.querySelectorAll('.modal__botton');
    const hideModal = document.getElementsByClassName('hide-modal');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    
    for(const element of navbarButton){
        element.addEventListener('click',()=>{
            sidemenu.classList().add('sidemenu--hiden')
        })
    }
    
    for(const element of modalButton){
        element.addEventListener('click',()=>{
            modal.classList.remove('modal--hiddem');
                                 })
    }
 
    for(const element of hideModal){
        element.addEventListener('click',()=>{
            modal.classList.add('modal--hidden');
            nameInput.value='';
            emailInput.value='';
    })
}
    
    
    
})();