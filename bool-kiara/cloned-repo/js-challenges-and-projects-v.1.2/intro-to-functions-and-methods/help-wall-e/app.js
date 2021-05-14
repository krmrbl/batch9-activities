const robot = document.querySelector('.robot')

//Challenge: Make Eve move when you click its body.

var addPixel = 150;

function moveRobot() {
    robot.style.marginLeft = addPixel + "px";
    addPixel += 100;
}
robot.addEventListener('click', moveRobot)