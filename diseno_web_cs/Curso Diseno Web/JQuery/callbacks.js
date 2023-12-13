$(document).ready(function () {


    function greeting() {
        alert("Hello");
    }

    $("#button").on('click', function () {
        $(".box").slideToggle(3000, greeting);
    })

});