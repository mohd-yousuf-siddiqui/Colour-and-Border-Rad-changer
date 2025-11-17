let box = document.querySelector('div');
let input = document.querySelector('input');

input.addEventListener('input',function(){
    box.style.background = input.value;
    box.style.borderRadius = input.value+'px';
}) 
