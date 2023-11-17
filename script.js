window.addEventListener("resize", function () {
    var w = window.innerWidth;
    var h = window.innerHeight;

    document.getElementById("cool").innerText = "Width: " + w + ", Height: " + h;
});