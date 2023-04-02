import "./manejo_pdf.js";

// Formulario agregar libro

const form  = document.querySelector("#formulario_libro");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let anio = form["anio_publicacion"].value;
    const anioActual = new Date();

    if (anio > anioActual.getFullYear()) {
        const toastLiveExample = document.getElementById('liveToastError')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()
  } else {
        const toastLiveExample = document.getElementById('liveToastSuccess')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show();

        const tituloInput = document.querySelector("#titulo_input"),
                autorInput = document.querySelector("#nombre_autor"),
                anioInput = document.querySelector("#anio_publicacion");
        tituloInput.disabled = true;
        autorInput.disabled = true;
        anioInput.disabled = true;
        const btnPdf = document.querySelector("#button_pdf");
        btnPdf.disabled = false;
     }

})

// Formulario contacto

const contactoFormulario = document.querySelector("#formulario_contacto");
contactoFormulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    const toastLiveExample = document.getElementById('liveToastSuccessContact')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()
        contactoFormulario.reset();
})