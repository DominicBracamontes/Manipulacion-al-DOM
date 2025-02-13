//EJERCICIO 1: SELECCION Y MODIFICACION DE ELEMENTOS
//Selecciona el elemento con el ID titulo y cambia su texto a "¡Manipulación del DOM!".
document.getElementById('titulo').textContent = '¡Manipulación del DOM!';


//Selecciona todos los elementos con la clase parrafo y cambia su color de texto a azul (color: blue).
for (let elemento of document.getElementsByClassName('parrafo')) {
    elemento.style.color = 'blue';
}

//Selecciona el primer elemento <li> de la lista y cambia su contenido a "Elemento Modificado".
document.getElementById('lista').getElementsByTagName('li')[0].innerText = 'Elemento Modificado';


//EJERCICIO 2: CREACION Y ELIMINACION DE ELEMENTOS
//Crea un nuevo elemento <li> con el texto "Elemento 3" y agrégalo al final de la lista (<ul id="lista">).
let elementoTres = document.createElement('li'); 
elementoTres.textContent = 'Elemento 3'; 
document.getElementById('lista').appendChild(elementoTres);

//Crea un nuevo párrafo (<p>) con el texto "Este es un párrafo nuevo" y agrégalo después del segundo párrafo.
let nuevoParrafo = document.createElement('p'); 
nuevoParrafo.textContent = 'Este es un párrafo nuevo'; 
let parrafos = document.getElementsByClassName('parrafo'); 
let segundoParrafo = parrafos[1]; 
segundoParrafo.insertAdjacentElement('afterend', nuevoParrafo);

//Elimina el segundo elemento <li> de la lista.
let lista = document.getElementById('lista');
let segundoElemento = lista.getElementsByTagName('li')[1]; 
lista.removeChild(segundoElemento);



//EJERCICIO 3: MANEJO DE EVENTOS
//Selecciona el botón y agrega un evento de click.
document.getElementById('boton').onclick = function() {
    document.body.style.backgroundColor = getRandomColor();
}


//Cuando el usuario haga clic en el botón, cambia el color de fondo del cuerpo de la página (<body>) a un color aleatorio. 
// Puedes usar la siguiente función para generar colores aleatorios:
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


//EJERCICIO 4: MANIPULACION DE ESTILOS DE CSS
//Selecciona el elemento <h1> y cambia su tamaño de fuente a 48px.
document.getElementById('titulo').style.fontSize='48px';


//Selecciona el primer párrafo y agrega un borde rojo de 2px sólido.
document.getElementsByClassName('parrafo')[0].style.border = '2px solid red';


//Selecciona la lista (<ul>) y cambia su estilo para que los elementos de la lista se muestren en línea (display: inline-block).
document.getElementById('lista').style.display = 'inline-block';

let elementosLi = document.getElementsByTagName('li');
for (let i = 0; i < elementosLi.length; i++) {
    elementosLi[i].style.display = 'inline-block';
}
    