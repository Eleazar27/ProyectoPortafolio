<?php

$conexion = mysqli_conect('localhost','root','datos');

$usuario=$_POST['text'];
$correo=$_POST['email'];
$contraseña=$_POST['password'];
$edad=$_POST['edad'];

// echo $usuario= ;
// echo $correo= ;
// echo $contraseña= ;
// echo $edad= ;

$query ="INSERT INTO datos(text,email,password,edad) VALUES('$usuario','$correo','$contraseña','$edad')"

echo mysqli_query($conexion)
?>