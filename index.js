const precio_bas = 1000;
const precio_ava = 1500;
const msg_txt = "El valor del plan seleccionado es: $";

plan.addEventListener('change', function(){
    const opcion = document.getElementById('plan').value;
    //document.getElementById('msg2').value = msg_txt + eval(opcion);

    if (opcion == 'precio_bas'){
        document.getElementById('msg2').value = msg_txt + precio_bas;

    } else if (opcion == 'precio_ava'){
        document.getElementById('msg2').value = msg_txt + precio_ava;
    }
})