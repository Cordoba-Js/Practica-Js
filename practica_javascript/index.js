const contact_form = document.getElementById('contactForm');
const button_form = document.getElementById('formBtn');

contact_form.reset();

const regEx = {
    full_name: /^[a-zA-ZÀ-Ÿ]{2,15}\b\s?([a-zA-ZÀ-Ÿ]{2,15}\b\s?){1,6}$/g,
    id: /[0-9]{6,10}/g,
    cellphone: /^\+?[0-9]{7,11}/g,
    area: /^[a-zA-ZÀ-Ÿ]{2,15}\s?([a-zA-ZÀ-Ÿ]{2,15}\b\s?)?/g,
    location: /^[a-zA-ZÀ-Ÿ]{2,30}\b\s?([a-zA-ZÀ-Ÿ]{2,15}\b\s?)?([a-zA-ZÀ-Ÿ]{2,15}\b\s?)?/g,
    email: /^[a-zA-Z0-9][a-zA-Z0-9._\-]{5,28}[a-zA-Z]\b\@[a-zA-Z0-9][a-zA-Z0-9._\-]{2,12}[a-zA-Z]\.[a-zA-Z]{2,3}(\.[a-zA-z]{2,3})?/g,
    work_position: /^[a-zA-ZÀ-Ÿ]{2,15}\s?([a-zA-ZÀ-Ÿ]{2,15}\b\s?)?/g,
    //free_time :
}

let validFields = {
    id: false,
    cellphone: false,
    area: false,
    location: false,
    full_name: false,
    email: false,
    work_position: false,
    free_time: false
}


document.querySelectorAll('.div__field').forEach((field) => {
    const input_field = field.querySelector('.form__input')

    input_field.addEventListener('change', (e) => {
        console.log(`${input_field.name} `, input_field.value);
        // e.preventDefault();

        formValidation(/*field, */input_field);
    })
})


formValidation = (/*field,*/ input_field) => {
    console.log('formValidation');
    let empty_field = emptyField(input_field.value.trim());

    if (!empty_field) {
        console.log('switch');
        switch (input_field.name) {
            case 'id':
                console.log('case');
                fieldFormatValidate(regEx.id, input_field.value.trim(), input_field.name);
                break;
            case 'cellphone':
                fieldFormatValidate(regEx.cellphone, input_field.value.trim(), input_field.name);
                break;
            case 'area':
                fieldFormatValidate(regEx.area, input_field.value.trim(), input_field.name);
                break;
            case 'location':
                fieldFormatValidate(regEx.location, input_field.value.trim(), input_field.name);
                break;
            case 'full_name':
                fieldFormatValidate(regEx.full_name, input_field.value.trim(), input_field.name);
                break;
            case 'email':
                fieldFormatValidate(regEx.email, input_field.value.trim(), input_field.name);
                break;
            case 'work_position':
                fieldFormatValidate(regEx.work_position, input_field.value.trim(), input_field.name);
                break;
            case 'free_time':
                validFields[input_field.name] = true;
                break;
        }

    } else {
        alert('No pueden haber campos vacíos.');
    }
}

emptyField = (field_value/*, validFields*/) => {
    console.log('emptyField');
    if (field_value.length > 0) {
        return false;
    } else {
        return true;
    }
}

fieldFormatValidate = (regExp, field_value, field_name) => {
    if (regExp.test(field_value)) {
        validFields[field_name] = true;
    } else{
        validFields[field_name] = false;
        alert(`El dato ingresado en el campo ${field_name} no tiene un formato correcto. Guíese del ejmplo que el campo muestra.`)
    }
}
/*
submitControl = () => {

    let invalid_field = false;
    Object.values(validFields).forEach((att) => {
        if (!att) {
            invalid_field = true;
        }
    })

    if (invalid_field) {
        button_form.toggleAttribute('disabled', true);
    } else {
        button_form.toggleAttribute('disabled', false);
    }
}
*/

contact_form.addEventListener('submit', (event) => {
    console.log('submit');
    event.preventDefault();

    if(validFields.id && validFields.cellphone && validFields.area && validFields.location && validFields.email && validFields.full_name && validFields.work_position && validFields.free_time){
        console.log('if submit')
        // const formData = new formData(event.target);
        contact_form.reset();
    }else{

    }
});
