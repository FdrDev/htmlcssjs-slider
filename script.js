function leftClick(){
  console.log("left");
  var activeImg = $(".images > img.active");
  activeImg.removeClass("active");

  var prevImg = activeImg.prev("img");
  if(activeImg.hasClass("first")){
    prevImg = $(".images > img.last")
  }
  prevImg.addClass("active");
  updateDots();
}

function rightClick(){
  console.log("right");
  var activeImg = $(".images > img.active");
  activeImg.removeClass("active");

  var nextImg = activeImg.next("img");
  if(activeImg.hasClass("last")){
    nextImg = $(".images > img.first")
  }
  nextImg.addClass("active");
  updateDots();
}

function dotsClick(){
  me = $(this);
  var meIndex = me.index();
  console.log("me index", meIndex );

  var activeImg = $(".images > img.active");
  activeImg.removeClass("active");

  var imgs = $(".images > img");
  var next = imgs.eq(meIndex);
  next.addClass("active");
  updateDots();
}

function updateDots(){
  //trovare indice immagini attive
  var imgs = $(".images > img"); //seleziona tutte le img
  var activeIndex;

  for(var i =0 ; i<imgs.length; i++){
    if(imgs.eq(i).hasClass("active")){ //se c'è active metti su activeIndex
      activeIndex = i;
    }

  var oldDot = $(".pointContainer > i.fas"); //prendi pallino pieno
  oldDot.removeClass("fas").addClass("far"); //svuotalo

  var dots =  $(".pointContainer > i"); //seleziona tutti i punti
  var nextDots = dots.eq(activeIndex); //prendi l'elemento con active
  nextDots.removeClass("far").addClass("fas"); //riempi il punto vuoto

  }

  console.log("activeIndex", activeIndex);

}


//eq prende l'iesimo elemento. Conta da quanti elementi ci sono
//e ci restituisce un array del numero degli elementi


function init() {
  var leftPart = $(".leftArr");
  var rightPart = $(".rightArr");
  var dots = $(".pointContainer i");

  leftPart.click(leftClick);
  rightPart.click(rightClick);
  dots.click(dotsClick);
}

$(document).ready(init);
