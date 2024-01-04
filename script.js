window.addEventListener('load', () => {

    const title = "Pink Moon";
    const artist = "Nick Drake";
    const other_artists = "";
    const appears = "Solo Video (Pink Moon Album/M),Livestream 74,Livestream 75 (DX1R),Livestream 81 (DX1R),Livestream 126 (DX1R),Livestream 164 (DX1R)";
    const instruments = "Acoustic Guitar, (M) - Martin 00-15m, (DX1R) - Martin DX1R";
    const image = "Beck.jpg";
    const theLinks = "https://youtu.be/GtqrWBN9tsc&t=0 , https://youtu.be/WQ8mpI5z7z4&t=7275 , https://youtu.be/uLKs6770MzM&t=4465 , https://youtu.be/0vseNNLzOWY&t=8700 , https://youtu.be/ebv-JlkIPUY&t=1905 , https://youtu.be/c1H63fb1AJs?feature=share&t=5984";

    theTitle = title.replace(" (Classical Guitar)", "").replace(" (Electric Song)", "");
    theTitle += title.includes("Session #") ? " (Check comments for full timestamp)" : "";

    document.getElementById('result-title').innerText = ": " + theTitle;
    document.getElementById('result-artist').innerText = ": " + artist;
    document.getElementById('result-otherart').innerText = ": " + (other_artists || "N/A");
    document.getElementById('result-instruments').innerText = ": " + instruments;
    
    const mediaQuery = window.matchMedia('(min-device-width: 375px) and (max-device-width: 812px)');
    
    if (mediaQuery.matches) {
        document.getElementById('result-instruments').innerHTML = "";

        document.getElementById('result-instrument').innerHTML = instruments.split(",").map((instrument) => 
        ` <div style="font-size:24px;margin: 6px 0; left: 5px;margin-left: 33px;"> • ${instrument} </div>`
        ).join(''); 
    }; 
    
    window.addEventListener('error', () => {
        console.error("Image not found");
        console.error("Image name: " + image);
    }, true);

    document.getElementById("pic1").src = image;

    web = appears.split(",");

    const alllinks = theLinks.split(" , ").map((link, i) => 
    `<div style="margin: 10px 0;">• <a href="${link}" style= "font-size: 25px;text-decoration: none;">${web[i]}</a></div>`
    ).join('');

    document.getElementById('result-links').innerHTML = alllinks;

});