export function temaOscuro () {
    const navBar = document.querySelector("#navBar")
    const tituloPrincipal = document.querySelectorAll(".titulo_principal");
    const parrafoQuienesSomos = document.querySelector(".descripcion_quines_somos");
    const btn = document.querySelector("#switch");
    
        if (sessionStorage.getItem("oscuro") === "oscuroActivado") {
            pintaModoOscuro();
            btn.checked = true;
        } else {
            pintaModoClaro();
            btn.checked = false;
        }
    
    btn.addEventListener("click", (e) => {
    
        if (e.target.checked) {
            pintaModoOscuro()
            sessionStorage.setItem("oscuro", "oscuroActivado");
        } else {
            pintaModoClaro();
            sessionStorage.setItem("oscuro", "oscuroDesactivado");
        }
    })
    
    //Funcion modo oscuro
    function pintaModoOscuro () {
        navBar.classList.replace("modo_claro", "modo_oscuro");
        document.body.style.backgroundColor = "#0a0925";
        parrafoQuienesSomos.style.color = "white";
                
        tituloPrincipal.forEach(element => {
            element.style.color = "white";
        })
        $(document).ready(function(){
            $("label").css("color", "#fff");
            $("#button_pdf"). css("color", "#9E918E");
            $("#listado_libros").removeClass("light");
            $("#listado_libros").addClass("dark");
        });
    }
    
    //Funcion modo claro
    function pintaModoClaro () {
        navBar.classList.replace("modo_oscuro", "modo_claro");
        document.body.style.backgroundColor = "white";
        parrafoQuienesSomos.style.color = "black";
    
        tituloPrincipal.forEach(element => {
            element.style.color = "black";
        });    
        $(document).ready(function(){
            $("label").css("color", "#000");
            $("#button_pdf"). css("color", "#000");
            $("#listado_libros").removeClass("dark");
            $("#listado_libros").addClass("light");
        });    
    }

}


