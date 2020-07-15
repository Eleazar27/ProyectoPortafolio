$(document).ready(function(){
    $('#save').click(function(){
        var datauser = $('obtenerdatos');
        $.ajax({
            type:"POST",
            URL:"guardar.php",
            data: datauser,
            success:function(res){
                if(res==1){
                    alert("se han registrado los datos");
                }
                else{
                    alert("se ha producido un error");
                }
            }
        });
        return false;
    })
})