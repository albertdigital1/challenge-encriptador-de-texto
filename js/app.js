

function encriptar(){
    let textMessage = document.getElementById('textMessage').value;
    let result=isCharValido(textMessage);
    if (result==true){
        textMessage=textMessage.replace('e', 'enter');
        textMessage=textMessage.replace('i', 'imes');
        textMessage=textMessage.replace('a', 'ai');
        textMessage=textMessage.replace('o', 'ober');
        textMessage=textMessage.replace('u', 'ufat');
         
        document.getElementById('textMessageResult').value=textMessage;
        document.getElementById('textMessageResult').style.display = "block";
        document.getElementById('encriptador_buttons_copy').style.display = "block";
        document.getElementById('encriptador_imagen').style.display = "none";
        document.getElementById('encriptador_contenido_titulo').style.display = "none";
        document.getElementById('encriptador_contenido_subtitulo').style.display = "none";
        
        
        
        


    }else{
        alert('Solo letras minúsculas y sin acentos');
        document.getElementById("textMessage").focus();
        
    }
    
  
    
}

function desencriptar(){
    let textMessage = document.getElementById('textMessage').value;    
    let result=isCharValido(textMessage);
    if (result==true){
        textMessage=textMessage.replace('enter','e');
        textMessage=textMessage.replace('imes','i');
        textMessage=textMessage.replace('ai','a');
        textMessage=textMessage.replace('ober','o');
        textMessage=textMessage.replace('ufat','u');
        
        document.getElementById('textMessageResult').value=textMessage;

    }else{
        alert('Solo letras minúsculas y sin acentos');
        document.getElementById("textMessage").focus();
        
    }

   
}


function isCharValido(string) {
    let valor = true;
    for (let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i);
        console.log (code);
        if ((code >= 97 &&  code <= 122) || code==32 ) {
            valor = true;            
        }else{
            valor = false;
            break;
        }

    }

    return valor;
}


function clearText(){
    document.getElementById('textMessage').value="";   
}

function copyMessage(){
    let copyText = document.getElementById('textMessageResult').value;
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
   
}

/* Business Rules
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada 
también devolver una palabra encriptada para su versión original.

*/