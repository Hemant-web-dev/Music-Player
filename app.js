let audio=document.querySelector(".player-song")
let songnames =document.querySelector(".song-name")
let songs=document.querySelectorAll(".songs")
let btn=document.querySelector(".play")
let img=document.querySelector(".gif img")
let prev=document.querySelector(".prev")
let next=document.querySelector(".next")
let range=document.querySelector(".range")
let shuffle=document.querySelector(".shuffle")
img.style.visibility = 'hidden';
let file
let shuffler="off"
songs.forEach(song => {
    song.addEventListener("click",()=>{
      songs.forEach(s =>{
        s.style.backgroundImage='url("")'
      })
     let songlist= song.getAttribute("data-audio")
     song.style.backgroundImage='url("songs-back.jpeg")'
     audio.src=songlist
     songnames.innerText=songlist.toUpperCase()
     audio.play();  
     file="selected"
     img.style.visibility = 'visible';
    })
});
btn.addEventListener("click", () => {
  if (file==="selected") {
    if (audio.paused) {
      audio.play();
      btn.innerHTML='<i class="fa-solid fa-pause"></i>'
      img.style.visibility = 'visible';
    } else {
      audio.pause();
      btn.innerHTML='<i class="fa-solid fa-play"></i>';
      img.style.visibility = 'hidden';
    }
  } 
  else{
    alert("please select a song first")
  }  
});
prev.addEventListener("click",()=>{
  if (file === "selected") {
    if (shuffler==="off") {
      for (let i = 0; i < songs.length; i++) {
        if (songs[i].getAttribute("data-audio") === songnames.innerText.toLowerCase()) {
          if (i!==0) {
            let newsong = songs[i - 1].getAttribute("data-audio");
            audio.src = newsong;
            songnames.innerText = newsong.toUpperCase();
            audio.play()
          } else {
            let newsong=songs[songs.length-1].getAttribute("data-audio")
            audio.src=newsong
            songnames.innerText=newsong.toUpperCase();
            audio.play();
          }
          break;
        }
      }
    } 
    else {
      let newsong = songs[Math.floor(Math.random() * songs.length)].getAttribute("data-audio");
      audio.src=newsong 
      songnames.innerText=newsong.toUpperCase();
      audio.play();
    }
  } 
  else {
    alert("Please select a song");
  }
});
next.addEventListener("click", () => {
  if (file === "selected") {
    if (shuffler==="off") {
      for (let i = 0; i < songs.length; i++) {
        if (songs[i].getAttribute("data-audio") === songnames.innerText.toLowerCase()) {
          if (i!== songs.length-1) {
            let newsong = songs[i + 1].getAttribute("data-audio");
            audio.src = newsong;
            songnames.innerText = newsong.toUpperCase();
            audio.play()
          } else {
            let newsong=songs[0].getAttribute("data-audio")
            audio.src=newsong
            songnames.innerText=newsong.toUpperCase();
            audio.play();
          }
          break;
        }
      }
    } 
    else {
      let newsong = songs[Math.floor(Math.random() * songs.length)].getAttribute("data-audio");
      audio.src=newsong 
      songnames.innerText=newsong.toUpperCase();
      audio.play();
    }
  } else {
      alert("Please select a song");
  }
});
shuffle.addEventListener("click",()=>{
  if (shuffler === "off") {
    shuffler = "on";
    let shuffles = document.querySelector(".shuffle i")
    shuffles.style.color = "green"
  } else {
    shuffler = "off"
    let shuffles = document.querySelector(".shuffle i")
    shuffles.style.color = "white"
  }
})
 
prev.addEventListener("click",()=>{
  if(file === "selected"){
    for(i=0;i<songs.length;i++){
      let currentsong = songs[i].getAttribute("data-audio")
      let currentsrc = songnames.innerText
      songs[i].style.backgroundImage='url("songs-back.jpeg")'
      if(currentsong !== currentsrc.toLowerCase()){[
        songs[i].style.backgroundImage='url("")'
      ]}
    }
  }
})

next.addEventListener("click",()=>{
  if(file === "selected"){
    for(i=0;i<songs.length;i++){
      let currentsong = songs[i].getAttribute("data-audio")
      let currentsrc = songnames.innerText
      songs[i].style.backgroundImage='url("songs-back.jpeg")'
      if(currentsong !== currentsrc.toLowerCase()){[
        songs[i].style.backgroundImage='url("")'
      ]}
    }
  }
  else{
    alert("please select a song first")
  }
})
