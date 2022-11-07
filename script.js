'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')
//openning modal 
const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
//closing modal window 
const clsModal= function (){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal)
} 
    btnCloseModal.addEventListener('click',clsModal)
    overlay.addEventListener('click', clsModal)

document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
       clsModal(); 
    }
})