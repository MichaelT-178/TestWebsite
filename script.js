window.addEventListener('load', () => {

    const title = "Yellow";
    const artist = "Coldplay";
    const other_artists = "";
    const appears = "Livestream 60,Livestream 96,Livestream 165";
    let instruments = "Acoustic Guitar";
    const image = `Beck.jpg`;
    const theLinks = "https://youtu.be/qfsm5R2EeOU&t=9262 , https://youtu.be/HTJSoHhm7aY&t=2592 , https://youtu.be/il7d9PknEmQ?feature=share&t=2061";

    let theTitle = title + (title.includes("Session #") ? " (Check comments for full timestamp)" : "");

    const mediaQuery = window.matchMedia('(min-device-width: 375px) and (max-device-width: 812px)');

    let numberOfH;
    let hString;
    
    if (theTitle.length < 28 && artist.length < 28 && other_artists.length < 28 && instruments.length < 28) {
        const songInfoHeading = document.getElementById('songInfo');
        const subtract = mediaQuery.matches ? 125 : 100;
        const newMarginLeft = songInfoHeading.style.marginLeft - subtract;

        songInfoHeading.style.marginLeft = newMarginLeft + 'px';
    }

    document.getElementById('result-title').innerHTML = ": " + theTitle;
    document.getElementById('result-artist').innerText = ": " + artist;
    document.getElementById('result-otherart').innerText = ": " + (other_artists || "N/A");
    document.getElementById('result-instruments').innerHTML = ": " + instruments;

    const instrumentList = instruments.split(",");

    const marginLeft = instrumentList.length > 2 ? 34 : 10;

    const instrumentStyling = "font-size: 24px;" + 
                              "color: lightBlue;" +
                              "text-align: left;" +
                              `margin-left: ${marginLeft}px;` +
                              "margin-bottom: 9px;";

    if (instrumentList.length > 2 && !mediaQuery.matches) {

        if (theTitle.length < 30 && artist.length < 28 && other_artists.length < 28) {
            numberOfH = 30 - theTitle.length;
            hString = 'h'.repeat(Math.max(numberOfH, 0));
        }
    
        theTitle = `${theTitle}<span style='color: black; user-select: none;'>${hString || ""}</span>`; 
        document.getElementById('result-title').innerHTML = "";
        document.getElementById('result-title').innerHTML = ": " + theTitle;
        
        document.getElementById('result-instruments').innerHTML = "";
        document.getElementById('result-instrument').innerHTML = instrumentList.map((instrument) => 
        ` <div style="${instrumentStyling}"> • ${instrument} </div>`
        ).join(''); 

        document.getElementById('result-instrument').style.marginTop = '-11px';

    }

                              
    if (mediaQuery.matches) {
        document.getElementById('result-instruments').innerHTML = "";
        
        document.getElementById('result-instrument').innerHTML = instrumentList.map((instrument) => 
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