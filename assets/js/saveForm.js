
var acepta = true;
function isValidEmail(email) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(email)) {
        return false;
    } else {
        return true;
    }
}
function sendDataEmprendedor(x) {
    var nombre = $('#nombre').val();
    var apellido1 = $('#apellido1').val();
    var apellido2 = $('#apellido2').val();
    var cedula = $('#cedula').val();
    var correo = $('#correo').val();
    var telefono = $('#telefono').val();
    var term = $('#term').val();
    var tipo = x;

    if (nombre != 0 && apellido1 != 0 && apellido2 != 0 && cedula != 0 && correo != 0 && telefono != 0 && term != 0) {
        if (isValidEmail(correo)) {
            $.ajax({
                url: "sendForm.php",
                method: "POST",
                data: {nombre: nombre, apellido1: apellido1, cedula: cedula, apellido2: apellido2, correo: correo, telefono: telefono, tipo: tipo}
            }).done(function (r) {
                var json = JSON.parse(r);
                if (json.type == 'error') {
                    $('#error').html("No se envio el correo");
                } else {
                    $('#cedula').val();
                    $('#nombre').val('');
                    $('#apellido1').val('');
                    $('#apellido2').val('');
                    $('#correo').val('');
                    $('#telefono').val('');
                    $('#cedula').val('');
                    $('#' + tipo + '_caja').css("display", "flex");
                    $('#error').html('');
                }
            });
        } else {
            $('#error').html("La dirección de correo " + correo + " es incorrecta.");
        }
    } else {
        if (nombre != 0) {
            if (apellido1 != 0) {
                if (apellido2 != 0) {
                    if (cedula != 0) {
                        if (telefono != 0) {
                            if (term != 0) {

                            } else {
                                $('#error').html('No ha aceptado los Terminos');
                            }
                        } else {
                            $('#error').html('El Telefono es obligatorio');
                        }
                    } else {
                        $('#error').html('El Cedula es obligatorio');
                    }
                } else {
                    $('#error').html('El Segundo Apellido es obligatorio');
                }
            } else {
                $('#error').html('El Primer Apellido es obligatorio');
            }
        } else {
            $('#error').html('El nombre es obligatorio');
        }
    }
}

function acept() {

    if (!acepta) {
        acepta = true;
        $('#term_caja').css("display", "flex");
    } else {
        acepta = false;
    }

}

function closePop() {
    $('.contPop').hide();
}