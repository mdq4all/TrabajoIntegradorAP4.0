//Esta variable es utlizada por 2 funciones
const btnPdf = document.querySelector("#button_pdf");
//Vuelve a deshabilitar el boton Generar PDF en caso que este habiltado y limpia el formulario
const cancelarBoton = document.querySelector("#boton_cancelar");
cancelarBoton.addEventListener("click", () => {
    btnPdf.disabled = true;
});

//Crea el archivo PDF a partir del titulo, el autor y el anio
function creaPDF(titulo, autor, anio) {

    window.jsPDF = window.jspdf.jsPDF;
    let doc = new jsPDF();
    //Encabezado del PDF
    doc.setFontSize(22);
    doc.text(20, 20, 'The Book Store');
    doc.line(20, 30, 60, 30); // horizontal line

    //Agrega info al PDF
    doc.setFontSize(16);
    doc.text(20, 50, 'Usted a solicitado el libro: ' + titulo + ',');
    doc.text(20, 60, 'escrito por: ' + autor + ',' + 'en el año: ' + anio + '.');
    //Crea el archivo
    doc.save('Pedido.pdf');
}
//Dispara el evento crear PDF y habilita inputs nuevamente, ademas deshabilita el boton PDF luego
//de generar el archivo
btnPdf.addEventListener("click", () => {

    const titulo = document.querySelector("#titulo_input"),
                autor = document.querySelector("#nombre_autor"),
                anio = document.querySelector("#anio_publicacion");
    //Llama al creador PDF
    creaPDF(titulo.value, autor.value,  anio.value);
    //Activa los campos deshabilitados
    titulo.disabled = false;
    autor.disabled = false;
    anio.disabled = false;
    //Vuelve a deshabilitar el boton PDF
    btnPdf.disabled = true;
});

