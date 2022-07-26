//Se agregará un nuevo elemento (p) al HTML. 
//Se lista el párrafo del HTML en la consola
/*let pars= document.getElementsByTagName("p");
console.log (pars[0].innerHTML);*/
/*
//se crea el nuevo parrafo y se refleja en el HTML
let divparr = document.getElementById ("parr");
let parrafos = ["Para obtener el promedio, ingrese los datos a continuación"];

for (const parrafo of parrafos) {
    let p = document.createElement("p");
    p.innerHTML = parrafo
    divparr.appendChild (p);
}

//Se listan los parrafos en la consola
console.log (pars[0].innerHTML);
console.log (pars[1].innerHTML);
*/
let divparr = document.getElementById ("parr");
let newParagraph=document.createElement("p");
newParagraph.innerText="Para obtener el promedio, ingrese los datos a continuación";
divparr.append(newParagraph);
