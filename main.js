import "./validaciones.js"
import  { listarLibros } from "./listar_libros.js"

listarLibros();

//Busca un libro por titulo utilizada por la busqueda del navbar
async function buscarLibroPorTitulo (tituloLibro) {
    try {
        let res = await fetch("libros.json"),
                        json = await res.json();

        function libroTitulo (libro) {
            return libro.titulo.toLowerCase() === tituloLibro.toLowerCase();
        }
       const libro = json.find(libroTitulo);
       window.location.href = `../libro.html?id=${libro.id}`

    }  catch (error) {
        const toastLiveExample = document.getElementById('liveToastErrorSearch')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show();

     }
}

//Boton de busqueda del navBar
const formBusqueda = document.querySelector("#formulario_busqueda");
formBusqueda.addEventListener("submit", (e) => {
    e.preventDefault();
    const libroABuscar = formBusqueda["input_buscar"].value;
    buscarLibroPorTitulo(libroABuscar);

})