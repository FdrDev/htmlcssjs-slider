function leftClick() {
  //seleziona la foto attiva e rimuovi la classe active
    var activePhoto = $(".images>img.active");
    activePhoto.removeClass("active");
  //seleziona la foto successiva e aggiungi classe active
    var prevPhoto = activePhoto.prev("img");
  //se la prossima foto
    if( activePhoto.hasClass("first")){
       prevPhoto = $(".images>img.last");
    }
     prevPhoto.addClass("active");
     updateDots();
}

function rightClick() {
//seleziona la foto attiva e rimuovi la classe active
  var activePhoto = $(".images>img.active");
  activePhoto.removeClass("active");
//seleziona la foto successiva e aggiungi classe active
  var nextPhoto = activePhoto.next("img");
//se la prossima foto
  if(activePhoto.hasClass("last")){
    nextPhoto = $(".images>img.first");
  }
  nextPhoto.addClass("active");
  updateDots();
}

function updateDots() {
  //associare pallini alle immagini
  var allImg = $(".images>img");
  var allDots = $(".pointContainer>i");
  var activePhoto = $(".images>img.active");
  var activeDots; //var che seleziona il pallino collegato all'immagine

  //assegna a activeDots quale pallino è collegato all'immagine
  for(var i = 0 ; i < allImg.length ; i++){
    if(allImg.eq(i).hasClass("active")){
      activeDots = i;
    }
  }

  //Rendi vuoto il pallino non attivo
  var emptyDots = $(".pointContainer>i.fas");
  emptyDots.addClass("far").removeClass("fas");

  //sposta il pallino pieno seguendo quello attivo
  var fullDots = $(".pointContainer>i.fas"); //pallino pieno
  if(activePhoto.hasClass("active")){
    allDots.eq(activeDots).addClass("fas").removeClass("far");
  }
}

function clickDots() {
  //rileva il pallino cliccato
  clickedDot = $(this);
  //identifica tra tutti
  var clickedDotsIndex = clickDots.index();

  //Utilizzo lo stesso sistema delle Frecce laterali
  //In questo caso le sto byPassando
  var activeImg = $(".images > img.active");
  activeImg.removeClass("active");

  //prendo tutte le immagini
  var imags = $(".images>img");

  //Associo con una variabile l'indice della foto
  //che corrispondente al pallino cliccato
  var dotCorrispondentPhoto = img.eq(clickedDotsIndex)

  //Assegno la classe active (display:block) alla foto
  //che corrisponde all'indice del pallino cliccato
  dotCorrispondentPhoto.addClass("active");

  //Aggiorno i pallini come per le Frecce
  updateDots();
}





function init(){
var leftSideClick = $(".leftArr");
var rightSideClick = $(".rightArr");
var clickPoint = $(".pointContainer>i");

leftSideClick.click(leftClick);
rightSideClick.click(rightClick);
clickPoint.click(clickDots);

}

$(document).ready(init);
