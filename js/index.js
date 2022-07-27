//Incorporación eventos, se utilizan funciones, condicionales, sintaxis avanzada  y una librería relevante al proyecto

document.getElementById("mostrar").addEventListener ("click",()=>{

    let nombre = document.getElementById("inputName").value;
    let apellido = document.getElementById ("inputLastName").value;
    let nota1 =document.getElementById("nota1").value;
    let nota2 =document.getElementById("nota2").value;
    let listaEstudiantes=document.getElementById("students");
    let sumarNotas = parseInt(nota1)+parseInt(nota2);
       
        let newStudent=document.createElement("p");
        let promedio=calcularPromedio();
        newStudent.innerHTML= `<p>${nombre} ${apellido} - Promedio:${promedio}</p>`;                              
        
        listaEstudiantes.append(newStudent);
    
        function calcularPromedio (){
            return sumarNotas/2
        };
    });
//Se validan los datos    
    document.getElementById("button1").addEventListener("click", validarCargaDatos);
    function validarCargaDatos(e) {
        e.preventDefault();
        let id = document.getElementById("inputId").value;
        let nombre = document.getElementById("inputName").value;
        let apellido = document.getElementById ("inputLastName").value;
        let nota1 =document.getElementById("nota1").value;
        let nota2 =document.getElementById("nota2").value;
        let sumarNotas = parseInt(nota1)+parseInt(nota2);
        function calcularPromedio (){
            return sumarNotas/2
        };
               
            
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
       
//Se construye el objeto  
       let dataEstudiante;
       dataEstudiante = {
        id:id,
        nombre:nombre,
        apellido:apellido.toUpperCase(),
        nota1:nota1,
        nota2:nota2,
        promedio:calcularPromedio () ,
       };
    
//Se agregan los estudiantes que se van cargando por lo inputs al array  mediante el metodo push
    let estudiantes=[];
    estudiantes.push(dataEstudiante);
        
//La informacion se guarda en el localStorage
    localStorage.setItem(id, JSON.stringify (dataEstudiante));        
    
//La información se envía a la base de datos, se utiliza asincronía y fetch
    let mostrar2 = document.getElementById("mostrar2");
    const datos =document.getElementById ("datos");
       
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
            datos.innerHTML =  `<li>Id:${data.id}</li>
                                <li>Nombre:${data.nombre} ${data.apellido}</li>
                                <li>Nota 1:${data.nota1} - Nota 2:${data.nota2}</li>
                                <li>Promedio: ${data.promedio}</li>
                                <p> Datos enviados exitosamente</p>`
        })
    });
    };
     