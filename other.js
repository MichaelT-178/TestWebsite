window.addEventListener("resize", function () {
    var w = window.innerWidth;
    var h = window.innerHeight;

    document.getElementById("cool").innerText = "Inner Width: " + w + ", Inner Height: " + h;
});