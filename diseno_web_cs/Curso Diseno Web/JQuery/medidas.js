$(document).ready(function () {
    var title = $("#title");
    var info = $("#info");

    //Width 
    info.append('Width : ' + title.width() + 'px <br/>');
    info.append('Width + padding : ' + title.innerWidth() + 'px <br/>');
    info.append('Width + padding + border : ' + title.outerWidth() + 'px <br/>');
    info.append('Width + padding + border + margin : ' + title.outerWidth(true) + 'px <br/>');

    info.append('<br/>');

    //Height
    info.append('Height : ' + title.height() + 'px <br/>');
    info.append('Height + padding : ' + title.innerHeight() + 'px <br/>');
    info.append('Height + padding + border : ' + title.outerHeight() + 'px <br/>');
    info.append('Height + padding + border + margin : ' + title.outerHeight(true) + 'px <br/>');

});