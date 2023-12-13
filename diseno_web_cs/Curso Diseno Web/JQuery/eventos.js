$(document).ready(function () {

    var button = $('#button');
    var buttonDisable = $('#disable');


    // button.click(function () {
    //     alert('Hello');
    // });


    // function greeting() {
    //     alert('greeting');
    // }
    // button.click(greeting);

    //EVENTO CON CALLBACK
    // button.on('mouseenter', function () {
    //     button.css({ background: '#f1a4c' });
    // });

    // button.on('click', function () {
    //     alert('Greetings');
    // });

    // buttonDisable.on('click', function () {
    //     button.off('click');
    // });

    $('a').on('click', function (event) {
        event.preventDefault();
    })

});