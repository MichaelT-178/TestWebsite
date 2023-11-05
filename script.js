

document.getElementById("pic1").src = "Beck.jpg";
document.getElementById('result-title').innerText = ": Nobody's Fault But My Own";
document.getElementById('result-artist').innerText = ": Beck";
document.getElementById('result-otherart').innerText = ": N/A";
document.getElementById('result-instruments').innerText = ": Acoustic Guitar";




const mediaQuery = window.matchMedia('(min-device-width: 375px) and (max-device-width: 812px)');

const instruments = [
    "Acoustic Guitar",
    "Electric Guitar"
]

if (mediaQuery.matches) {
    document.getElementById('result-instruments').innerHTML = "";

    document.getElementById('result-instrument').innerHTML = instruments.map((instrument) => 
    ` <div style="font-size:24px;margin: 6px 0; left: 5px;margin-left: 33px;"> • ${instrument} </div>`
    ).join(''); 
}; 



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
