const play = document.getElementById("play");
const audio = document.getElementById("audio");
const playpause = document.getElementById("play-pause");
const seekBar = document.getElementById("seekBar"); // Corrected variable name
let finaltime = document.getElementById("ft");
const coverart=document.querySelector(".coverart")
let wave = document.getElementById('wave');
const next=document.getElementById("next")
let curr_track = document.createElement('audio');
let trackName=document.getElementById("track")
let artistname=document.getElementById("artist")
const nowPlaying=document.getElementById("nowplaying")
const previous=document.getElementById("prev")
const heart=document.getElementById("hearticon")
const heartclass=document.getElementById("heartclass")
const musicicon=document.getElementById("musicicon");
const playlist = document.querySelector(".playlist");
window.onload = function() {
    loadTrack(trackIndex);
};



const musicList = [
    {
        img: 'yoyo.jpg',
        name: 'Brown Rang',
        artist: 'YOYO HONEY SINGH',
        music: 'brownrang.mp3'
    },
    {
        img: 'images.jpg',
        name: 'YOU AND ME',
        artist: 'SHUBH',
        music: 'You And Me - Shubh.mp3'
    },
    {
        img: 'kj.jpg',
        name: 'GOD DAMN',
        artist: 'KARAN AUJLA',
        music: 'GOD.mp3'
    },
    {
        img: 'images (2).jpg',
        name: 'GAL KARKE',
        artist: 'ASEES KAUR',
        music: 'Gal Karke.mp3'
    },
    {
        img: 't.jpg',
        name: 'KALE SHEESHE',
        artist: 'ADDY NAGAR',
        music: 'Kaley.mp3'
    },
    {
        
        img: 'images (3).jpg',
        name: 'VASTE',
        artist: 'DHVANI BHANUSHALI',
        music: 'Vaste.mp3'
    },
    
    {
        
        img: 'k.jpg',
        name: 'TEMPERORY PYAR',
        artist: 'KAKA',
        music: 'new_192_Temporary Pyar - Kaka.mp3'
    },
    {
        
        img: 'aur.jpg',
        name: 'TU HAI KHA',
        artist: 'AUR,USAMA,AHAD',
        music: 'thk.mp3'
    },
     
    {
        
        img: 'Alfaaz-Punjabi-2000-500x500.jpg',
        name: 'YAR BATHERE',
        artist: 'YOYO HONEY SINGH,ALFAAZ',
        music: 'Yaar Bathere 4.mp3'
    },
    
    {
        
        img: 'images.jpg',
        name: 'WE ROLL IN',
        artist: 'SHUBH',
        music: 'We_Rollin-Shubh-(Djjaani.com).mp3'
    },
    {
        
        img: '945.jpg',
        name: '9:45',
        artist: 'Jay Trak and Rooh Sandhu',
        music: '9 45_64-(PagalWorld).mp3'
    },
    
    {
        
        img: 'IMG00214-01.jpeg',
        name: 'SUPERMAN',
        artist: 'YOYO HONEY SINGH',
        music: 'Superman - Zorawar - Yo Yo Honey Singh 320Kbps.mp3'
    },
    
    {
        
        img: 'Kumar-Sanu-Alka-Yagnik.jpg',
        name: 'SUN MERI SHEHZADI',
        artist: 'ALKA YAGNIK & KUMAR SAHNU',
        music: 'Sun Meri Shehzadi Main Tera Shehzada_192(PaglaSongs).mp3'
    },
    
    {
        
        img: 'legend.jpg',
        name: 'SO HIGH',
        artist: 'SIDHU MOOSEWALA',
        music: 'So High.mp3'
    },
    
    {
        
        img: 'par.jpg',
        name: 'PARSHAWAN',
        artist: 'HARNOOR',
        music: 'Parshawan-Harnoor-(Djjaani.com).mp3'
    },
    
    {
        
        img: 'kingshit.jpg',
        name: 'KING SHIT',
        artist: 'SHUBH',
        music: 'King Shit(PagalWorld.com.cm).mp3'
    },
    
    {
        
        img: 'j-star-1.jpg',
        name: 'HULARA',
        artist: 'J STAR',
        music: 'Hulara - J Star (PagalWorld.com) - 320kbps.mp3'
    },
    
    {
        
        img: 'yoyo.jpg',
        name: 'DESI KALAKAR',
        artist: 'YOYO HONEY SINGH',
        music: 'Desi Kalakaar (From Desi Kalakaar).mp3'
    },
    
    {
        
        img: 'daku.jpg',
        name: 'DAKU',
        artist: ' CHANNI NATTAN',
        music: 'Daku(PagalWorld.com.se).mp3'
    },
    
    
    
   
    {
        
        img: 'cf.jpg',
        name: 'CALIFORNIA LOVE',
        artist: 'Cheema Ft.GUR SIDHU',
        music: 'California Love.mp3'
    },
    
   
    
    {
        
        img: 'Picsart_24-01-10_12-49-13-325.jpg',
        name: 'GADDI SHOOKDI',
        artist: 'UJJWALXARENS',
        music: 'Cheques.mp3'
    },
    
    
    {
        
        img: 'shubh2.jpg',
        name: 'BALLER',
        artist: 'SHUBH',
        music: 'BALLER-Slowed-and-Reverb-Shubh_52.mp3'
    },
    {
        
        img: 'vilen.jpg',
        name: 'EK RAAT',
        artist: 'VILEN',
        music: 'Ek Raat_320(PaglaSongs).mp3'
    },
    
    
];

