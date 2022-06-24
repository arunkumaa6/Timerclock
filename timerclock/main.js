//set clock timing

var starttime=5;
var time=starttime*60;
var time2=starttime*60;

let firstEle=document.getElementById('first');
let endEle=document.getElementById('end');
let startEle=document.getElementById('start-btn');
let resetEle=document.getElementById('reset-btn');
let swapBtn=document.getElementById('btn');
let swapBtn2=document.getElementById('btn2');

// game start

startEle.addEventListener("click",startGame);

function startGame(){
    startEle.setAttribute('disabled','disabled')
    gameStart=setInterval(startFun,1000);
}

//start game player1

function startFun(){

        let minutes=Math.floor(time/60); 
        let seconds=time%60;
    
        if(minutes<5){
            minutes="0"+minutes;
        }
    
        if(seconds<10){
            seconds="0"+seconds;
        }

        if(minutes==0 && seconds==0){
            clearInterval(gameStart);
        }
    
        firstEle.innerHTML=`${minutes}:${seconds}`;
        time--;
    }

//start game player2

function startFun2(){
    let minutes2=Math.floor(time2/60); 
        let seconds2=time2%60;
    
        if(minutes2<5){
            minutes2="0"+minutes2;
        }
    
        if(seconds2<10){
            seconds2="0"+seconds2;
        }

        if(minutes2==0 && seconds2==0){
            clearInterval(gameStart2);
        }

    endEle.innerHTML=`${minutes2}:${seconds2}`;
    time2--;
}

//click swap button

swapBtn.addEventListener("click",swapFunction);

    function swapFun(){
        clearInterval(gameStart2)
        gameStart=setInterval(startFun,1000)
    }

//click swap button

swapBtn2.addEventListener("click",swapFun);

    function swapFunction(){
        clearInterval(gameStart);
        gameStart2=setInterval(startFun2,1000);
        
    }

//click reset button

resetEle.addEventListener("click",resetFun);
    function resetFun(){
        clearInterval(gameStart2);
        clearInterval(gameStart);
        firstEle.innerHTML=00 +":"+ 00;
        endEle.innerHTML=00 +":"+ 00;
    }



