/*registro*/ 
function resgistroUsuario(){
    let datosUsuario = {
      "nombre": prompt("Ingrese nombres"),
      "apellido": prompt("Ingrese apellidos"),
      "cedula": prompt("Ingrese cedula"),
      "fechaNacimiento": prompt("Ingrese su fecha de nacimiento"),
      "usuario": prompt("Ingrese su Usuario"),
      "contraseña": prompt("Ingrese su contraseña"),
      "telefono ": prompt("Ingrese su telefono"),
      "correo": prompt("Ingrese su correo")
  }
    console.log("El registro fue exitoso")

    return datosUsuario
  }
   
  let usuarios = [];   
  let registroUsuarios = prompt("Desea registrar Usuario");
  do{   
    if(registroUsuarios === "si"){
      usuarios.push(resgistroUsuario());
    }
    registroUsuarios= prompt("Desea registrar un nuevo Usuario");
  }while (registroUsuarios === "si");
  
  let usuarioregistrado= login();

function login(){
    let login = prompt("Desea iniciar sesión?");
    let nUsuario;
    let nContraseña;
    if (login=== "si"){
        nUsuario = prompt("Ingrese Usuario");
        nContraseña = prompt("Ingrese Contraseña");
        for(var i=0 ; i<usuarios.length; i++){
            if(usuarios[i].usuario === nUsuario && usuarios[i].contraseña === nContraseña){
            console.log("Bienvenid@", usuarios[i].nombre);
            }  
        }
    }
    else{
            alert("Gracias por su visita");
        }    
}
 // registros
 do {
    menu="Bienvenido, Estos son los servicios que ofrecemos\n\n";
    menu+="1. Masaje exfoliante\n Precio: 45000\n\n";
    menu+="2. Peluquería\n Precio: 30000\n\n";
    menu+="3. Uñas\n Precio: 20000\n\n";
    menu+="Ingrese el codigo";
    let codigo=parseInt(prompt(menu));

    switch (codigo) {
        case 1: 
            //let usuario = [];
            do{
                menu1="Estos son los empleados\n\n";
                menu1+="1. Rafael Hernandez\n";
                menu1+="2. Daniel Gomez\n";
                menu1+="3. Leslie Cruz\n";
                menu1+="4. Aleja Montoya\n";
                menu1+="5. German Angarita\n";
                menu1+="Ingrese el codigo\n\n";
                codigo1=parseInt(prompt(menu1));

                switch (codigo1) {
                    case 1:
                            lunes=["10:00", "14:00", "18:00"];
                            martes=["08:30", "12:30", "16:30"];
                            miercoles=["09:00"," 13:00", "17:00"];
                            jueves=["10:30", "14:30", "18:30"];
                            viernes=["10:30", "14:30", "18:30"];
                            sabado=["08:30"," 12:30", "16:30"];
                        
                            console.log("lunes: ",lunes.join( ),"\nmartes: ",martes.join( ),"\nmiercoles: ",miercoles.join( ),"\njueves: ",jueves.join( ),"\nviernes: ",viernes.join( ),"\nsabado: ",sabado.join( ));
                            break;
                    case 2:
                        lunes=["10:30", "14:30", "18:30"];
                        martes=["09:30", "13:30", "17:30"];
                        miercoles=["08:00"," 12:00", "16:00"];
                        jueves=["07:30", "11:30", "16:30"];
                        viernes=["10:30", "14:30", "18:30"];
                        sabado=["08:30"," 12:30", "16:30"];
                        console.log("lunes: ",lunes.join( ),"\nmartes: ",martes.join( ),"\nmiercoles: ",miercoles.join( ),"\njueves: ",jueves.join( ),"\nviernes: ",viernes.join( ),"\nsabado: ",sabado.join( ));
                        break;
                    case 3:
                        lunes=["08:30", "12:30", "16:30"];
                        martes=["11:00", "14:00", "18:00"];
                        miercoles=["10:30", "14:30", "18:30"];
                        jueves=["09:00"," 13:00", "17:00"];
                        viernes=["08:30"," 12:30", "16:30"];
                        sabado=["10:30", "14:30", "18:30"];
                        console.log("lunes: ",lunes.join( ),"\nmartes: ",martes.join( ),"\nmiercoles: ",miercoles.join( ),"\njueves: ",jueves.join( ),"\nviernes: ",viernes.join( ),"\nsabado: ",sabado.join( ));
                        break;
                    case 4:
                        lunes=["08:30"," 12:30", "16:30"];
                        martes=["08:30", "12:30", "16:30"];
                        miercoles=["09:00"," 13:00", "17:00"];
                        jueves=["07:30", "11:30", "16:30"];
                        viernes=["11:00", "14:00", "18:00"];
                        sabado=["10:00", "14:00", "18:00"];
                        console.log("lunes: ",lunes.join( ),"\nmartes: ",martes.join( ),"\nmiercoles: ",miercoles.join( ),"\njueves: ",jueves.join( ),"\nviernes: ",viernes.join( ),"\nsabado: ",sabado.join( ));
                        break;
                    case 5:
                        lunes=["07:30", "11:30", "16:30"];
                        martes=["11:00", "14:00", "18:00"];
                        miercoles=["11:00", "14:00", "18:00"];
                        jueves=["08:30"," 12:30", "16:30"];
                        viernes=["10:30", "14:30", "18:30"];
                        sabado=["09:30", "13:30", "17:30"];
                        console.log("lunes: ",lunes.join( ),"\nmartes: ",martes.join( ),"\nmiercoles: ",miercoles.join( ),"\njueves: ",jueves.join( ),"\nviernes: ",viernes.join( ),"\nsabado: ",sabado.join( ));
                        break;
                    default:
                        console.log("EL codigo no es válido");
                        break;                 
                }
                let resp = prompt("Desea agendar la cita para Masaje Exfoliante?");
                
                if(resp === "si"){
                    function cita(){
                        let citaAgendada = {
                            mes:prompt("Ingrese el mes"),
                            dia:prompt("Ingrese el dia"),
                            hora:prompt("Ingrese la hora")
                        }
                        console.log("Cita agendada");
                       
                        return citaAgendada;
                       
                      }
                    console.log(cita());
                }
                resp1 = prompt("Desea agendar una nueva cita para Masaje Exfoliante?");
            }while(resp1 == "si");
    
            break;
        case 2: 
            do{
                menu2="Estos son los empleados\n\n";
                menu2+="1. Cristian Hernandez\n";
                menu2+="2. Sebastian Gomez\n";
                menu2+="3. Maria Paula Zapata\n";
                menu2+="4. Sofia Giraldo\n";
                menu2+="5. santiago Herrera\n";
                menu2+="Ingrese el codigo\n\n";
                let codigo2=parseInt(prompt(menu2));

                switch (codigo2) {
                    case 1:
                            lunes=["10:00", "14:00", "18:00"];
                            martes=["08:30", "12:30", "16:30"];
                            miercoles=["09:00"," 13:00", "17:00"];
                            jueves=["10:30", "14:30", "18:30"];
                            viernes=["10:30", "14:30", "18:30"];
                            sabado=["08:30"," 12:30", "16:30"];
                        
                            console.log("lunes: ",lunes.join( ),"\nmartes: ",martes.join( ),"\nmiercoles: ",miercoles.join( ),"\njueves: ",jueves.join( ),"\nviernes: ",viernes.join( ),"\nsabado: ",sabado.join( ));
                            break;
                    case 2:
                        lunes=["10:30", "14:30", "18:30"];
                        martes=["09:30", "13:30", "17:30"];
                        miercoles=["08:00"," 12:00", "16:00"];
                        jueves=["07:30", "11:30", "16:30"];
                        viernes=["10:30", "14:30", "18:30"];
                        sabado=["08:30"," 12:30", "16:30"];
                        console.log("lunes: ",lunes.join( ),"\nmartes: ",martes.join( ),"\nmiercoles: ",miercoles.join( ),"\njueves: ",jueves.join( ),"\nviernes: ",viernes.join( ),"\nsabado: ",sabado.join( ));
                        break;
                    case 3:
                        lunes=["08:30", "12:30", "16:30"];
                        martes=["11:00", "14:00", "18:00"];
                        miercoles=["10:30", "14:30", "18:30"];
                        jueves=["09:00"," 13:00", "17:00"];
                        viernes=["08:30"," 12:30", "16:30"];
                        sabado=["10:30", "14:30", "18:30"];
                        console.log("lunes: ",lunes.join( ),"\nmartes: ",martes.join( ),"\nmiercoles: ",miercoles.join( ),"\njueves: ",jueves.join( ),"\nviernes: ",viernes.join( ),"\nsabado: ",sabado.join( ));
                        break;
                    case 4:
                        lunes=["08:30"," 12:30", "16:30"];
                        martes=["08:30", "12:30", "16:30"];
                        miercoles=["09:00"," 13:00", "17:00"];
                        jueves=["07:30", "11:30", "16:30"];
                        viernes=["11:00", "14:00", "18:00"];
                        sabado=["10:00", "14:00", "18:00"];
                        console.log("lunes: ",lunes.join( ),"\nmartes: ",martes.join( ),"\nmiercoles: ",miercoles.join( ),"\njueves: ",jueves.join( ),"\nviernes: ",viernes.join( ),"\nsabado: ",sabado.join( ));
                        break;
                    case 5:
                        lunes=["07:30", "11:30", "16:30"];
                        martes=["11:00", "14:00", "18:00"];
                        miercoles=["11:00", "14:00", "18:00"];
                        jueves=["08:30"," 12:30", "16:30"];
                        viernes=["10:30", "14:30", "18:30"];
                        sabado=["09:30", "13:30", "17:30"];
                        console.log("lunes: ",lunes.join( ),"\nmartes: ",martes.join( ),"\nmiercoles: ",miercoles.join( ),"\njueves: ",jueves.join( ),"\nviernes: ",viernes.join( ),"\nsabado: ",sabado.join( ));
                        break;
                    default:
                        console.log("EL codigo no es válido");
                        break;                 
                }
                let resp= prompt("Desea agendar la cita para Peluqueria?");
                
                if(resp === "si"){
                    function cita(){
                        let citaAgendada = {
                            mes:prompt("Ingrese el mes"),
                            dia:prompt("Ingrese el dia"),
                            hora:prompt("Ingrese la hora")
                        }
                        console.log("Cita agendada");
                       
                        return citaAgendada;
                       
                      }
                      console.log(cita());
                }
                resp1 = prompt("Desea agendar una nueva cita para Masaje Exfoliante?");
            }while(resp1=="si");
             
            break;
        case 3: 
            do{
                menu3="Estos son los empleados\n\n";
                menu3+="1. Andres Quintana\n";
                menu3+="2. Miguel Saavedra\n";
                menu3+="3. Laura Osorio\n";
                menu3+="4. Ximena Arango \n";
                menu3+="5. Carlos Mesa\n";
                menu3+="Ingrese el codigo\n\n";
                let codigo3=parseInt(prompt(menu3));

                switch (codigo3) {
                    case 1:
                            lunes=["10:00", "14:00", "18:00"];
                            martes=["08:30", "12:30", "16:30"];
                            miercoles=["09:00"," 13:00", "17:00"];
                            jueves=["10:30", "14:30", "18:30"];
                            viernes=["10:30", "14:30", "18:30"];
                            sabado=["08:30"," 12:30", "16:30"];
                        
                            console.log("lunes: ",lunes.join( ),"\nmartes: ",martes.join( ),"\nmiercoles: ",miercoles.join( ),"\njueves: ",jueves.join( ),"\nviernes: ",viernes.join( ),"\nsabado: ",sabado.join( ));
                            break;
                    case 2:
                        lunes=["10:30", "14:30", "18:30"];
                        martes=["09:30", "13:30", "17:30"];
                        miercoles=["08:00"," 12:00", "16:00"];
                        jueves=["07:30", "11:30", "16:30"];
                        viernes=["10:30", "14:30", "18:30"];
                        sabado=["08:30"," 12:30", "16:30"];
                        console.log("lunes: ",lunes.join( ),"\nmartes: ",martes.join( ),"\nmiercoles: ",miercoles.join( ),"\njueves: ",jueves.join( ),"\nviernes: ",viernes.join( ),"\nsabado: ",sabado.join( ));
                        break;
                    case 3:
                        lunes=["08:30", "12:30", "16:30"];
                        martes=["11:00", "14:00", "18:00"];
                        miercoles=["10:30", "14:30", "18:30"];
                        jueves=["09:00"," 13:00", "17:00"];
                        viernes=["08:30"," 12:30", "16:30"];
                        sabado=["10:30", "14:30", "18:30"];
                        console.log("lunes: ",lunes.join( ),"\nmartes: ",martes.join( ),"\nmiercoles: ",miercoles.join( ),"\njueves: ",jueves.join( ),"\nviernes: ",viernes.join( ),"\nsabado: ",sabado.join( ));
                        break;
                    case 4:
                        lunes=["08:30"," 12:30", "16:30"];
                        martes=["08:30", "12:30", "16:30"];
                        miercoles=["09:00"," 13:00", "17:00"];
                        jueves=["07:30", "11:30", "16:30"];
                        viernes=["11:00", "14:00", "18:00"];
                        sabado=["10:00", "14:00", "18:00"];
                        console.log("lunes: ",lunes.join( ),"\nmartes: ",martes.join( ),"\nmiercoles: ",miercoles.join( ),"\njueves: ",jueves.join( ),"\nviernes: ",viernes.join( ),"\nsabado: ",sabado.join( ));
                        break;
                    case 5:
                        lunes=["07:30", "11:30", "16:30"];
                        martes=["11:00", "14:00", "18:00"];
                        miercoles=["11:00", "14:00", "18:00"];
                        jueves=["08:30"," 12:30", "16:30"];
                        viernes=["10:30", "14:30", "18:30"];
                        sabado=["09:30", "13:30", "17:30"];
                        console.log("lunes: ",lunes.join( ),"\nmartes: ",martes.join( ),"\nmiercoles: ",miercoles.join( ),"\njueves: ",jueves.join( ),"\nviernes: ",viernes.join( ),"\nsabado: ",sabado.join( ));
                        break;
                    default:
                        console.log("EL codigo no es válido");
                        break;                 
                }
                let resp= prompt("Desea agendar la cita para uñas");
                
                if(resp === "si"){
                    function cita(){
                        let citaAgendada = {
                            mes:prompt("Ingrese el mes"),
                            dia:prompt("Ingrese el dia"),
                            hora:prompt("Ingrese la hora")
                        }
                        console.log("Cita agendada");
                       
                        return citaAgendada;
                       
                      }
                      console.log(cita());
                }
                resp1 = prompt("Desea agendar una nueva cita para Masaje Exfoliante?");
            }while(resp1=="si");
                
            break;
        default:
            console.log("El codigo no es válido");
            break;
    }
    preg = prompt("Desea recibir algun otro servicio?");
}while (preg=="si");

