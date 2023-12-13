(function () {

    var boxes = document.getElementsByTagName('div');
    boxes[1].textContent = 'Jiji soy caja 1';
    boxes[2].innerHTML = 'Nuevo';

    //Adding nodes to DOM

    //1) Create element
    var newDiv = document.createElement('div');

    //2)Create inside text
    var textNode = document.createTextNode('Creado');

    //3) Join Elements
    newDiv.appendChild(textNode);

    //4)Add atributes and set position
    newDiv.setAttribute('class', 'box orange');
    var container = document.getElementById('container'); //Select father to add a child
    container.appendChild(newDiv);

    //Modifying class or id of some element

    newDiv.id = 'firstCreate';
    //newDiv.className = 'box';

    var parentNode = newDiv.parentNode; //Way to know the parent element of the node
    console.log(parentNode);
    parentNode.insertBefore(newDiv, parentNode.children[1]);

    //Replace Nodes
    parentNode.replaceChild(newDiv,parentNode.children[2]);

    //Delete Nodes
    parentNode.removeChild(parentNode.children[0]);

}());