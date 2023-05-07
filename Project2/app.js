import {data} from './data.js'
  const yearBtn = document.querySelector('#year-btn')
  const allBtn = document.querySelector('#all-btn')
  const femaleBtn = document.querySelector('#female-btn');
  const albumDisplayPanel = document.querySelector('#album-display-panel');
  const p = document.createElement("p");
  
let albumItems = ''
let femaleAlbums = []

//data.forEach((item)=>{
 // albumItems = albumItems + `<img src="${item.img}" alt="" class="album-photo">`
//})

generateAlbumHtml(data)

function generateAlbumHtml(list){
  albumItems = ''
  list. forEach((item)=>{
    albumItems = albumItems + `<img src="${item.img}" alt="" class="album-photo">`
  })
  albumDisplayPanel.innerHTML = albumItems
}


//albumDisplayPanel.innerHTML = albumItems



function femaleSort(){
  //篩選出女生的專輯
  let femaleAlbums = data.filter((item)=>{
    return item.gender === 'female' 
  })
  generateAlbumHtml(femaleAlbums)
}

//function yearSort(){}


function yearSort(){
   let yearSortList = [...data].sort((a,b)=>{
    return Number(a.year) - Number(b.year)
   })
   generateAlbumHtml(yearSortList)
  }

  //albumItems = ''
  //femaleAlbums.forEach((item)=>{
   // albumItems = albumItems + `<img src="${item.img}" alt="" class="album-photo">`
  //})
    //albumDisplayPanel.innerHTML = albumItems

  //}
  
   //sort all artists
  allBtn.addEventListener('click',()=>{generateAlbumHtml(data)});
  //sort by year btn
  yearBtn.addEventListener('click',yearSort);
  //sort female artists
  femaleBtn.addEventListener('click',femaleSort);
  // albumDisplay.innerHTML = <div></div>
  console.log(albumDisplay);
