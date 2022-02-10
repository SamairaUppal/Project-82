var mouseEvent="empty"
var canvas= document.getElementById("myCanvas")
var ctx= canvas.getContext("2d")
var color= document.getElementById("colorInput")
var width= document.getElementById("widthInput")
var radius= document.getElementById("radiusInput")
var currentX, currentY

addEventListener("mousedown", mouseDownFunction)
function mouseDownFunction(e) {
    mouseEvent="mousedown"
}

addEventListener("mouseup", mouseUpFunction)
function mouseUpFunction(e) {
    mouseEvent="mouseup"
}

addEventListener("mousemove", mouseMoveFunction)
function mouseMoveFunction(e) {
    mouseEvent="mousemove"
}

addEventListener("mouseleave", mouseLeaveFunction)
function mouseLeaveFunction(e) {
    mouseEvent="mouseleave"
}

if (mouseEvent = "mousedown") {
    currentX=e.clientX - canvas.offsetLeft
    currentY=e.clientY - canvas.offsetTop

}

