// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

//Creamos un array para almacenar amigos
let amigos = [];

//Creamos función agregarAmigo()
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == "") {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombreAmigo);
        limpiarCaja();
    }
    imprimirAmigos();
}

function imprimirAmigos() {
    // creamos una lista que referencia al elemento HTML de id listaAmigos
    let lista = document.getElementById('listaAmigos');
    // reseteamos la lista para que no guarde valores antiguos
    lista.innerHTML = '';
    // revisamos que la lista de amigos tenga elementos antes de imprimir
    if (amigos.length > 0) {
        /*let contador = 0;
        // bucle while para poder imprimir en la página HTML los elementos de la lista
        while(contador < amigos.length) {
            // alert(amigos[contador]);
            let li = document.createElement('li');
            li.textContent = amigos[contador];
            lista.appendChild(li);
            contador++;
        }*/
        // bucle for solicitado en el challenge
        for(let i=0; i < amigos.length; i++){
            // alert(amigos[i]);
            let li = document.createElement('li');
            li.textContent = amigos[i];
            lista.appendChild(li);
        }
    }
}

function limpiarCaja() {
    // instrucción para dejar la caja donde se ingresan los nombres sin textos escritos anteriormente
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    if (amigos.length > 0) {
        let amigoSecreto = Math.floor(amigos.length * Math.random());
        // console.log(amigoSecreto);
        // console.log(amigos[amigoSecreto]);
        // alert(`tu amigo secreto es ${amigos[amigoSecreto]}`);
        // Mostrar el resultado
        // creamos una lista que referencia al elemento HTML de id listaAmigos
        let lista = document.getElementById('listaAmigos');
        // reseteamos la lista para que no guarde valores antiguos
        lista.innerHTML = '';
        lista.innerHTML = `<strong style="color: green;">El amigo secreto sorteado es: ${amigos[amigoSecreto]}</strong>`;
    } else {
        alert('No tienes amigos ingresados a tu lista. ¡Comienza por ello!');
    }
}