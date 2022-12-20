
function contactHandleClick(){
    console.log('element clicked');
    document.getElementById("contact-me").style.color = 'black';
}

function placesHandleClick(){
    console.log('element clicked');
    document.getElementById("places-i-love").style.color = 'black';
}

// Excersize 6 - DELAY

let clickedFunc = function (){
    console.log('element clicked');
}

function delayHandleClick(){
    setTimeout(clickedFunc, 3000);

}

