(function () {
    var form = document.getElementById("form"),
        name = form.name, mail = form.name, sex = form.sex, terms = form.terms,
        error = document.getElementById('error');


    function validateName() {
        var correct = false;
        if (name.value == '' || name.value == null) {
            error.style.display = 'block';
            error.innerHTML += '<li>Meta un nombre perro</li>';
        }
        else {
            error.style.display = 'none';
            correct = true;
        }
        return correct;
    }

    function validateMail() {
        var correct = false;
        if (mail.value == '' || mail.value == null) {
            error.style.display = 'block';
            error.innerHTML += '<li>Meta un correo perro</li>';
        }
        else {
            error.style.display = 'none';
            correct = true;
        }
        return correct;
    }

    function validateSex() {
        var correct = false;
        if (sex.value == '' || sex.value == null) {
            error.style.display = 'block';
            error.innerHTML += '<li>Seleccione un sexo perro</li>';
        }
        else {
            error.style.display = 'none';
            correct = true;
        }
        return correct;
    }

    function validateTerms() {
        var correct = false;
        if (terms.checked == false) {
            error.style.display = 'block';
            error.innerHTML += '<li>Seleccione terminos perro</li>';
        }
        else {
            error.style.display = 'none';
            correct = true;
        }
        return correct;
    }




    function validateForm(event) {
        event.preventDefault();
        error.innerHTML = '';
       
        validateMail(); 
        validateSex();
        validateTerms();
        validateName(); 

    }



    form.addEventListener('submit', validateForm);

}());