audio.onloadedmetadata = function() {
    seekBar.value = audio.currentTime;
    seekBar.max = audio.duration;
    // finaltime.innerText=audio.duration;
};
let initial = "pause";
seekBar.onchange=function () {
    audio.play();
    audio.currentTime=seekBar.value;
    playpause.className = "fa-solid fa-pause";
    initial = "play";

}



// let initial = "pause";

play.addEventListener("click", () => {
    if (initial === "pause") {
        audio.play();
        coverart.classList.add('rotate');
        wave.classList.add('loader');

        
        initial = "play";
        playpause.className = "fa-solid fa-pause";
        setInterval(() => {
            seekBar.value = audio.currentTime;
        }, 1000);
    } else if (initial === "play") {
        audio.pause();
        initial = "pause";
        coverart.classList.remove('rotate');
        playpause.className = "fa-solid fa-play";
        coverart.classList.remove('rotate');
        wave.classList.remove('loader');
    }
});

let trackIndex = 0;
function loadTrack(trackIndex) {
    // clearInterval(updateTimer);
    // reset();

    const currentTrack = musicList[trackIndex];
    audio.src = currentTrack.music;
    audio.load();
    audio.play();

    coverart.querySelector('img').src = currentTrack.img;
    trackName.textContent = currentTrack.name; // Assuming you have elements with IDs 'trackName' and 'trackArtist'
artistname.textContent = currentTrack.artist; // Assuming you have elements with IDs 'trackName' and 'trackArtist'
    nowPlaying.textContent = `Playing music ${trackIndex +  1} of ${musicList.length}`;

    // updateTimer = setInterval(setUpdate, 1000);
    audio.addEventListener('ended', function() {
        // Move to the next track
        if (trackIndex < musicList.length - 1) {
            trackIndex += 1;
        } else {
            // Or loop back to the first track
            trackIndex = 0;
        }
        // Load and play the next track
        loadTrack(trackIndex);
    });
    

    // Update the trackIndex here
   
}

next.addEventListener("click",()=>{
    console.log("Next button clicked");
    if (trackIndex < musicList.length - 1) {
        trackIndex += 1;

    } else {
        trackIndex = 0;
    }
    playpause.className = "fa-solid fa-pause";
    coverart.classList.add('rotate');
        wave.classList.add('loader');

    loadTrack(trackIndex);
})
previous.addEventListener("click",()=>{
    console.log("pre button clicked");
    if (trackIndex >0) {
        trackIndex -= 1;

    } else {
        trackIndex = 0;
    }
    playpause.className = "fa-solid fa-pause";
    coverart.classList.add('rotate');
        wave.classList.add('loader');


    loadTrack(trackIndex);
})
   
heart.addEventListener("click", () => {
    if (heartclass.style.color === "black") {
        heartclass.style.color = "red";
        alert("ADDED TO YOUR FAVOURITIES")
    } else {
        heartclass.style.color = "black";
    }
});



let state="unactive";
musicicon.addEventListener("click", () => {
    
    if(state==="unactive"){
        playlist.classList.add("active"); 
        state="active"
    }

    else{
        playlist.classList.remove("active"); 
        state="unactive"
    }
    
});

function populatePlaylist() {
     

    musicList.forEach((song, index) => {
        // Create elements for each song
        const songItem = document.createElement("div");
        songItem.classList.add("song-item");

        const songName = document.createElement("p");
        songName.textContent = `${index + 1}. ${song.name}`;

        // const artistName = document.createElement("p");
        // artistName.textContent = `Artist: ${song.artist}`;

        // Append elements to the song item
        songItem.appendChild(songName);
        // songItem.appendChild(artistName);

        // Add event listener to play the song when clicked
        songItem.addEventListener("click", () => {
            
            loadTrack(index);
            playpause.className = "fa-solid fa-pause";
            coverart.classList.add('rotate');
            wave.classList.add('loader');

        });

        // Append the song item to the playlist container
        playlist.appendChild(songItem);
    });
}

// Call the function to populate the playlist
populatePlaylist();
