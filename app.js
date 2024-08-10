

//Formulas de Manejo de texto


//Formula que obtiene el texto de un elemento
const obtenerTexto =(elemento)=>{
    var textarea = document.getElementById(elemento);
     texto = textarea.value;
}
//Formula que asigna el texto a un elemento
let asignarTextoElemento= (elemento, texto)=>{
    let titulo =document.querySelector(elemento);
    titulo.innerHTML = texto;
}

//Formula de encriptacion que remplaza las vocales
function encriptar(texto) {    
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}
//Formula de desencriptacion que remplaza el conjunto de letras por las vocales
function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}


//Formulas de Manejo de Clases

//Formula que le agrega una clase CSS a un elemento
let agregarClase = (idCSS, clase)=>{
    document.getElementById(idCSS).classList.add(clase);
}
//Formula que le quita una clase CSS a un elemento
let quitarClase = (idCss, quitarClase)=>{
    document.getElementById(idCss).classList.remove(quitarClase);
    

}

//Función que se realiza cuando se da el click en el boton encriptar
function Encriptar(){

    //obtiene el texto a trabajar
    obtenerTexto("textarea");
    //encripta el texto mediante la funcion encriptar y lo asigna al elemento h4
    asignarTextoElemento("h4",encriptar(texto));
    //borra el elemento p
    asignarTextoElemento("p","");
    //borra el elemento h2
    asignarTextoElemento("h2","");
    //asigna la clase invisible a la imagen
    agregarClase("imagenMuneco","invisible");
    //quita la clase invisible al boton copiar
    quitarClase("bCopiar","invisible");
    //agrega la clase respectiva al boton copiar
    agregarClase("bCopiar", "presentacion__enlaces__respuesta")
    //quita la clase invisible al elemento ID respuesta
    quitarClase("respuesta","invisible");
    //agrega la clase respectiva al elemento ID respuesta
    agregarClase("respuesta", "cuadro__respuesta");
    
    
}
function Desencriptar(){
    //obtiene el texto a trabajar
    obtenerTexto("textarea");
    //desencripta el texto mediante la funcion encriptar y lo asigna al elemento h4
    let textorespuesta= asignarTextoElemento("h4",desencriptar(texto));
    //borra el elemento p
    asignarTextoElemento("p","");
    //borra el elemento h2
    asignarTextoElemento("h2","");
    //asigna la clase invisible a la imagen
    agregarClase("imagenMuneco","invisible");
    //quita la clase invisible al boton copiar
    quitarClase("bCopiar","invisible");
    //agrega la clase respectiva al boton copiar
    agregarClase("bCopiar", "presentacion__enlaces__respuesta")
    //quita la clase invisible al elemento ID respuesta
    quitarClase("respuesta","invisible");
    //agrega la clase respectiva al elemento ID respuesta
    agregarClase("respuesta", "cuadro__respuesta");
       
        
    };
//Funcion de copiar texto
function copiarTexto(){
        async function copyTextById(elementId) {
            try {
                // Selecciona el elemento por su ID
                const element = document.getElementById(elementId);
        
                // Obtén el texto del elemento
                const text = element.textContent || element.innerText;
        
                // Usa la API de Clipboard para copiar el texto
                await navigator.clipboard.writeText(text);
        
                console.log('Texto copiado al portapapeles');
            } catch (err) {
                console.error('Error al copiar el texto:', err);
            }
        }
        
        // Llama a la función pasando el ID del elemento
        copyTextById('respuesta');
    }