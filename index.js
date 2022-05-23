const x = document.querySelectorAll(".those");
const message = document.querySelector('#message');
const notification = document.querySelector('#notification');
const request = document.querySelector('#request');
const home = document.querySelector('#home');
const change = () => {
    x.forEach(item => {
        item.classList.remove('fs');
    })
}
x.forEach(item => {
    item.addEventListener('click', () => {
    change();
    item.classList.add('fs');
    })
})

request.addEventListener('click', () =>{
    one.style.display ='none';
    two.style.display ='none';
    three.style.display ='none';
    four.style.display ='block';
    request.querySelector('.count').style.display ='none';
    message.querySelector('.count').style.display ='';
    notification.querySelector('.count').style.display ='';
})

message.addEventListener('click', () =>{
    one.style.display ='none';
    two.style.display ='block';
    three.style.display ='none';
    four.style.display ='none';
    message.querySelector('.count').style.display ='none';
    notification.querySelector('.count').style.display ='';
    request.querySelector('.count').style.display ='';
})

notification.addEventListener('click', () =>{
    one.style.display ='none';
    two.style.display ='none';
    three.style.display ='block';
    four.style.display ='none';
    notification.querySelector('.count').style.display ='none';
    request.querySelector('.count').style.display ='';
    message.querySelector('.count').style.display ='';
})

home.addEventListener('click', () =>{
    one.style.display ='block';
    two.style.display ='none';
    three.style.display ='none';
    four.style.display ='none';
    message.querySelector('.count').style.display ='';
    notification.querySelector('.count').style.display ='';
    request.querySelector('.count').style.display ='';
})