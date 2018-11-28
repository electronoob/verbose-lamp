var mX = 0;
var mY = 0;
var size = 56;
var font = "\"Courier New\", Courier, monospace";
var scr = document.getElementById("canvas");
var ctx = scr.getContext("2d");
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var width = scr.width;
var height = scr.height;
var drawclear = true;
ctx.font = size + "px " + font; 


function gri(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('canvas').addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    mX = mousePos.x;
    mY = mousePos.y;
}, false);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function draw_func(){
    if(drawclear)
        ctx.clearRect(0,0,width,height);
    draw();
    window.requestAnimationFrame(draw_func);
}
window.requestAnimationFrame(draw_func);