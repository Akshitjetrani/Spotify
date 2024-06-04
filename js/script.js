console.log("Let`s Do Jsvs Cript")




// async function main () {

// let a = await fetch("http://127.0.0.1:5500/src/songs/")
// let response = await a.text();
// console.log(response);

// let div = document.createElement("div");
// div.innerHTML = response;
// let tds = div.getelementByTagName("ul");
// console.log("tds")


// }

// main()

// async function main() {
//     try {
//         // Fetch the data from the given URL
//         let a = await fetch("http://127.0.0.1:5500/src/songs/");

//         // Check if the response is ok (status code 200-299)
//         if (!a.ok) {
//             throw new Error('Network response was not ok ' + a.statusText);
//         }

//         // Convert the response to text
//         let response = await a.text();
//         console.log(response);

//         // Create a new div element and set its innerHTML to the response
//         let element = document.createElement("div");
//         element.innerHTML = response;

//         // Get all td elements from the created div
//         let tds = element.getElementsByTagName("td");
//         console.log(tds);

//         // If you want to do something with the tds, you can iterate over them
//         for (let td of tds) {
//             console.log(td.textContent);
//         }
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//     }
// }

// main();


// async function getSongs() {
//     try {
//         // Fetch the data from the given URL
//         let a = await fetch("http://127.0.0.1:5500/src/songs/");

//         // Check if the response is ok (status code 200-299)
//         if (!a.ok) {
//             throw new Error('Network response was not ok ' + a.statusText);
//         }

//         // Convert the response to text
//         let response = await a.text();
//         console.log(response);

//         // Create a new div element and set its innerHTML to the response
//         let div = document.createElement("div");
//         div.innerHTML = response;

//         // Get all ul elements from the created div
//         let uls = div.getElementsByTagName("a");
//         console.log(uls);

//         // If you want to do something with the ul elements, you can iterate over them
//         for (let ul of uls) {
//             console.log(ul.textContent);
//         }
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//     }
// }

// getSongs();

// async function main() {

//     // Get the Song List From all Song
//     let songs = await getSongs()
//     console.log(songs)

//     // Paly the First song
//     var audio = new Audio(songs[5]);
//     audio.play();
// }

// main()

let currantSong = new Audio();


async function getSongs() {
    try {
        // Fetch the data from the given URL
        let response = await fetch("http://127.0.0.1:5500/Songs");

        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the response as text
        let html = await response.text();

        // Create a temporary div element to hold the HTML content
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        // Get all anchor (a) elements from the div
        let anchors = tempDiv.getElementsByTagName('a');

        // Extract href attributes from anchor elements
        let songUrls = [];
        for (let anchor of anchors) {
            songUrls.push(anchor.href.split("./Songs/")[0]);
        }
        // for (let anchor of anchors) {
        //     // Extract the song name from the href attribute
        //     let urlParts = anchor.href.split("Songs/");
        //     let songName = urlParts[urlParts.length - 1];
        //     songNames.push(songName);
        // }

        // Return the list of song URLs
        return songUrls;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return []; // Return an empty array in case of error
    }
}



 const playMusic =(track)=>{
    // let audio = new Audio(track)
    currantSong.src = track 
    // To Play one song at same time use .src only
    currantSong.play()
    play.src = "pause.svg"
 }



async function main() {

    
    try {
        
        let songs = await getSongs();
        console.log(songs);

        // Show All the Song s On Platy List 

        let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
        for (const song of songs) {
                songUL.innerHTML = songUL.innerHTML + ` 
                <li class="songcard flex  curser-pointer ">
                            <img src="src/assats/music.svg" alt="" srcset="" class="invert ">
                            <div class="info">
                                <div class ="song-name">${song.replaceAll("%20" , " ")}</div>
                                <div class ="song-artist">Guruji</div>
                            </div>
                            <div class="palynow flex">
                                <span class="pl-nw">Play Now</span>
                                <img src="src/assats/play.svg" alt="" srcset="" class=" invert">
                            </div> </li> `;
        }

        // i Attach an event listner to each song
        Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=>{
            // console.log(e.targat.getElementsByTagName["div"][0])
            e.addEventListener("click", element =>{
                console.log(e.querySelector(".info").firstElementChild.innerHTML)
                playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
            })
            
        })

        // Attach an eavt Listner to P[aly, Next and previous

        play.addEventListener("click", ()=>{
            if(currantSong.paused()){
                currantSong.play()
                play.src = "pause.svg";
            }
            else{
                currantSong.paused()
                paused.src = "play.svg";
            }
        })

        // for (const song of songs) {
        //     // Create a new list item for each song
        //     let listItem = document.createElement("li");
            
        //     // Create an anchor element for the song URL
        //     let anchor = document.createElement("a");
        //     anchor.href = song;
        //     anchor.textContent = song; // Display the URL as the link text
            
        //     // Append the anchor element to the list item
        //     listItem.appendChild(anchor);
            
        //     // Append the list item to the songUL
        //     songUL.appendChild(listItem);
        // }


        // if (songs.length > 0) {
        //     var audio = new Audio(songs[1]); // Play the first song
        //     audio.play();

        // }
    } catch (error) {
        console.error('There was an error:', error);
    }

    // audio.addEventListener("loadeddata", () => {
    //     let duration = audio.duration;
    //     console.log(duration)
    //     // The duration variable now holds the duration (in seconds) of the audio clip
    //   });
}

main();








