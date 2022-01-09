var audio_1 = document.getElementById('audio_1');
var audio_2 = document.getElementById('audio_2');
var audio_3 = document.getElementById('audio_3');
var audio_4 = document.getElementById('audio_4');
var audio_5 = document.getElementById('audio_5');
var audio_6 = document.getElementById('audio_6');
var audio_7 = document.getElementById('audio_7');

var playButton = document.getElementById("playButton");
var previousButton = document.getElementById("previousButton");
var nextButton = document.getElementById("nextButton");
var pauseButton = document.getElementById("pauseButton");
var rePlayButton = document.getElementById("rePlayButton");
var progressBar = document.getElementById("progressBar");

var pauseB1 = document.getElementById("pauseB1");
var pauseB2 = document.getElementById("pauseB2");
var pauseB3 = document.getElementById("pauseB3");
var pauseB4 = document.getElementById("pauseB4");
var pauseB5 = document.getElementById("pauseB5");
var pauseB6 = document.getElementById("pauseB6");
var pauseB7 = document.getElementById("pauseB7");

var playB1 = document.getElementById("playB1");
var playB2 = document.getElementById("playB2");
var playB3 = document.getElementById("playB3");
var playB4 = document.getElementById("playB4");
var playB5 = document.getElementById("playB5");
var playB6 = document.getElementById("playB6");
var playB7 = document.getElementById("playB7");

var listP = [pauseB1,pauseB2,pauseB3,pauseB4,pauseB5,pauseB6,pauseB7]

var listPlay = [playB1,playB2,playB3,playB4,playB5,playB6,playB7]

var list = [audio_1,audio_2,audio_3,audio_4,audio_5,audio_6,audio_7];

var songList = ["Dance Meri Rani","Radhe Radhe","Thoda Thoda Pyar","Duaa Cove","Lovely","Burj Khalifa","Bijli Bijli"];

var count = 0;

var progress;

var songName = document.getElementById("songName");
var musicGif = document.getElementById("musicGif");

playButton.addEventListener("click",()=>{
    list[count].play();
    playButton.style.display = "none";
    pauseButton.style.display = "block";
    listPlay[count].style.display = "none";
    listP[count].style.display = "block";
    list[count].addEventListener("timeupdate",()=>{timer()});
    songName.innerHTML = `${songList[count]}`;
    musicGif.style.display = "block";
})

pauseButton.addEventListener("click",()=>{
    list[count].pause();
    playButton.style.display = "block";
    pauseButton.style.display = "none";
    listP[count].style.display = "none";
    listPlay[count].style.display = "block";
    musicGif.style.display = "none";
})

nextButton.addEventListener("click",()=>{
    if(pauseButton.style.display=="block"){
    count++;
    list[count-1].pause();
    listP[count-1].style.display = "none";
    listPlay[count-1].style.display = "block";
    if(count==7){
        count=0;
    }
    list[count].play();
    listP[count].style.display = "block";
    listPlay[count].style.display = "none";
    console.log(count);
    list[count].addEventListener("timeupdate",()=>{timer()})
    songName.innerHTML = `${songList[count]}`;
    }
    else{
        count++;
        songName.innerHTML = `${songList[count]}`;
        if(count==7){
            count=0;
        }
    }
})

previousButton.addEventListener("click",()=>{
    if(pauseButton.style.display=="block"){
    list[count].pause();
    listP[count].style.display = "none";
    listPlay[count].style.display = "block";
    count--;
    if(count==-1){
        count = 6;
    }
    list[count].play();
    listP[count].style.display = "block";
    listPlay[count].style.display = "none";
    list[count].addEventListener("timeupdate",()=>{timer()})
    songName.innerHTML = `${songList[count]}`;
    }
    else{
        count--;
        if(count==-1){
            count = 6;
            songName.innerHTML = `${songList[count]}`;
        }
    }
})

function timer(){
    progress = parseInt((list[count].currentTime/list[count].duration)* 100);
    progressBar.value = progress;
    console.log(progress);
    if(progress==100){
        listP[count].style.display = "none";
        listPlay[count].style.display = "block";
        count++;
        if(count==7){
            count=0;
        }
        listP[count].style.display = "block";
        listPlay[count].style.display = "none";
        list[count].play();
        list[count].addEventListener("timeupdate",()=>{timer()});
    }
}


progressBar.addEventListener('change', ()=>{
    list[count].currentTime = progressBar.value * list[count].duration/100;
})



