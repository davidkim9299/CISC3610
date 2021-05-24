var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// change the button text to start to stop when click 
// and if click again change back to original text
var start = document.getElementById('button');
start.addEventListener('click', function(e){
    if(e.target.textContent === 'Start'){
        e.target.textContent = 'Stop';
        // start speech recognition
        recognition.start();
    }else if(e.target.textContent === 'Stop'){
        e.target.textContent = 'Start';
        // stop speech recognition
        recognition.abort();
    }
})

const ctx = document.getElementById('canvas').getContext('2d');

function displayScreen(){
    ctx.font = '50px Arial';
    
    ctx.fillText('U.S',150,100);
    ctx.fillText('CAT',150,150);
    ctx.fillText('KIWI',150,200);
    ctx.fillText('DOG', 150,250);
    ctx.fillText('PLUM', 150,300);
    ctx.fillText('Say [help] for help', 150, 400);
    ctx.fillText('Say [about] for info', 150, 450);
}

// clear the canvas
function clear(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

//save images in array`
var images =[
    {name: 'us', image: 'images/us.png'},
    {name: 'cat', image: 'images/cat.jpeg'},
    {name: 'kiwi', image: 'images/kiwi.jpeg'},
    {name: 'dog', image: 'images/dog.png'},
    {name: 'plum', image: 'images/plum.png'}
];

// display images
function displayimages(image){
    clear();
    var img = new Image();
    img.src = image;
    img.onload = function(){
        ctx.drawImage(img, 300, 200);
    };
}

// voice input
recognition.onresult = function(event) {
    var sp = event.results[0][0].transcript;
    if(sp == 'help'){
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Say a name on the list to see an image'));
    }else if(sp == 'about'){
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('DONGRYUL KIM, CISC 3610 audio project'));
    }else if(sp === 'us'){
        displayimages(images[0].image);
    }else if(sp === 'cat'){
        displayimages(images[1].image);
    }else if(sp === 'kiwi'){
        displayimages(images[2].image);
    }else if(sp === 'dog'){
        displayimages(images[3].image);
    }else if(sp === 'plum'){
        displayimages(images[4].image);
    }else{
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('No match'));
        clear();
        ctx.fillText('Try again',190,200);
    }
}

recognition.onspeechend = function(){
    recognition.stop();
}

displayScreen();





