window.addEventListener('load', () => {

    const title = "FULL Moon";
    const artist = "Nick Drake";
    const other_artists = "";
    const appears = "Solo Video (Pink Moon Album/M),Livestream 74,Livestream 75 (DX1R),Livestream 81 (DX1R),Livestream 126 (DX1R),Livestream 164 (DX1R)";
    let instruments = "Acoustic Guitar, (M) - Martin 00-15m, (DX1R) - Martin DX1R"; 
    
    let numberOfH;
    let hString;

    //if condition is true add h's for length purposes to push thing to the left over so it's not dead center
    //Kind of a ghetto fix but it works.
    if (title.length < 28 && artist.length < 28 && other_artists.length < 28 && instruments.length < 28) {
        numberOfH = 27 - instruments.length;
        hString = 'h'.repeat(Math.max(numberOfH, 0));
    }

    instruments = `${instruments}<span style='color: red; user-select: none;'>${hString || ""}</span>`; 

    const image = "Beck.jpg";
    const theLinks = "https://youtu.be/GtqrWBN9tsc&t=0 , https://youtu.be/WQ8mpI5z7z4&t=7275 , https://youtu.be/uLKs6770MzM&t=4465 , https://youtu.be/0vseNNLzOWY&t=8700 , https://youtu.be/ebv-JlkIPUY&t=1905 , https://youtu.be/c1H63fb1AJs?feature=share&t=5984";

    theTitle = title.replace(" (Classical Guitar)", "").replace(" (Electric Song)", "");
    theTitle += title.includes("Session #") ? " (Check comments for full timestamp)" : "";

    document.getElementById('result-title').innerText = ": " + theTitle;
    document.getElementById('result-artist').innerText = ": " + artist;
    document.getElementById('result-otherart').innerText = ": " + (other_artists || "N/A");
    document.getElementById('result-instruments').innerHTML = ": " + instruments;
    
    const mediaQuery = window.matchMedia('(min-device-width: 375px) and (max-device-width: 812px)');
    const instrumentStyling = "font-size: 24px;" + 
                              "color: lightBlue;" +
                              "text-align: left;" +
                              "margin-left: 12px;" +
                              "margin-bottom: 9px;";

    if (mediaQuery.matches) {
        document.getElementById('result-instruments').innerHTML = "";
        
        document.getElementById('result-instrument').innerHTML = instruments.split(",").map((instrument) => 
        ` <div style="${instrumentStyling}"> • ${instrument} </div>`
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