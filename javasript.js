
var play =  document.getElementById("play")
var backword =  document.getElementById("backword")
var forward =  document.getElementById("forward")
   let arr = [
       {songname:"kalki",url:"./music/kalki.mp3", img:"https://c.saavncdn.com/163/Kalki-Original-Soundtrack-Malayalam-2019-20191216112038-500x500.jpg"},
       {songname:"believe",url:"./music/song.mp3",img:"https://i.pinimg.com/564x/f2/45/78/f245788f5cb69e0550d0e46122870a9a.jpg"},
{songname:"hall of frame",url:"./music/song2.mp3",img:"https://upload.wikimedia.org/wikipedia/en/6/67/Halloffamethescript.jpg"},
   ]
   var allsongs = document.getElementById("all-songs")
   var poster = document.querySelector(".left")
   // console.log(allsongs)
   var audio = new Audio()
   let selectsongs = 0
   function mainfunction(){
       let clutter =""
       arr.forEach(function(elem,index){
           clutter +=` <div class="song-card" id="${index}">
               <div class="part">
                   <img src="${elem.img}" alt="">
                   <h2>${elem.songname}</h2>
               </div>
               <h6>4:34</h6>
           </div>`

       })
       allsongs.innerHTML = clutter
       audio.src = arr[selectsongs].url
       poster.style.backgroundImage = `url(${ arr[selectsongs].img}`

   }
   mainfunction()
   allsongs.addEventListener("click",function(dets){
       selectsongs = dets.target.id
       mainfunction()
       audio.play()
       play.innerHTML = `<i class="ri-pause-line"></i>`
       flag = 1

   })
   flag = 0

   play.addEventListener("click",function(){
       if(flag  == 0){
       play.innerHTML = `<i class="ri-pause-line"></i>`
       mainfunction()
       audio.play()
       flag = 1
       }
       else{
           play.innerHTML = `<i class="ri-play-line"></i>`
       mainfunction()
       audio.pause()
       flag = 0
       }
   })
   backword.addEventListener("click",function(){
       if(selectsongs < arr.length -1){
           selectsongs++
           mainfunction()
           audio.play()
       }
       else{
           backword.style.opacity = 0.4
       }
   })
   forward.addEventListener("click",function(){
       if(selectsongs >0){
           selectsongs--
           mainfunction()
           audio.play()
       }
       else{
           forward.style.opacity = 0.4
       }
   })


