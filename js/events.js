
//Incorporación de evento, se utilizan funciones, condicionales, sintaxis avanzada  y una librería relevante al proyecto
document.getElementById("button1").addEventListener("click", validarCargaDatos);
let mostrar = document.getElementById("mostrar");
let mostrar2 = document.getElementById("mostrar2");
const datos =document.getElementById ("datos");

function validarCargaDatos(e) {
    e.preventDefault();
    let id = document.getElementById("inputId").value;
    let nombre = document.getElementById("inputName").value;
    let apellido = document.getElementById ("inputLastName").value;
    let nota1 =document.getElementById("nota1").value;
    let nota2 =document.getElementById("nota2").value;
    let sumarNotas = parseInt(nota1)+parseInt(nota2);
    let listaEstudiantes=document.getElementById("students");
    let estudiantes=[];
        
    ((id=="") || (nombre.length <3 )  ||  (apellido.length <3 )|| (nota1=="")|| (nota2==""))?
    
    Swal.fire ({
    title:`error`,
    text:`El nombre  y el apellido deben contener 3 caracteres como mínimo, los campos de id y notas deben ser completados`,
    icon:`error`,
    }):

    Swal.fire ({
    title:`Excelente!`,
    text:`Los datos han sido ingresados correctamente`,
    icon:`success`,
    });

    function calcularPromedio (){
         return sumarNotas/2
    }
     
 //Luego de ingresar los dtaos solicitados, se muestra la información relevante al usuario   
    mostrar.addEventListener ("click",()=>{
    
        let newStudent=document.createElement("li");
        let promedio=calcularPromedio();
        newStudent.innerHTML= `<p>${nombre} ${apellido} - Promedio:${promedio}</p>`;                              
        
        listaEstudiantes.append(newStudent);
    });

//Se construye el objeto  
   let dataEstudiante;
   dataEstudiante = {
    id:id,
    nombre:nombre,
    apellido:apellido.toUpperCase(),
    nota1:nota1,
    nota2:nota2,
    promedio:calcularPromedio () ,
   }
//Se agregan los estudiantes que se van cargando por lo inputs al array  mediante el método push
   estudiantes.push(dataEstudiante);
    

//La informacion se guarda en el localStorage
    localStorage.setItem(id, JSON.stringify (dataEstudiante));


//La información se envía a la base de datos, se utiliza asincronía y fetch
    
    mostrar2.addEventListener ("click", ()=>{
    fetch ('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify(dataEstudiante),
        headers:{
        "Content-type":"application/json; charset=UTF-8",
    }
     })
    .then ((response) => response.json())
    .then ((data) => {
        console.log(data);
        datos.innerHTML =  `<p>${data.id}</p>
                            <p>${data.nombre}</p>
                            <p>${data.apellido}</p>
                            <p>${data.nota1}</p>
                            <p>${data.nota2}</p>
                            <p>${data.promedio}</p>
                            <p> Datos enviados exitosamente</p>`
    })
});
    }
 
  

/*
document.getElementById("mostrar").addEventListener ("click", function(){

    const datos =document.getElementById ("datos");
    let tabla = document.createElement("table");

    for (let i =0; i<localStorage.length; i++){
        let clave =localStorage.key(i);
        let fila = document.createElement("tr");
        fila.innerHTML= `<td>${clave}</td>
        <td>${localStorage.getItem(clave)}</td>`;

        tabla.append(fila);
        datos.append(tabla);
    }


})
*/