countDown();
function checkAnswers() {
    var total = 0;
    if (document.getElementById("q1b").checked === true){
        total+=1;
    }else{
        document.querySelector("#a1").style.backgroundColor ="#FF7676"; 
    }
    if (document.getElementById("q2a").checked === true){
        total+=1;
    }else{
        document.querySelector("#a2").style.backgroundColor ="#FF7676";
    }
    if (document.getElementById("q3a").checked){
        total+=1;
    }else{
        document.querySelector("#a3").style.backgroundColor ="#FF7676";
    }
    if (document.getElementById("q4d").checked){
        total+=1;
    }else{
        document.querySelector("#a4").style.backgroundColor ="#FF7676";
    }
    if (document.getElementById("q5c").checked){
        total+=1;
    }else{
        document.querySelector("#a5").style.backgroundColor ="#FF7676";
    }
    if (document.getElementById("q6c").checked){
        total+=1;
    }else{
        document.querySelector("#a6").style.backgroundColor ="#FF7676";
    }
    if (document.getElementById("q7d").checked){
        total+=1;
    }else{
        document.querySelector("#a7").style.backgroundColor ="#FF7676";
    }
    if (document.getElementById("q8d").checked){
        total+=1;
    }else{
        document.querySelector("#a8").style.backgroundColor ="#FF7676";
    }
    if (document.getElementById("q9b").checked){
        total+=1;
    }else{
        document.querySelector("#a9").style.backgroundColor ="#FF7676";
    }
    if (document.getElementById("q10a").checked){
        total+=1;
    }else{
        document.querySelector("#a10").style.backgroundColor ="#FF7676";
    }
    var result = document.getElementById("result");
    result.textContent = 'Your score is ' + total + ' out of 10';
    result.style.color = 'aqua';
    result.style.border = '2px solid aqua';
    clearInterval(interval);
}

var interval;

function countDown(){
    const clock = document.getElementById('clockdiv');
    const secondsSpan = clock.querySelector('.seconds');
    let count = 60;
    interval = setInterval(()=> {
    count--;
    secondsSpan.innerHTML = count;
    console.log(secondsSpan.innerHTML);

    if(count === 0) {
        clearInterval(interval);
        countClosed = true;
        checkAnswers();
    }
    }, 1000);
    //in setInterval method, second index used to that 1st indexed method must be execute, every seconds that entered on first index.
  }

  function goBack(){
    window.location.href = "../Instructions/instructions.html";
  }