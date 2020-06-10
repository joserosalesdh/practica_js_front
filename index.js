 
alert('Bienvenidoa mi sitio')

let resultado = confirm('¿Estas seguro de querer avanzar?');
if(resultado){
    document.querySelector('h2').innerHTML = 'Qué alegría que quieras con tu visita por este maravilloso sitio'
    let nombre = prompt('Decinos tu nombre');
    if(nombre){
        document.querySelector('h1').innerHTML = 'Bienvenido ' + nombre; 
    }
    let edad = prompt('¿Que edad tenes?')
    if(edad < 18){
        let cambiando =  document.querySelector('.container-general');
        cambiando.classList.remove('container-general')
        cambiando.classList.add('contenido-bloqueado')
    }
    var hobbies = prompt('¿Cuales son tus Hobbies?');
    hobbies = hobbies.split(",");   
    if(hobbies.includes("programar") ||hobbies.includes("programación") ||hobbies.includes("programacion")){
        alert("Qué bueno que te guste la programación.")
    }else{
        alert("Qué lástima que no te guste la programación")
    }
    hobbies.forEach(hobbie => {
        document.querySelector('.hobbies').innerHTML = '<ol>' + hobbie +'</ol>'
    });
}else{
    document.querySelector('h2').innerHTML = 'Lamentamos que no quieras continuar tu visita por este maravilloso sitio.'
}