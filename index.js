let dragContiner = document.querySelector('.drag-container'); 
let container = document.querySelector('.container');
let carousel = document.querySelector('.carousel-block');


function applyTranform(obj) {
    obj.style.transform = " rotateY(" + tX + "deg)";
}
function playSpin(yes) {
    container.style.animationPlayState = yes ? "running" : "paused";
}
let sX,
nX,
desX = 0,
tX = 0;
carousel.onpointerdown = function(e) {
    clearInterval(dragContiner.timer);
    e = e || window.event;
    let sX = e.clientX;

    this.onpointermove = function(e) {
        e = e || window.event;
        let nX = e.clientX,
        desX = nX - sX;
        tX += desX * 0.1;
        applyTranform(dragContiner);
        sX = nX;
    };
    this.onpointerup = function(e) {
        dragContiner.timer = setInterval(function() {
            desX *= 0.95;
            tX += desX * 0.1;
            applyTranform(dragContiner);
            playSpin(false);
            if (Math.abs(desX) < 0.5) {
                clearInterval(dragContiner.timer);
                playSpin(true);
            }
        }, 17);
        this.onpointermove = null;
    };
    return false;
};




