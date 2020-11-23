const input = document.querySelector('input.field-input');
const counter = document.querySelector('.field-counter');

const maxLength = input.getAttribute('maxlength');

counter.innerText = maxLength;

input.addEventListener('input', event =>{
    const valueLength = event.target.value.length;

    const leftCharLength = maxLength - valueLength;

    if(leftCharLength <0){
        console.error('error');
        return;
    }
    counter.innerText = leftCharLength;
})