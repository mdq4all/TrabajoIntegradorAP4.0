// Obtiene el id de la URL 
const url = new URL (window.location);
const id = url.searchParams.get('id');
let modoOscuro = "";

//Obtenemos el modo oscuro si esta habiltado del sessionStorage
if (sessionStorage.getItem("oscuro") === "oscuroActivado") {
    $(document).ready(function(){
        $("p").css("color", "#fff");
        $("body").css("backgroundColor", "#0a0925");
    });
    modoOscuro = "dark";
}
async function  buscarLibro (id) {
    try {
        let res = await fetch("libros.json"),
        json = await res.json();

        function libroID (libro) {
            return libro.id === id;
        }
        const libro = json.find(libroID);
        
        const templateLibro = `
        <img src="${libro.URL_portada}" class="portada_libro col-md-6 col-sm-12 col-lg-6" alt="portada de libro ${libro.titulo}">
        <div class="info_container col-md-6 col-sm-12 col-lg-6" data->
            <span class="${modoOscuro}">Titulo:</span>
            <h2 class="${modoOscuro}">${libro.titulo}</h2>
            <span class="${modoOscuro}">Autor:</span>
            <h3 class="${modoOscuro}">${libro.autor}</h3>
            <span class="${modoOscuro}">Fecha de publicacion:</span>
            <h3 class="${modoOscuro}">${libro.fecha_de_publicacion}</h3>
            <span class="${modoOscuro}">Descripcion:</span>
            <p class="${modoOscuro}">${libro.descripcion}</p>
            <a href="index.html"><button>Volver</button></a>
        </div>`;

        $(document).ready(function(){
            $("#libro_contenedor").html(templateLibro);
        });
    } catch (error) {
        console.log(error);
    }
}
buscarLibro(id);
