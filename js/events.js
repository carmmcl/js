let mostrar = document.getElementById("mostrar");
let nombre = document.getElementById("inputName").value;
let apellido = document.getElementById ("inputLastName").value;
let nota1 =document.getElementById("nota1").value;
const datos =document.getElementById ("datos");

mostrar.addEventListener ("click", ()=>{

    const data ={
        nombre:nombre.value,
        apellido:apellido.value,
        nota1:nota1.value,
    }

    fetch ('archivo.json'
       ,{
        method:'POST',
        body:JSON.stringify({data}),
       headers:{'content-type':'application/json; charset=UTF-8',},
     })

    .then ((response) => response.json())
    .then ((data) => {
        console.log(data);
        datos.innerHTML =  `<p>${data.nombre}</p>
                            <p>${data.apellido}</p>
                            <p>${data.nota1}</p>`


    })
});




//Se incorpora un evento
/*
document.getElementById("button1").addEventListener("click", validarCargaDatos);
let message = document.getElementById ("message");


function validarCargaDatos(e) {
    e.preventDefault();
    let nombre = document.getElementById("inputName").value;
    let apellido = document.getElementById ("inputLastName").value;
    let nota1 =document.getElementById("nota1").value;
    
    ((nombre.length <3 )  ||  (apellido.length <3 )|| (nota1==""))?

    
    Swal.fire ({
    title:`error`,
    text:`El nombre  y el apellido deben contener 3 caracteres como mínimo, el campo de nota deben ser completados`,
    icon:`error`,

}):
Swal.fire ({
    title:`Excelente!`,
    text:`Los datos han sido ingresados correctamente`,
    icon:`success`,
});
  
        localStorage.setItem(nombre, nota1)




    }

*/


    

    
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


});
*/