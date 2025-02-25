 
const Tables = {
    pizza: document.querySelector('.option-pizza'),
    salads: document.querySelector('.option-salads'),
    starter: document.querySelector('.option-starter')
}

const Buttons = {
    pizza: document.querySelector('.pizza'),
    salads: document.querySelector('.salads'),
    starter: document.querySelector('.starter')
}
 

 
function Toggle(active){
    Object.keys(Tables).forEach((key)=>{
        Tables[key].style.display = key===active ? 'block' : 'none';
        Buttons[key].classList.toggle('active',key===active);
    })
}



Buttons.pizza.addEventListener('click',()=>{
    Toggle('pizza')
});
Buttons.salads.addEventListener('click',()=>{
    Toggle('salads')
});
Buttons.starter.addEventListener('click',()=>{
    Toggle('starter')
});


