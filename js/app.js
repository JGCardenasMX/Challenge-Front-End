import { valida, validaMensaje} from "./validacion.js";

const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea")
const enviarMensaje = document.querySelector(".enviarMensaje");

document.getElementsByClassName('enviarMensaje').disabled = true

inputs.forEach( input => {
    input.addEventListener("blur", (input)=>{
        //console.log("Dejaste vacio")
        //console.log("input: ",input.target)
        valida(input.target)
    })
})

textarea.addEventListener("blur", (textarea)=>{
    //console.log("Dejaste vacio")
    //console.log("textarea: ",textarea.target)
    validaMensaje(textarea.target)
})


enviarMensaje.addEventListener("click", () =>{
    if (inputs[0].validity.valid && inputs[1].validity.valid && inputs[2].validity.valid && textarea.validity.valid) {
        //console.log("se procede a enviar el mensaje")
        document.getElementsByClassName('enviarMensaje').disabled = false
        alert("El mensaje se ha enviado correctamente.")
    }
})