// pagos
function pagos( usuarios){
    let banco;
    let credito;
    let tCredito;

    let usuarioNuevo = usuarios
    let documentoUsuario = prompt("Ingrese número de cedula");
        for(var i=0 ; i<usuarioNuevo.length; i++){
          if(usuarioNuevo[i]["cedula"] === documentoUsuario){
            delete usuarioNuevo[i]["contraseña"];
            delete usuarioNuevo[i]["fechaNacimiento"];
            console.log("La información para su pago es: ", usuarioNuevo[i]);
          }
        }  

     let valorPagar = prompt("ingrese valor a pagar");
     let valor = parseInt(prompt(`El valor es ${valorPagar} ingrese 1 si es correcto, ingrese 2 si es incorrecto`));
  if (valor == 1 ){
    let tipocliente = parseInt(prompt("Tipo de Cliente: ingrese 1-Persona ingrese 2-Empresa"));
          if (tipocliente === 1){
             banco = parseInt(prompt("A continuación seleccione su banco: 1-Bancolombia 2-Davivienda 3-BBVA Colombia 4-AvVillas 5-Falabella"));
             tCredito = {
                 "ntarj": parseInt(prompt("Ingrese número de tarjeta")),
                 "documento": prompt("Ingrese número de documento"),
                 "nombreTitular": prompt("Ingrese Nombre del titular"),
                 "cvv": parseInt(prompt("Ingrese CVV")),
                 "fExpiracionMes":prompt("Ingrese mes de expiración"),
                 "fExpiracionaño":prompt("Ingrese año de expiración"),
             }
          }
          if(tipocliente === 2){
              banco = parseInt(prompt("A continuación seleccione su banco: 1-Bancolombia 2-Davivienda 3-BBVA Colombia 4-AvVillas 5-Falabella"));
              tCredito = {
                "ntarj": parseInt(prompt("Ingrese número de tarjeta")),
                "documento": prompt("Ingrese número de documento"),
                "nombreTitular": prompt("Ingrese Nombre del titular"),
                "cvv": parseInt(prompt("Ingrese CVV")),
                "fExpiracionMes":prompt("Ingrese mes de expiración"),
                "fExpiracionaño":prompt("Ingrese año de expiración"),
            }
          } 

          console.log("La información de su tarjeta es la siguiente: ", tCredito)
          let verpago = parseInt(prompt("si la información de su tarjeta es correcta ingrese 1 si es incorrecto ingrese 2"));
  
              if(verpago === 1){
                  alert("Pago Exitoso")
              }
              if(verpago === 2){
                 return("Debe ingresar los datos nuevamente")
              }
  }
           if (valor == 2){
             return("Debe ingresar los datos nuevamente");
           }
}
let pagosEnLinea;
let pago;


  do{
    pagosEnLinea= prompt("Desea realizar su pago en línea?");
  
    if(pagosEnLinea === "si"){
         pago=pagos(usuarios);
    }
    else if(pagosEnLinea === "no"){
        console.log("Debe pagar en el establecimiento")
    }
   
  }while (pago === "Debe ingresar los datos nuevamente" );


 
          
         
