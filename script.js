import { playlist } from "./info.js";

const albumCover=document.querySelector('.album-cover');
const songname=document.querySelector('.song-name');
const artistName=document.querySelector('.artist-name');
const track=document.querySelector('.track');

const prev=document.querySelector('.prev-song');
const next=document.querySelector('.next-song');
const playPause=document.querySelector('.play-pause');
const icon=document.querySelector('.play-pause i');
const progress=document.querySelector('.progress');

let index=0;
let toggle=0;

prev.addEventListener('click',()=>{
  index=(index-1 + playlist.length) % playlist.length;
  track.src=playlist[index].track;
  albumCover.src=playlist[index].albumCover;
  songname.textContent=playlist[index].songName;
  artistName.textContent=playlist[index].artistName;
  icon.classList.remove('fa-pause');
  icon.classList.add('fa-play');
  toggle=0;
});

next.addEventListener('click',()=>{
  index=(index+1) % playlist.length;
  track.src=playlist[index].track;
  albumCover.src=playlist[index].albumCover;
  songname.textContent=playlist[index].songName;
  artistName.textContent=playlist[index].artistName;
  icon.classList.remove('fa-pause');
  icon.classList.add('fa-play');
  toggle=0;
});

playPause.addEventListener('click',()=>{
  if(!toggle){
    track.currentTime=progress.value;
    track.play();
    icon.classList.replace('fa-play','fa-pause');
    toggle=1;
  }
  else{
    track.pause();
    icon.classList.replace('fa-pause','fa-play');
    toggle=0;
  }
});

progress.addEventListener('input', () => {
  track.currentTime = progress.value; 
});

track.onloadedmetadata=()=>{
  progress.max=track.duration;
  progress.value=track.currentTime;
};

track.addEventListener('timeupdate', () => {
  // Only update slider if user isn't dragging
  if (!progress.matches(':active')) {
    progress.value = track.currentTime;
  }
});
