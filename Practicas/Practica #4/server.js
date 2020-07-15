
const express = requiere ('express');
const app = express();

app.get('/', function(req,res){
    res.send("El servidor funciona");
});

app.get('/soy', function(req,res){
    Res.send('Bienvenido a soy Eleazar');
});

app.get('/contacto', function(req,res){
    res.send('Bienvenido a Contacto');
});

app.listen(2500,function(){
    console.long("El servidor esta corriendo en el puerto 2500");
});