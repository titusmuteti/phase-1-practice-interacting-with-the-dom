let counter = document.querySelector('#counter'); 
    click = 0; 

let interval = setInterval(() => {
    counter.innerHTML = ++ click;
}, 1000);
 
const plusButton = document.querySelector('#plus');
plusButton.addEventListener('click', ()=>{
    counter.innerHTML = ++ click; 
});

const minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', ()=>{
    counter.innerHTML = -- click;
});
let clickCount = 0;
const heartButton = document.querySelector('#heart');
heartButton.addEventListener('click', ()=> {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    ul.appendChild(li);

    let span = document.createElement('span')
    clickCount = 0
    li.appendChild(span).textContent = clickCount
    
    li.innerHTML = `${click} has been liked ${span.innerHTML = ++ clickCount}time`;
   
})

const pauseButton = document.querySelector('#pause');
pauseButton.addEventListener('click', () =>{
    document.querySelector('#submit').disabled = true;
    document.querySelector('#plus').disabled = true;
    document.querySelector('#minus').disabled = true;
    document.querySelector('#heart').disabled = true;

    window.clearInterval(interval);
    pauseButton.innerHTML = 'resume';

})


document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    handleComment(e.target.querySelector('#comment-input').value);
})

function handleComment (comment){
    let p = document.createElement('p')
    p.textContent = comment
    document.querySelector('#list').appendChild(p)
}