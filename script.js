var index = 0;

// Function to be called when the space key is pressed
function handleSpaceKeyPress(event) {
    if (event.code === 'Space') {
        if(index == 0){
            one()
        }else if(index == 1){
            two()
        }else if(index == 2){
            three()
        }else if(index == 3){
            four()
        }else if(index == 4){
            five()
        }else if(index == 5){
            six()
        }else if(index == 6){
            seven()
        }else if(index == 7){
            eight()
        }
        index++
    }else if(event.code === 'Digit1'){
        basura()
    }else if(event.code === 'Digit2'){
        reciclar()
    }
}

// Add an event listener to the document
document.addEventListener('keydown', handleSpaceKeyPress);

function setFace(toSet){
    if(toSet == "neutral"){
        document.getElementById("display").src = "images/robertoNeutral.png"
    }else if(toSet == "talk"){
        document.getElementById("display").src = "images/robertoTalking.png"
    }else if(toSet == "happyIdle"){
        document.getElementById("display").src = "images/robertoHappy.png"
    }else if(toSet == "happyTalk"){
        document.getElementById("display").src = "images/robertoChatHappy.png"
    }else if(toSet == "basura"){
        document.getElementById("display").src = "images/basura.png"
    }else if(toSet == "reciclar"){
        document.getElementById("display").src = "images/recliclar.png"
    }
}

function one(){
    setFace("talk")
    document.getElementById("vocals").src = "audios/1.mp3"
    document.getElementById("vocals").play()
    setTimeout(setFace, 2000, "neutral")
}

function two(){
    setFace("happyTalk")
    document.getElementById("vocals").src = "audios/2.mp3"
    document.getElementById("vocals").play()
    setTimeout(setFace, 5000, "neutral")
}

function three(){
    setFace("happyTalk")
    document.getElementById("vocals").src = "audios/3.mp3"
    document.getElementById("vocals").play()
    setTimeout(setFace, 2000, "happyIdle")
}

function four(){
    setFace("talk")
    document.getElementById("vocals").src = "audios/4.mp3"
    document.getElementById("vocals").play()
    setTimeout(setFace, 9000, "neutral")
}

function five(){
    setFace("talk")
    document.getElementById("vocals").src = "audios/5.mp3"
    document.getElementById("vocals").play()
    setTimeout(setFace, 6000, "neutral")
}

function six(){
    setFace("talk")
    document.getElementById("vocals").src = "audios/6.mp3"
    document.getElementById("vocals").play()
    setTimeout(setFace, 9000, "neutral")
}

function seven(){
    setFace("happyTalk")
    document.getElementById("vocals").src = "audios/7.mp3"
    document.getElementById("vocals").play()
    setTimeout(setFace, 7000, "happyIdle")
}

function eight(){
    setFace("happyTalk")
    document.getElementById("vocals").src = "audios/8.mp3"
    document.getElementById("vocals").play()
    setTimeout(setFace, 9000, "happyIdle")
}

function basura(){
    setFace("basura")
    document.getElementById("vocals").src = "audios/basura.mp3"
    document.getElementById("vocals").play()
    setTimeout(setFace, 3000, "neutral")
}

function reciclar(){
    setFace("reciclar")
    document.getElementById("vocals").src = "audios/recliclar.mp3"
    document.getElementById("vocals").play()
    setTimeout(setFace, 4000, "neutral")
}
