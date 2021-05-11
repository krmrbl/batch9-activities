var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var s4 = document.getElementById("s4");
var s5 = document.getElementById("s5");
var s6 = document.getElementById("s6");
var n1 = document.getElementById("next1");
var n2 = document.getElementById("next2");
var n3 = document.getElementById("next3");
var n4 = document.getElementById("next4");
var n5 = document.getElementById("next5");
var b1 = document.getElementById("back1");
var b2 = document.getElementById("back2");
var b3 = document.getElementById("back3");
var b4 = document.getElementById("back4");
var b5 = document.getElementById("back5");

n1.onclick = function() {
s1.style.left = "-1100px";
s2.style.left = "0px";
}
b1.onclick = function() {
s1.style.left = "0px";
s2.style.left = "1100px";
}
n2.onclick = function() {
s2.style.left = "-1100px";
s3.style.left = "0px";
}
b2.onclick = function() {
s2.style.left = "0px";
s3.style.left = "1100px";
}
n3.onclick = function() {
s3.style.left = "-1100px";
s4.style.left = "0px";
}
b3.onclick = function() {
s3.style.left = "0px";
s4.style.left = "1100px";
}
n4.onclick = function() {
s4.style.left = "-1100px";
s5.style.left = "0px";
}
b4.onclick = function() {
s4.style.left = "0px";
s5.style.left = "1100px";
}
n5.onclick = function() {
s5.style.left = "-1100px";
s6.style.left = "0px";
}
b5.onclick = function() {
s5.style.left = "0px";
s6.style.left = "1100px";
}