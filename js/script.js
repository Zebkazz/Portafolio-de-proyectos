$(function() {
  var $body = $(document);
  $body.bind('scroll', function() {
    // "Disable" the horizontal scroll.
    if ($body.scrollLeft() !== 0) {
      $body.scrollLeft(0);
    }
  });
});



// mesaje de bienvenida
  function mensaje(){
    alert("Por favor presiona f11 para una mayor inmersion");
  }

document.querySelector(".contmenu").style.transition = "all 1500ms";
document.querySelector(".contmenu").style.left= "0px";
  let seleccion = [".opc",".opc1",".opc2",".opc3",".opc4"];
  let seleccion2 = [".menutar",".menutar1",".menutar2",".menutar3",".menutar4"];
  function sel(val) {
      var fonblur = document.querySelector(".oculcont");
      for (n = 0; n < 5; n++) {
        var opcion = document.querySelector(seleccion[n]);
        var menutar = document.querySelector(seleccion2[n]);
          opcion.classList.remove("opc_move");
          fonblur.classList.remove("oculcont_move");
          menutar.classList.remove("menutar_move");}
      if (val == "opc") {
        opcion = document.querySelector(".opc");
        opcion.classList.add("opc_move");
        fonblur.classList.add("oculcont_move");
        var menutar = document.querySelector(".menutar");
        menutar.classList.add("menutar_move");
      }else if (val == "opc1") {
        var opcion = document.querySelector(".opc1");
        opcion.classList.add("opc_move");
        fonblur.classList.add("oculcont_move");
        var menutar = document.querySelector(".menutar1");
        menutar.classList.add("menutar_move");
      }else if (val == "opc2") {
        var opcion = document.querySelector(".opc2");
        opcion.classList.add("opc_move");
        fonblur.classList.add("oculcont_move");
        var menutar = document.querySelector(".menutar2");
        menutar.classList.add("menutar_move");
      }else if (val == "opc3") {
        var opcion = document.querySelector(".opc3");
        opcion.classList.add("opc_move");
        fonblur.classList.add("oculcont_move");
        var menutar = document.querySelector(".menutar3");
        menutar.classList.add("menutar_move");
      }else if (val == "opc4") {
        var opcion = document.querySelector(".opc4");
        opcion.classList.add("opc_move");
        fonblur.classList.add("oculcont_move");
        var menutar = document.querySelector(".menutar4");
        menutar.classList.add("menutar_move");
      }else{
        var opcion = document.querySelector(".sal");
        fonblur.classList.remove("oculcont_move");
        menutar.classList.remove("menutar_move");
      }
     
  }




 