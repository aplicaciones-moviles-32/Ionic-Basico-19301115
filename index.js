var arreglo = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",];

//imagenes perfil
var imagenesContenedor = document.getElementById("imagenes"); //contenedor de imágenes
//Imagenes inicio
var imagenerInicioContenedor = document.getElementById("imagenesInicio");

function asignarImagenes(contenedor, size){
    for(var x=0; x<arreglo.length; x++){
        var columna = document.createElement("ion-col");
        columna.size = size;
        var imagen = document.createElement("img");
        imagen.src = arreglo[x];
        columna.appendChild(imagen);

        //asignar al contenedor 
        contenedor.appendChild(columna);
    }
}

asignarImagenes(imagenesContenedor, "4");
asignarImagenes(imagenerInicioContenedor,"12");


var usuario = {
    "nombre": "Chihuahua",
    "correo": "papitas@gmail.com",
    "id": "unospelillos",
    "password": "123",
    "fotodeperfil": "gustan.jpg",
    "fechadenacimiento": 12/12/2021,
    "seguidores": 72562,
    "seguidos": 27,
    "descripcion": "-A mí me gustan mucho de esas \n-A mí no me pican de esas",
    "publicaciones": arreglo.length
}

var nombre = document.getElementById("nombre");
var id = document.getElementById("id");
var fotoperfil = document.getElementById("fotoperfil");
var seguidores = document.getElementById("seguidores");
var seguidos = document.getElementById("seguidos");
var publicaciones = document.getElementById("publicaciones");
var descripcion = document.getElementById("descripcion");

nombre.innerText = usuario.nombre;
fotoperfil.src = usuario.fotoperfil;
seguidores.innerText = usuario.seguidores;
seguidos.innerText = usuario.seguidos;
publicaciones.innerText = usuario.publicaciones;
descripcion.innerText = usuario.descripcion;

var feed = [
    {
        "idpublicacion": "14wg4324",
        "usuario": "@cheemsfuerte",
        "imagen": "cheems.jpg",
        "caption": "Corro 5 km al día",
    },
    {
        "idpublicacion": "14wg4324",
        "usuario": "@cheemsfuerte",
        "imagen": "cheems.jpg",
        "caption": "Corro 5 km al día",
    },
    {
        "idpublicacion": "14wg4324",
        "usuario": "@cheemsfuerte",
        "imagen": "cheems.jpg",
        "caption": "Corro 5 km al día",
    },
    {
        "idpublicacion": "14wg4324",
        "usuario": "@cheemsfuerte",
        "imagen": "cheems.jpg",
        "caption": "Corro 5 km al día",
    },
    {
        "idpublicacion": "14wg4324",
        "usuario": "@cheemsfuerte",
        "imagen": "cheems.jpg",
        "caption": "Corro 5 km al día",
    },

]

for(var y = 0; y<feed.length; y++){

    var card = document.createElement("ion-card");
    var cardHeader = docuemnt.createElement("ion-card-header");
    var nombreUsuarioParrafo = docuemnt.createElement("p") //nombre de usuario
    var cardContent = docuemnt.createElement("ion-card-content");
    var imgFeed = document.createElement("img"); //imagen de la tarjeta
    var descripcionParrafo = docuemnt.createElement("p"); //caption

    nombreUsuarioParrafo = feed[y].usuario;
    imgFeed = feed[y].imagen;
    descripcionParrafo = feed[y].caption;

    cardHeader.appendChild(card);
    nombreUsuarioParrafo.appendChild(cardHeader);
    cardContent.appendChild(card);
    imgFeed.appendChild(cardContent);
    descripcionParrafo.appendChild(cardContent);
    card.appendChild(feedContainer);

    
    
}