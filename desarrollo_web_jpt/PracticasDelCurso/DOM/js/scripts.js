

(function () { //Se ejecuta hasta que la pagina se carga por completo
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {

    /*
        GetElementById----------------------------------
        var logo = document.getElementById('logo');
        var navegacion = document.getElementById("navegacion");
    
        logo.hasAttribute("class"); //Dice si tiene o no una clase
        logo.getAttribute("class");//Dice el nombre de la clase
        logo.setAttribute("class", "logo"); //Cambia la clase el nombre de la clase
    
        navegacion.style.display = "none";
    */

    /*
        //GetElementByClassName----------------------------------
        var navegacion = document.getElementsByClassName("navegacion");
        console.log(navegacion[0]);
    
        var contenido = document.getElementsByClassName("contenido");
        console.log(contenido);
    
        contenido[0].style.display = "none";
    */

    /*
        //GetElementByTag-----------------------------------------
        var enlaces = document.getElementsByTagName("a");
        console.log(enlaces.length);
    
        for (var i = 0; i < enlaces.length; i++) {
          enlaces[i].setAttribute("target", "_blank");
        }
        console.log(enlaces);
    
        var enlacesSidebar = document.getElementById("sidebar").getElementsByTagName("a");
        console.log(enlacesSidebar);
    
        for (var i = 0; i < enlacesSidebar.length; i++) {
          enlacesSidebar[i].setAttribute("href", "http://www.google.com")
        }
    
    */

    /*
        //GetElementQuerySelector------------------------------------
        var logo = document.querySelector('#logo');
        console.log(logo);
      
        var encabezado = document.querySelectorAll("h2 , footer p");
        console.log(encabezado);
      
        var enlaces = document.querySelectorAll("a");
        console.log(enlaces);
      
  
        var enlace = document.querySelectorAll("a");
        console.log(enlace);
  
        for (var i = 0; i < enlace.length; i++) {
        console.log(enlace[i].innerText);
        }
    

        var enlaces = document.querySelectorAll("#menu ul li a")[0];
        console.log(enlaces.nodeType);
        console.log(enlaces.nodeName);
        console.log(enlaces.attributes);
        console.log(enlaces.firstChild);
        console.log(enlaces.firstChild.nodeValue);
        enlaces.firstChild.nodeValue = "Home";
        enlaces.id = "mi_id";
    */



    /*  //Crear contenido--------------------------------------------------------------
        var sidebar = document.querySelector("#sidebar");
        var nuevoElemento = document.createElement("H1");
        var nuevoTexto = document.createTextNode("Hola Mundo");
    
        nuevoElemento.appendChild(nuevoTexto);
        sidebar.appendChild(nuevoElemento);
    
        //Crear y agregar la entrada 6 ------------------------------------------------------------------
        var enlacesSidebar = document.querySelector("#sidebar ul"); //Seleccion la lista desordenada del sidebar
        var nuevoElementoLista = document.createElement("li");//Crea el elemento lista
        var nuevoEnlace = document.createElement("a");//Crea el elemento enlace
        nuevoEnlace.setAttribute("href", "#"); //Agrega el atributo al enlace
        var textoEnlace = document.createTextNode("Entrada 6"); //Crea el texto del enlace
    
        enlacesSidebar.appendChild(nuevoElementoLista);//Agrega el elmento de la lista al sidebar
        nuevoElementoLista.appendChild(nuevoEnlace); //Agrega al elemento de la lista el enlace
        nuevoEnlace.appendChild(textoEnlace);//Agrega el texto al enlace
    */

    /*
        //Clonar un nodo
        var contenido = document.querySelectorAll("main");
        var nuevoContenido = contenido[0].cloneNode(true);
        var sidebar = document.querySelector("aside")
        sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5]);
    */


    /*
        //Controlando la insercion
        var sidebar = document.querySelector("aside")
        var masVisitados = document.createElement("H2");
        var textoVisitados = document.createTextNode("Post más Visitados");
    
        masVisitados.appendChild(textoVisitados);
        sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);
    
        var contenido = document.querySelectorAll("main h2");
    
    
        for (var i = 0; i < contenido.length; i++) {
          var nuevoElemento = document.createElement("li");
          var nuevoTexto = document.createTextNode(contenido[i].firstChild.nodeValue);
          nuevoElemento.appendChild(nuevoTexto);
          sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);
    
        }
    */

    /*
        //Remover Nodos del HTML-------------------------------------------------------------------------------------
        var primerPost = document.querySelector("main article");
        primerPost.parentNode.removeChild(primerPost);
    
        //Remover en la posicion que desee---------------------------------------------------------------------------
        var enlaceaBorrar = document.querySelectorAll("#navegacion nav ul li a")[5]; //Selector de lo que se desea borrar
        enlaceaBorrar.parentNode.removeChild(enlaceaBorrar); //Se borra desde el padre(no se puede borrar directamente)
    */

    /*  
        //Remplaza nodo con uno existente
        var nodoViejo = document.querySelector("main h2"); //Selecciona el texto a remplazar
        var nuevoNodo = document.querySelector("footer h2"); //selecciona el nuevo texto que sera remplazo
        nodoViejo.parentNode.replaceChild(nuevoNodo, nodoViejo);//Se remplaza desde el padre como al eliminar
    
        //Remplazo de nodo con uno nuevo
        var nuevoTitulo = document.createElement("h2"); //Creo el nuevo elemento
        var nuevoTexto = document.createTextNode("Hola");//Creo el texto que tendra el nuevo elemento
        nuevoTitulo.appendChild(nuevoTexto);//Agrego texto al elemento nuevo
    
        var nodoViejo = document.querySelector("main h2");//Selecciono lo que quiero remplazar
        nodoViejo.parentNode.replaceChild(nuevoTitulo, nodoViejo);//Remplazao el nodo
    */
  });

})();