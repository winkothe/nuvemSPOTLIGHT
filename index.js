function randomText(){
    var text = ("abcdefghijklmnopqrstuvwxy0123456789");
        letter = text[Math.floor(Math.random() * text.length)]
}

function rain() {
    let cloud =document.querySelector('.cloud');
    let e = document.createElement('div');
    let left = math.floor(math.random() * 320);
    let size = Math.random() * 1.5;
    e.classList.add('text');
    cloud.appendChild(e);
    e.innerText = 'z'
    e.style.left = left + 'px';
    e.style.fortSize = 0.5+ 'em';

setTimeout(function() {
    cloud.removeChild(e)
},2000)
}

setInterval(function() {
    rain()
},20);