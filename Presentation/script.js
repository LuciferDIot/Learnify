const countdown = document.getElementById('count-down');
let count = 6;
const interval = setInterval(()=> {
    console.log(count);
    count--;
    console.log(count);
    countdown.textContent = count;

    if(count === 0) {
        clearInterval(interval);
        window.location.href = '../Home/home.html';
    }
}, 1000);

const cancelBtn = document.getElementById('cancel-button');
cancelBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    clearInterval(interval);
    countdown.textContent = 6;
})

const nextPageBtn = document.getElementById('home-btn');
nextPageBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    clearInterval(interval);
    window.location.href = '../Home/home.html';
})