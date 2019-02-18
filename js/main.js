javaBar.value = 86;
csBar.value = 63;

for (var q of document.getElementsByClassName("bar")) {
    var qx = q.value * 5;
    q.style.width = ""+qx+"px";
}
