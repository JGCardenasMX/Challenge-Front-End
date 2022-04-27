export function valida(input) {
    //console.log(input.dataset.tipo)
    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

export function validaMensaje(textarea) {
    //console.log(textarea.validity.valid)
    const tipoDeTextarea = textarea.dataset.tipo;
    

    if (textarea.validity.valid) {
        textarea.parentElement.classList.remove("textarea-container--invalid");
        textarea.parentElement.querySelector(".textarea-message-error").innerHTML = "";
    }else{
        textarea.parentElement.classList.add("textarea-container--invalid");
        textarea.parentElement.querySelector(".textarea-message-error").innerHTML = mostrarMensajeDeError(tipoDeTextarea, textarea);
    }
}


function completado(textarea) {
    console.log(tipoDeInput)
    /*
    if (input.validity.valid && textarea.validity.valid) {
        console.log("se puede enviar el mensaje")
        //textarea.parentElement.classList.remove("disabled");
    }*/
}

const mensajesDeError= {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío.",
        patternMismatch: "Solo se aceptan hasta 50 caracteres (letras y espacios).",
    },
    email: {
        valueMissing: "El campo email no puede estar vacío.",
        typeMismatch: "El correo no es valido.",
        patternMismatch: "El correo no es valido.",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío."
    },
    mensajes: {
        valueMissing: "El área de mensaje no puede estar vacía, puedes poner hasta 300 caracteres."
    },
    
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
    "patternMismatch",
]

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        if (input.validity[error]) {
            //console.log(tipoDeInput, error);
            //console.log(input.validity[error]);
            //console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
};

/*
function validarDatos(params) {
    window.event.preventDefault();

    if (document.form.nombre.value=="") {
        alert("Campo nombre obligatorio")
        document.form.nombre.focus();
    }else if (document.form.email.value=="") {
        alert("Campo email obligatorio")
        document.form.email.focus();
    }else if (document.form.asunto.value=="") {
        alert("Campo asunto obligatorio")
        document.form.asunto.focus();
    }else if (document.form.email.value.indexOf("@")==-1|| document.form.email.value.indexOf(".")==-1) {
        alert("Campo email obligatorio")
        document.form.email.focus();
    }
    
}

document.querySelector("form").addEventListener("submit", validarDatos)

*/
