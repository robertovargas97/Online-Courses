
(function () { //Siempre mi codigo debe ir dentro de esto
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {


        if (document.getElementById("mapa")) { //Si existe la seccion para el mapa
            //CODIGO TOMADO DE LEAFLET OVERVIEW PARA MOSTRAR MAPA-------------------------------------------------------------------------------
            var map = L.map('mapa').setView([9.905496, -84.060194], 16);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([9.905496, -84.060194]).addTo(map)
                .bindPopup('My House.')
                .openPopup();
        }


        //Datos usuario----------------------------------------------------------
        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        var email = document.getElementById("email");

        //Pases------------------------------------------------------------------
        var paseDia = document.getElementById("pase_dia");
        var paseDosDia = document.getElementById("pase-dos-dias");
        var paseCompleto = document.getElementById("pase-completo");

        //Botones y divs---------------------------------------------------------

        var calcular = document.querySelector("#calcula");
        var botonRegistro = document.getElementById("btnRegistro");
        var errorDiv = document.getElementById("error");
        var resultado = document.getElementById("lista-productos");
        var sumaTotal = document.getElementById("suma-total");

        //Extras-----------------------------------------------------------------
        var etiquetas = document.getElementById("etiquetas");
        var camisas = document.getElementById("camisa-evento");
        var regalo = document.getElementById("regalo");

        //EventListeners----------------------------------------------------------

        if (document.getElementById("calcula")) { //Si el boton existe
            calcular.addEventListener("click", calcularMontos);
            paseDia.addEventListener("blur", mostrarTalleres);
            paseDosDia.addEventListener("blur", mostrarTalleres);
            paseCompleto.addEventListener("blur", mostrarTalleres);
            nombre.addEventListener("blur", validarCampo);
            apellido.addEventListener("blur", validarCampo);
            email.addEventListener("blur", validarEmail);


            //FUNCIONES----------------------------------------------------------------

            //Funcion para validacion de nombre,apellido y email
            function validarCampo(event) {
                event.preventDefault();
                if (this.value == "") { //Si no hay nada en algun campo
                    errorDiv.innerHTML = "Este campo es obligatorio"
                    errorDiv.style.color = "red";
                    errorDiv.style.fontWeight = "bold";
                    errorDiv.style.display = "block";
                }
                else {
                    errorDiv.style.display = "none";
                }
            }

            //Funcion para validacion de email
            function validarEmail(event) {
                event.preventDefault();
                if (this.value.indexOf("@") > -1) { //Si existe
                    errorDiv.style.display = "none";
                }
                else {
                    errorDiv.innerHTML = "El email debe contener @";
                    errorDiv.style.color = "red";
                    errorDiv.style.fontWeight = "bold";
                    errorDiv.style.display = "block";
                }
            }

            function calcularMontos(event) {//FUNCION PARA CALCULAR AL PRESIONAR EL BOTON CALCULAR
                event.preventDefault();
                if (regalo.value == "") { //Si no se elige regalo
                    alert("Debes elegir un regalo");
                    regalo.focus();
                }
                else { //Si se eligio regalo
                    //Se guardan la cantidad de boletos y extras
                    var boletosDia = parseInt(paseDia.value, 10) || 0,
                        boletosDosDias = parseInt(paseDosDia.value, 10) || 0,
                        boletoCompleto = parseInt(paseCompleto.value, 10) || 0,
                        cantCamisas = parseInt(camisas.value, 10) || 0,
                        cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

                    //Se calcula el total de dinero invertido
                    var totalDinero = (boletosDia * 30) + (boletosDosDias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * 0.93) + (cantEtiquetas * 2);

                    //Se hace el llamado al la funcion para mostrar la lista de productos
                    mostrarProductos(boletosDia, boletosDosDias, boletoCompleto, cantCamisas, cantEtiquetas);

                    //Apareciendo el total en la pagina
                    mostrarTotal(totalDinero);

                }
            }

            //Se encargar de mostrar los productos en pantalla
            function mostrarProductos(boletosDia, boletosDosDias, boletoCompleto, cantCamisas, cantEtiquetas) {
                var listaProductos = [];

                if (boletosDia > 0) {
                    listaProductos.push("Boletos por un día: " + boletosDia);
                }

                if (boletosDosDias > 0) {
                    listaProductos.push("Boletos por dos días: " + boletosDosDias);
                }
                if (boletoCompleto > 0) {
                    listaProductos.push("Boletos completos: " + boletoCompleto);
                }

                if (cantCamisas > 0) {
                    listaProductos.push("Cantidad de camisas: " + cantCamisas);
                }

                if (cantEtiquetas > 0) {
                    listaProductos.push("Cantidad de etiquetas: " + cantEtiquetas);
                }

                resultado.innerHTML = ""; //Resetea la informacion

                for (var i = 0; i < listaProductos.length; i++) { //Se imprime la informacion
                    resultado.innerHTML += listaProductos[i] + "<br>";
                }
                resultado.style.textAlign = "center";
                resultado.style.fontWeight = "bold";
            }

            //Muestra el total de dinero
            function mostrarTotal(totalDinero) {
                sumaTotal.innerHTML = "$" + totalDinero.toFixed(2);
                sumaTotal.style.fontSize = "25px";
                sumaTotal.style.textAlign = "center";
                sumaTotal.style.fontWeight = "bold";
                sumaTotal.style.color = "orangered";
            }

            //Aparecer y desaparecer los dias de los talleres
            function mostrarTalleres(event) {//FUNCION PARA MOSTRAR LOS TALLERES SEGUN EL DIA
                event.preventDefault();
                //Numero de boletos adquiridos
                var boletosDia = parseInt(paseDia.value, 10) || 0,
                    boletosDosDias = parseInt(paseDosDia.value, 10) || 0,
                    boletoCompleto = parseInt(paseCompleto.value, 10) || 0;

                if ((boletosDia == 0) && (boletosDosDias == 0) && (boletoCompleto == 0)) { //No se compra ningun boleto, se esconde la seccion de talleres
                    document.getElementById("viernes").style.display = "none";
                    document.getElementById("sabado").style.display = "none";
                    document.getElementById("domingo").style.display = "none";
                }
                else {//Si se compro algun boleto

                    if (boletoCompleto > 0) { //Se compró boleto completo, se muestra la seccion de talleres completa
                        document.getElementById("viernes").style.display = "block";
                        document.getElementById("sabado").style.display = "block";
                        document.getElementById("domingo").style.display = "block";
                    }

                    else {//No se compro boleto completo se esconde el domingo
                        document.getElementById("domingo").style.display = "none";//Se esconde domingo

                        if (boletosDosDias > 0) { //Se compro boleto de dos dias ,se muestran dos dias de talleres
                            document.getElementById("viernes").style.display = "block";
                            document.getElementById("sabado").style.display = "block";
                        }
                        else {//No se compro boleto de dos dias
                            document.getElementById("sabado").style.display = "none";//Se esconde sabado

                            if (boletosDia > 0) {//se compro boleto para un dia
                                document.getElementById("viernes").style.display = "block";
                            }
                        }
                    }
                }
            }

        }

    });//DOM CONTENT LOADED
})();


