$(document).ready(function () {

    $("#title").text('Modified Header');

    $("#title").html('<u> Modified Header<u/>');

    $('#name').on('keydown', function () {
        $("#title").text(this.value);
    });

    // $('#link').text('Youtube');
    // $('#link').attr('href','http://youtube.com');

    $('#link').attr({
        'class' : 'blue',
        'target' : 'blank'
    });

});