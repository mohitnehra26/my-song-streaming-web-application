console.log("Welcome to Ganna");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Lahore - Guru Randhawa", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Phulkari - Karan Randhawa", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Illegal Weapon - Garry Sandhu", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "8 parche - Baani Sandhu", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Bapu Zimidar - Jassi Gill", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Laung Laachi - Ammy Virk", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Suit Suit - Guru Randhawa", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Wakhra Swag - Badshah", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Sab Fade Jange - Parmish Verma", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Sakhiyaan - Maninder Buttar", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},




    {songName: "Agar Tum Saath Ho - Alka-Yagnik", filePath: "songs/11.mp3", coverPath: "covers/1.jpg"},
    {songName: "Badri Ki Dulhania -Title Track", filePath: "songs/12.mp3", coverPath: "covers/2.jpg"},
    {songName: "Dheere Dheere Se - Anuradha-Paudwal", filePath: "songs/13.mp3", coverPath: "covers/3.jpg"},
    {songName: "Hawa Banke - Darshan Raval", filePath: "songs/14.mp3", coverPath: "covers/4.jpg"},
    {songName: "Kun Faya Kun - Javed-Ali", filePath: "songs/15.mp3", coverPath: "covers/5.jpg"},
    {songName: "Main Nikla Gaddi Leke - Udit Narayan", filePath: "songs/16.mp3", coverPath: "covers/6.jpg"},
    {songName: "Mai Phir Bhi Tumko Chahunga - MKB", filePath: "songs/17.mp3", coverPath: "covers/7.jpg"},
    {songName: "Musafir Jaane Wale - Gadar", filePath: "songs/18.mp3", coverPath: "covers/8.jpg"},
    {songName: "O Saki Saki - Batla-House", filePath: "songs/19.mp3", coverPath: "covers/9.jpg"},
    {songName: "Sandese Aate Hain - Sonu-Nigam", filePath: "songs/20.mp3", coverPath: "covers/10.jpg"},



    {songName: "Luis Fonsi - Despacito", filePath: "songs/21.mp3", coverPath: "covers/1.jpg"},
    {songName: "John Lennon - Imagine", filePath: "songs/22.mp3", coverPath: "covers/2.jpg"},
    {songName: "Justin Bieber - As Long As You Love Me", filePath: "songs/23.mp3", coverPath: "covers/3.jpg"},
    {songName: "Maroon 5 - Girls Like You", filePath: "songs/24.mp3", coverPath: "covers/4.jpg"},
    {songName: "Shawn Mendes - Señorita", filePath: "songs/25.mp3", coverPath: "covers/5.jpg"},
    {songName: "The Chainsmokers - Closer", filePath: "songs/26.mp3", coverPath: "covers/6.jpg"},
    {songName: "Ed Sheeran - Shape Of_You", filePath: "songs/27.mp3", coverPath: "covers/7.jpg"},
    {songName: "Justin Beaber - Let Me Love You", filePath: "songs/28.mp3", coverPath: "covers/8.jpg"},
    {songName: "Michael Jackson - Billie_Jean", filePath: "songs/29.mp3", coverPath: "covers/9.jpg"},
    {songName: "Wiz Khalifa - See You Again", filePath: "songs/30.mp3", coverPath: "covers/10.jpg"},




]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=30){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

