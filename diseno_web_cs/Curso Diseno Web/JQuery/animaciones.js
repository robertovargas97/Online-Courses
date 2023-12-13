$(document).ready(function () {

    //$(selecto).animate({parametros},velocidad,callback)
    //No funciona con colores

    // $("#button").on('click', function () {
    //     $(".box").animate({
    //         // width: '300px',
    //         // opacity: '0.2'
    //         // width: '+=300px'
    //         marginLeft: '+=50px'
    //     }, 1000, function () {
    //         // alert("End")
    //     });
    // });

    // $("#button").on('click', function () {
    //     $(".box").toggleClass('animation');
    // });

    $("#button").on('click', function () {

        $(".box").animate({
            marginLeft: '+=400px'
        }, 2000);

        $(".box").animate({
            marginLeft: '0px'
        }, 2000);
    });

    $("#stop").on('click',function(){
        //Parametrso : limpiar animaciones,saltar al final
        $(".box").stop(true,false);
    })

    //Parando animaciones


});