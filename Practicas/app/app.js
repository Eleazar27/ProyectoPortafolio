function validar (){
    var value = document.getElementById ("userone").value;
    var uservalue = document.getElementById("usertwo").value;
    console.log(value);
    if(value == uservalue){
        if(value == 0 && uservalue == 0){
            swal("¡Error! Ingresé un dato valido");
        }else{
        swal("El usuario es correcto");
    }
    }else{
        swal("¡Error! Verifiqué el usuario")
    }
}

function validarpass(){
    var value = document.getElementById ("passone").value;
    var passvalue = document.getElementById("passtwo").value;
    console.log(value);
    if(value == passvalue){
        if(value == 0 && passvalue == 0){
            swal("¡Error! Ingresé un dato valido");
        }else{
        swal("La contraseña es correcta");
    }
    }else{
        swal("¡Error! Verifiqué la contraseña")
    }
}

// function alerta(){
//     swal("todo bien");
// }