//JQuery code------------------------------------------------------------------------------------------

$(document).ready(function () {


    //Lettering-------------------------------------------------------------------------
    $(".nombre-sitio").lettering();

    //Menu fijo segun la altura de las cosas--------------------------------------------

    var windowHeight = $(window).height(); //Guarda la altura de la ventana
    var barraAltura = $(".barra").innerHeight(); //Guarda la altura de la barra

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > windowHeight) {
            $(".barra").addClass("fixed")
            $("body").css({ "margin-top": barraAltura + "px" });
        }
        else {
            $(".barra").removeClass("fixed");
            $("body").css({ "margin-top": "0px" });
        }
    });


    //Menu de hamburguesa responsive-------------------------------------------------------------------------------

    $(".menu-movil").on("click", function () {
        $(".navegacion-principal").slideToggle();
    });


    //Tab Programa de conferencias---------------------------------

    $(".ocultar").hide(); //Oculta los que no se desean ver
    $("#talleres").show(); //Muestra los talleres

    $(".menu-programa a").on("click", function () {
        $(".menu-programa a").removeClass("activo");
        $(this).addClass("activo");
        $(".ocultar").hide();
        var enlace = $(this).attr("href");//Guarda el enlace
        $(enlace).fadeIn();//Muestra lo que se desea con efecto bonito
        return false; //Evita el brinco
    });


    //Animaciones para los numeros con AnimateNumber

    var resumenLista = $(".resumen-evento");
    if (resumenLista.length > 0) {//Si existe el elmento usa waypoint para animar cuando se muestre en pantalla

        $(".resumen-evento").waypoint(function () {
            $(".resumen-evento li:nth-child(1) p").animateNumber({ number: 6 }, 1200);
            $(".resumen-evento li:nth-child(2) p").animateNumber({ number: 15 }, 1200);
            $(".resumen-evento li:nth-child(3) p").animateNumber({ number: 3 }, 1200);
            $(".resumen-evento li:nth-child(4) p").animateNumber({ number: 9 }, 1200);
        }, {
                offset: "60%" //A que altura de la pantalla se ejecuta el waypoints
            });
    }



    //Animaciones para los numeros con Countdown

    var cuenta = $(".cuenta-regresiva");
    if (cuenta.length > 0) {//Si existe el elemento
        $(".cuenta-regresiva").countdown("2018/12/10 09:00:00", function (event) {
            $("#dias").html(event.strftime("%D"));
            $("#horas").html(event.strftime("%H"));
            $("#minutos").html(event.strftime("%M"));
            $("#segundos").html(event.strftime("%S"));
        });
    }

});