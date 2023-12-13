namespace Validations {

    export const validateText = (text: string): boolean => {
        let isValid: boolean = false;
        if (text.length > 3) {
            isValid = true;
        }
        return isValid;
    }

    export const validateDate = (fecha: Date): boolean => {
        return (isNaN(fecha.valueOf())) ? false : true;
    }

}


console.log(Validations.validateText("Rob"))