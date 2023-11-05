

document.getElementById("pic1").src = "Beck.jpg";
document.getElementById('result-title').innerText = ": Nobody's Fault But My Own";
document.getElementById('result-artist').innerText = ": Beck";
document.getElementById('result-otherart').innerText = ": N/A";
document.getElementById('result-instruments').innerText = ": Acoustic Guitar";

const links = ["https://youtu.be/7Yc3utlluNc&t=7509" , 
"https://youtu.be/bEBVkT9SWFY&t=3065", 
"https://youtu.be/Qh8m_ldN2zw&t=5956" , 
"https://youtu.be/QLLYLiTUyDY?feature=share&t=5669"];

const allLinks = links.map((link, i) => 
    `<div style="margin: 10px 0;">• <a href="${link}" style= "font-size: 25px;text-decoration: none;">Livestream  ${i}</a></div>`
).join('');

document.getElementById('result-links').innerHTML = allLinks;


window.addEventListener("resize", function () {
    var w = window.innerWidth;
    var h = window.innerHeight;

    document.getElementById("cool").innerText = "Inner Width: " + w + ", Inner Height: " + h;
});
