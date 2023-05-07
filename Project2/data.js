const data = [
    {
      id:'01',
      name: 'A Love Supreme',
      year: '1965',
      artist: 'John Coltrane',
      gender: 'male',
      img:"./assets/Coltrane/JohnColtrane_ALoveSupreme.jpg"
    },
    {
      id:'02',
      name: 'Blue Train',
      year: '1958',
      artist: 'John Coltrane',
      gender: 'male',
      img:"./assets/Coltrane/JohnColtrane_BlueTrain.jpg" 
    },
    {
      id:'03',
      name: 'My Favorite Things',
      year: '1961',
      artist: 'John Coltrane',
      gender: 'male',
      img:"./assets/Coltrane/JohnColtrane_MyFavoriteThings.jpg"
    },
    {
      id:'04',
      name: 'Giant Steps',
      year: '1960',
      artist: 'John Coltrane',
      gender: 'male',
      img:"./assets/Coltrane/JohnColtrane_GiantSteps.jpg"
    },
    {
      id:'05',
      name: 'In a Silent Way',
      year: '1969',
      artist: 'Miles Davis',
      gender: 'male',
      img:"./assets/MilesDavis/MilesDavisInASilentWay.jpeg"
    },
    {
      id:'06',
      name: 'Ascension',
      year: '1966',
      artist: 'John Coltrane',
      gender: 'male',
      img:"./assets/Coltrane/ColtraneAscension.webp"
    },
    {
      id:'07',
      name: 'Bitches Brew',
      year: '1970',
      artist: 'Miles Davis',
      gender: 'male',
      img:"./assets/MilesDavis/MilesDavis_BitchesBrew.jpg"
    },
    {
      id:'08',
      name: 'Kind of Blue',
      year: '1959',
      artist: 'Miles Davis',
      gender: 'male',
      img:"./assets/MilesDavis/MilesDavis_KindofBlue.jpg"
    },
    { 
      id:'09',
      name: 'Sketches of Spain',
      year: '1960',
      artist: 'Miles Davis',
      gender: 'male',
      img:"./assets/MilesDavis/SketchesOfSpain.jpeg"
    },
    {
      id:'10',
      name: 'The lady sings',
      year: '1952',
      artist: 'Billie Holiday',
      gender: 'female',
      img:"./assets/1/Billie.jpeg"
    },
    {
      id:'11',
      name: 'body and soul',
      year: '1957',
      artist: 'Billie Holiday',
      gender: 'female',
      img:"./assets/1/BillieBody.jpeg"
    },
    {
      id:'12',
      name: 'Satin',
      year: '1958',
      artist: 'Billie Holiday',
      gender: 'female',
      img:"./assets/1/BillieHoliday_LadyInSatin.jpg" 
    },
    {
      id:'13',
      name: 'Berlin',
      year: '1960',
      artist: 'Ella',
      gender: 'female',
      img:"./assets/1/EllaBerlin.jpeg"
    },
    {
      id:'14',
      name: 'Christmas',
      year: '1967',
      artist: 'Ella',
      gender: 'female',
      img:"./assets/1/EllaChristmas.jpeg"
    },
    {
      id:'15',
      name: 'Cole',
      year: '1956',
      artist: 'Ella',
      gender: 'female',
      img:"./assets/1/EllaCole.jpeg"
    },
    {
      id:'16',
      name: 'Duke',
      year: '1957',
      artist: 'Ella',
      gender: 'female',
      img:"./assets/1/EllaDuke.jpeg"
    },
    {
      id:'17',
      name: 'together',
      year: '1985',
      artist: 'Emily Remler',
      gender: 'female',
      img:"./assets/1/emily_Remler2.jpeg"
    },
    {
      id:'18',
      name: 'catwalk',
      year: '1985',
      artist: 'Emily Remler',
      gender: 'female',
      img:"./assets/1/EmilyCatwalk.jpeg"
    },
    { 
      id:'19',
      name: 'me',
      year: '1990',
      artist: 'Emily Remler',
      gender: 'female',
      img:"./assets/1/EmilyMe.jpeg"
    },
    {
      id:'20',
      name: 'firefly',
      year: '1981',
      artist: 'Emily Remler',
      gender: 'female',
      img:"./assets/1/EmilyRemler_Firefly.jpg"
    },
    {
      id:'21',
      name: '',
      year: '1964',
      artist: 'mary',
      gender: 'female',
      img:"./assets/1/MaryBlack.jpeg"
    },
    {
      id:'22',
      name: '',
      year: '1945',
      artist: 'mary',
      gender: 'female',
      img:"./assets/1/MaryZodiac.jpeg"
    },
    {
      id:'23',
      name: '',
      year: '1965',
      artist: 'nina',
      gender: 'female',
      img:"./assets/1/NinaBlues.jpeg"
    },
    {
      id:'24',
      name: '',
      year: '1969',
      artist: 'nina',
      gender: 'female',
      img:"./assets/1/NinaLove.jpeg"
    },
    {
      id:'25',
      name: '',
      year: '1965',
      artist: 'nina',
      gender: 'female',
      img:"./assets/1/NinaSpell.jpeg"
    },
    {
      id:'26',
      name: '',
      year: '1971',
      artist: 'nina',
      gender: 'female',
      img:"./assets/1/NinaSun.jpeg"
    },
    {
      id:'27',
      name: '',
      year: '1966',
      artist: 'nina',
      gender: 'female',
      img:"./assets/1/NinaWild.webp"
    },
    {
      id:'28',
      name: '',
      year: '2021',
      artist: 'Rita',
      gender: 'female',
      img:"./assets/1/RitaPayes.jpeg"
    },
    {
      id:'29',
      name: '',
      year: '1955',
      artist: 'Sarah',
      gender: 'female',
      img:"./assets/1/Sarah.jpeg"
    },
    {
      id:'30',
      name: '',
      year: '1960',
      artist: 'Sarah',
      gender: 'female',
      img:"./assets/1/SarahDreamy.jpeg"
    },
    {
      id:'31',
      name: '',
      year: '1958',
      artist: 'Sarah',
      gender: 'female',
      img:"./assets/1/SarahGeorge.jpeg"
    },
    {
      id:'32',
      name: '',
      year: '1955',
      artist: 'Sarah',
      gender: 'female',
      img:"./assets/1/SarahHigh.jpeg"
    },
    {
      id:'33',
      name: '',
      year: '1962',
      artist: 'Vi',
      gender: 'female',
      img:"./assets/1/ViBird.jpeg"
    },
    {
      id:'34',
      name: '',
      year: '1963',
      artist: 'Vi',
      gender: 'female',
      img:"./assets/1/ViLady.jpeg"
    },
    {
      id:'35',
      name: '',
      year: '1959',
      artist: 'Art',
      gender: 'male',
      img:"./assets/2/ArtMoanin.jpeg"
    },
    {
      id:'36',
      name: '',
      year: '1958',
      artist: '',
      gender: 'male',
      img:"./assets/2/BonfaAmor.jpg"
    },
    {
      id:'37',
      name: '',
      year: '1959',
      artist: '',
      gender: 'male',
      img:"./assets/2/BonfaSolo.jpg"
    },
    {
      id:'38',
      name: '',
      year: '1966',
      artist: '',
      gender: 'male',
      img:"./assets/2/FrankLife.jpeg"
    },
    {
      id:'39',
      name: '',
      year: '2008',
      artist: '',
      gender: 'male',
      img:"./assets/2/FrankNothing.jpeg"
    },
    {
      id:'40',
      name: '',
      year: '1966',
      artist: '',
      gender: 'male',
      img:"./assets/2/FrankSands.jpg"
    },
    {
      id:'41',
      name: '',
      year: '1974',
      artist: '',
      gender: 'male',
      img:"./assets/2/GetzCaptain.jpeg"
    },
    {
      id:'42',
      name: '',
      year: '1963',
      artist: '',
      gender: 'male',
      img:"./assets/2/GetzEncore.jpeg"
    },
    {
      id:'43',
      name: '',
      year: '1964',
      artist: '',
      gender: 'male',
      img:"./assets/2/GetzGilberto.jpg"
    },
    {
      id:'44',
      name: '',
      year: '1965',
      artist: '',
      gender: 'male',
      img:"./assets/2/GrantGreen_IdleMoments.jpeg"
    },
    {
      id:'45',
      name: '',
      year: '1975',
      artist: '',
      gender: 'male',
      img:"./assets/2/KeithJarrett_The KolnConcert.jpg"
    },
    {
      id:'46',
      name: '',
      year: '2017',
      artist: '',
      gender: 'male',
      img:"./assets/2/KurtCaipi.webp"
    },
    {
      id:'47',
      name: '',
      year: '2005',
      artist: '',
      gender: 'male',
      img:"./assets/2/KurtDeep.jpeg"
    },
    {
      id:'48',
      name: '',
      year: '2009',
      artist: '',
      gender: 'male',
      img:"./assets/2/KurtReflections.jpeg"
    },
    {
      id:'49',
      name: '',
      year: '2001',
      artist: '',
      gender: 'male',
      img:"./assets/2/KurtRosenwinkel_TheNextStep.jpg"
    },
    {
      id:'50',
      name: '',
      year: '1957',
      artist: '',
      gender: 'male',
      img:"./assets/2/LouisAngel.jpeg"
    },
    {
      id:'51',
      name: '',
      year: '1971',
      artist: '',
      gender: 'male',
      img:"./assets/2/LouisFriend.jpeg"
    },
    {
      id:'52',
      name: '',
      year: '1955',
      artist: '',
      gender: 'male',
      img:"./assets/2/LouisSatch.jpeg"
    },
    {
      id:'53',
      name: '',
      year: '1958',
      artist: '',
      gender: '',
      img:"./assets/2/LouisStars.jpg"
    },
    {
      id:'54',
      name: '',
      year: '2022',
      artist: '',
      gender: 'male',
      img:"./assets/2/Shabaka_AfrikanCulture.jpg.webp"
    },
    {
      id:'55',
      name: '',
      year: '1977',
      artist: '',
      gender: 'female',
      img:"./assets/3/Alice.jpeg"
    },
    {
      id:'56',
      name: '',
      year: '1971',
      artist: '',
      gender: 'female',
      img:"./assets/3/AliceColtrane.webp"
    },
    {
      id:'57',
      name: '',
      year: '2022',
      artist: '',
      gender: 'female',
      img:"./assets/3/Andrea.jpg"
    },
    {
      id:'58',
      name: '',
      year: '1965',
      artist: '',
      gender: 'female',
      img:"./assets/3/AstrudG.jpeg"
    },
    {
      id:'59',
      name: '',
      year: '1965',
      artist: '',
      gender: 'female',
      img:"./assets/3/AstrudShadow.jpeg"
    },
    {
      id:'60',
      name: '',
      year: '1956',
      artist: '',
      gender: 'female',
      img:"./assets/3/billieSolitude.jpeg"
    },
    {
      id:'61',
      name: '',
      year: '2021',
      artist: '',
      gender: '',
      img:"./assets/3/BlackFuture.webp"
    },
    {
      id:'62',
      name: '',
      year: '1958',
      artist: '',
      gender: 'male',
      img:"./assets/3/ChetNY.jpeg"
    },
    {
      id:'63',
      name: '',
      year: '1954',
      artist: '',
      gender: 'male',
      img:"./assets/3/ChetSings.jpeg"
    },
    {
      id:'64',
      name: '',
      year: '1959',
      artist: '',
      gender: 'male',
      img:"./assets/3/ColemanShape.jpg"
    },
    {
      id:'65',
      name: '',
      year: '1959',
      artist: '',
      gender: 'male',
      img:"./assets/3/Dave.jpeg"
    },
    {
      id:'66',
      name: '',
      year: '1955',
      artist: '',
      gender: 'female',
      img:"./assets/3/JulieLondon.jpeg"
    },
    {
      id:'67',
      name: '',
      year: '2018',
      artist: '',
      gender: 'male',
      img:"./assets/3/Kamasi_HeavenAndEarth.jpg.webp"
    },
    {
      id:'68',
      name: '',
      year: '2015',
      artist: '',
      gender: 'male',
      img:"./assets/3/Kamasi_TheEpic.jpeg.webp"
    },
    {
      id:'69',
      name: '',
      year: '1959',
      artist: '',
      gender: 'male',
      img:"./assets/3/Mingus.webp"
    },
    {
      id:'70',
      name: '',
      year: '2018',
      artist: '',
      gender: 'male',
      img:"./assets/3/QueenReptile.webp"
    },
    {
      id:'71',
      name: '',
      year: '1969',
      artist: '',
      gender: 'male',
      img:"./assets/3/SandersKarma.jpeg"
    },
    {
      id:'72',
      name: '',
      year: '1958',
      artist: '',
      gender: 'male',
      img:"./assets/3/SomethinElse.jpeg"
    },
  ]
  
  export { data };




  // {
  //   id:'01',
  //   name: 'A Love Supreme',
  //   year: '1965',
  //   artist: 'John Coltrane',
  //   gender: 'male',
  //   img:"./assets/Coltrane/JohnColtrane_ALoveSupreme.jpg"
  // },
  // {
  //   id:'02',
  //   name: 'Blue Train',
  //   year: '1958',
  //   artist: 'John Coltrane',
  //   gender: 'male',
  //   img:"./assets/Coltrane/JohnColtrane_BlueTrain.jpg" 
  // },
  // {
  //   id:'03',
  //   name: 'My Favorite Things',
  //   year: '1961',
  //   artist: 'John Coltrane',
  //   gender: 'male',
  //   img:"./assets/Coltrane/JohnColtrane_MyFavoriteThings.jpg"
  // },
  // {
  //   id:'04',
  //   name: 'Giant Steps',
  //   year: '1960',
  //   artist: 'John Coltrane',
  //   gender: 'male',
  //   img:"./assets/Coltrane/JohnColtrane_GiantSteps.jpg"
  // },
  // {
  //   id:'05',
  //   name: 'In a Silent Way',
  //   year: '1969',
  //   artist: 'Miles Davis',
  //   gender: 'male',
  //   img:"./assets/MilesDavis/MilesDavisInASilentWay.jpeg"
  // },
  // {
  //   id:'06',
  //   name: 'Ascension',
  //   year: '1966',
  //   artist: 'John Coltrane',
  //   gender: 'male',
  //   img:"./assets/Coltrane/ColtraneAscension.webp"
  // },
  // {
  //   id:'07',
  //   name: 'Firefly',
  //   year: '1981',
  //   artist: 'Emily Remler',
  //   gender: 'female',
  //   img:"./assets/EmilyRemler_Firefly.jpg"
  // },
  // {
  //   id:'08',
  //   name: 'Lady in Satin',
  //   year: '1958',
  //   artist: 'Billie Holiday',
  //   gender: 'female',
  //   img:"./BillieHoliday_LadyInSatin.jpg"
  // },
  // { //WRONG IMAGE//
  //   id:'09',
  //   name: 'Lullabies of Birdland',
  //   year: '1955',
  //   artist: 'Ella Fitzgerald',
  //   gender: 'female',
  //   img:"./assets/Coltrane/JohnColtrane_ALoveSupreme.jpg"
  // },
  // {
  //   id:'10',
  //   name: 'Kind of Blue',
  //   year: '1959',
  //   artist: 'Miles Davis',
  //   gender: 'male',
  //   img:"./assets/MilesDavis/MilesDavis_KindofBlue.jpg"
  // },