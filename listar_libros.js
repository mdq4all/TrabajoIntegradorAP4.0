import { temaOscuro } from "./modo_oscuro.js";

export function listarLibros() {

    const listaLibros = document.querySelector("#listado_libros");
    const fragment = document.createDocumentFragment();

    async function getData(){
        try {
            let res = await fetch("libros.json"),
                json = await res.json();
            //Envia error en casa de error con el JSON
            if (!res.ok) throw {status: res.status, statusText: res.statusText};

            json.forEach(e => {
                const li = document.createElement("li");
                const libro = `
                <li class="tarjeta_contenedor">
                    <a href="../libro.html?id=${e.id}">
                        <img src="${e.URL_portada}" alt="portada del libro: ${e.titulo}" class="imagen_tarjeta">
                    </a>  
                        <div class="info_tarjeta">
                            <h3 class="titulo_tarjeta">${e.titulo}</h3></br>
                            <h3 class="autor_tarjeta">${e.autor}</h3>
                            <p class="anio_publicacion">${e.fecha_de_publicacion}</p>
                        </div>
                </li>`;
                li.innerHTML = libro;
                fragment.appendChild(li);
            })
            listaLibros.appendChild(fragment);
        } catch (error) {
            let message = error.statusText || "Ocurrio un error";
            ol.innerHTML = `Error${error.status}:${message}`;
        } 
    }
    getData();
    temaOscuro();
}