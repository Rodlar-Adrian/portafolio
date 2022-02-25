//variables
var input1 = document.getElementById('input1');
var boton1 = document.getElementById('boton1');
var fragmento1 = document.createDocumentFragment();
var img = document.createElement('img');
var contenedor = document.getElementById('contenedor');
var lista = document.createElement('ul');
var elementos1 = document.createElement('li');
var elementos2 = document.createElement('li');
var hnombre = document.getElementById('nombreP');
var habilidades = document.createElement('p');



alert('Hola que tal , gracias por visitar y conocer mas acerca de mi ; no olvides echarle un vistazo a mi cv, y  buscar tu pokemon favorito :)');

boton1.addEventListener('click', (e)=>{

    var pokemon = input1.value;
    const req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState === 4 && req.status>=200 && req.status<300) {
            
            const respuestaServidor = JSON.parse(req.responseText);
            console.log(respuestaServidor);
            agregarPokemon(respuestaServidor)

        };
        function agregarPokemon(pokemon){
            
                img.src = pokemon.sprites.front_default;
                img.setAttribute('class','imgagen-de-pokemon');
                habilidades.textContent='Habilidades';
                hnombre.innerHTML = `${pokemon.name}`;
                elementos1.innerHTML = `${pokemon.name}`;
                elementos2.innerHTML = `${pokemon.moves[0].move.name}`;
                lista.appendChild(habilidades);
                lista.appendChild(elementos1);              
                lista.appendChild(elementos2);

                fragmento1.appendChild(lista);
                contenedor.appendChild(img);
                contenedor.appendChild(fragmento1);
                
           

            
        }



    };
    

    req.open("GET",`https://pokeapi.co/api/v2/pokemon/${pokemon}/`,true);
    req.send();
    
});

var enlaces = document.querySelectorAll('#enlaces a');
enlaces.forEach(element => {
   // console.log(element);//nos impirme todos lo elementos <a></a>
    element.addEventListener('click', (e) =>{
       // console.log(e.target);//nos dice el elemento que fue cliqueado 
        enlaces.forEach(element => element.classList.remove('activo'))
        e.target.classList.add('activo');

    })
});
        


var enviando = document.getElementById('formulario');


function enviandoDatos(e){ 
 e.preventDefault()
 //console.log(this)
 //console.log(e.target)

 var informacionForm = new FormData(e.target)
 //console.log(informacionForm.get('nombre'))
 //console.log(informacionForm)
 fetch("https://formsubmit.co/ajax/jefechief.117@gmail.com",{
method:"POST",
body:informacionForm


 })

 .then(Response => Response.ok? Response.json(): Promise.reject(Response))
 .then(json =>{
console.log(json)
 enviando.reset();
 alert('me contactaste con exito')

 })
 .catch(err=>{
console.log(err)
 })

}
enviando.addEventListener("submit",enviandoDatos)


























   
 





