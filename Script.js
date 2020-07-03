document.getElementById("intro").innerHTML = "Aqui estoy cambiando el contenido del parrafo";
    function cambiar(){
        document.getElementById("change").innerHTML="Ya cambie gracias a una función llamada change";
    }
    // event handler
    document.getElementById("even").onclick = function(){
        // document.write("El usuario utilizo el boton");
        alert ('Bienvenido a mi sitio web');
    }

    document.getElementById("operacion").onclick = function (num1,num2){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let resultado = n1 + n2;
    console.log(resultado);
    document.getElementById("resultado").innerHTML = resultado;
    }


    // manejando elementos por tags
    let data = document.getElementsByTagName("h1");
    document.getElementById("tagmethod").innerHTML="Texto encontrado en el parrafo es: " + data[0].innerHTML;
    // manejando elementos con className
    let dataclase = document.getElementsByClassName("parrafo");
    document.getElementById("classmethod").innerHTML = "El primer dato que viene en el documento es: " + dataclase[0].innerHTML;
