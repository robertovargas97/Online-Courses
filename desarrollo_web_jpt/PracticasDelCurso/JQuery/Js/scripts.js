$(document).ready(function () {
    "use strinct";

    $(".servicios nav a:first ").addClass("activo2");
    $("#viajes").show();


    $(".servicios nav a").on("click", function (evt) {
        var enlace = $(this).attr("href");//se captura el enlace
        $("div.servicios nav a").removeClass("activo2");//desmarca la pestaña anterior
        $(this).addClass("activo2");
        $("div.nuestros-servicios > div").fadeOut();
        $(enlace).fadeIn();//Mostrar la informacion correspondiente
        return false;
    });


    /*  
          //Arreglos en JQuery------------------------------------
      
          var viajes = ["Londres", "Valencia", "París", "Limón"];
      
          $.each(viajes, function (i, v) {
              if (i == 0) {
                  $("aside").append("<h2> Próximos Viajes </h2>")
              }
              $("aside").append("<li>" + v + "</li>");
      
          });
      
          var viajesPorFecha = {
              primero: "Heredia",
              segundo: "Guana",
              tercero: "Cancún"
          };
      
          $.each(viajesPorFecha, function (i,v) {
              alert(v);
          });
    */

    /*
     //ANIMACIONES CON JQUERY-------------------------------------
 
        //SlideUp y SliceDown
        $(".logo img").click(function () {
            $("main article:first").slideUp(1000);
        });
 
        $("aside").click(function () {
            $("main article:first").slideDown(1000);
        });
 
        $(".logo img").on("click", function () {
            $(this).animate({ "width": "200px" }, 1000);
        });
    
        $("main article img").on("mouseenter", aumentarImagen);
        $("main article img").on("mouseleave", disminuirImagen);
    
        function aumentarImagen() {
            $(this).animate({ "width": "70%" }, 1000);
        }
    
        function disminuirImagen() {
            $(this).animate({ "width": "250px" }, 1000);
        }
        
    */

    /*  
         //Cambiando el CSS-------------------------------------
         $(".logo img ").css("width", "100px")
    
         $("main article h2").css("color", "orangered");
    
         $("aside").css({
            "background-color": "#e1e1e1",
            "text-transform": "uppercase"
         });
    
         $(".navegacion").show();
         $(".navegacion ul li a").on("click", cambiarColor);
    
         function cambiarColor() {
            $(".navegacion").css("background-color", "#000000");
            $(".navegacion ul li a").css("color", "#0f00e4")
        }
    */

    /*
        //Modificando atributos-------------------------------
        $(".navegacion").show();
        $(".navegacion ul li:first a").attr("href", "http://www.udemy.com");
        $(".navegacion ul li:first a").attr("target", "_blank");
    
        $("main article:first img").attr("src", "img/imagen_2.jpg");
    
        $("main article:first img").on("click", function () {
            $(this).attr("src", "img/imagen_1.jpg");
            
        });
    */



    /* 
         //Modificar el texto de algun elemento del DOM-------------------
         $(".navegacion").show();
         $("main article:first h2").text("Hola");
         $("main article:first h2").html("<h1> Hola amigo<h1>");
         $(".navegacion ul li a:first").text("Home");
    */

    /*
        //Varios eventos juntos 
        $("main").on({
            click: function () {
                $(this).addClass("activo");
    
            }, mouseenter: function () {
                $(this).addClass("fondorojo");
    
            }, mouseleave: function () {
                $(this).removeClass("fondorojo");
                $(this).removeClass("activo");
            }
         })
    */

    /*
        //Agregando y removiendo clases-------------------------
 
        $("div.logo img").addClass("activo");
    
        $(".navegacion").show();
    
        $("main article:first").addClass("activo");
    
        $(".navegacion ul li a").on("click", function (e) {
            $(".navegacion ul li a").removeClass("activo");
            e.preventDefault();
            $(this).addClass("activo")
        });
    */

    //EVENTOS JQUERY----------------------------------------------
    /*
        $("#menu").on("click", function () {
            $(".navegacion").show();
        });
    */

    /*
       $("div.logo img").on("mouseenter", function () {
            console.log("Hola");
    
        });
    
        $("div.logo img").on("mouseleave", function () {
          console.log("Adiós");
    
        });
    */

    /*
        //Eiliminando contenido
        $("div.logo img").on("click",function(){
        $(this).remove();
        
        });
    
    */

    /*
        $("div.logo img").on("click", function () {
            console.log("Click en el logo");
        });
//----------------------------------------------------------------------
 
    */
    //$("main article:first").hide(); //Se esconde contenido

    /*
        //Clonar contenido con JQuery
        var copia = $("main article:last").clone();//Se clona
        var copia2 = $("main article:last").clone();//Se clona
        $("main").append(copia); //Se pega al final
        $("main").prepend(copia2); //Se pega al inicio
 
        var copia = $("main article:last").clone();//Se clona
        $(copia).appendTo("main");
 
        var copia = $("main article:last").clone();//Se clona
        $(copia).prependTo("main");
    */





});


