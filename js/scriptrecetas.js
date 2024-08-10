const boton = document.querySelector("#dianoche1");
const cambiofondobody = document.querySelector("body");

const a1 = document.querySelector(".artrecetas");
const seccionlat1 = document.querySelector(".secioneslaterales1");
const seccionlat2 = document.querySelector(".secioneslaterales2");
const t2 = document.querySelector(".titulo2");
const t3 = document.querySelectorAll(".titulo3");
const t4 = document.querySelectorAll(".titulo4");
const nutricion = document.querySelectorAll(".tablacont");







boton.addEventListener("click", () => {


    cambiofondobody.classList.toggle("temaoscuro");

    a1.classList.toggle("artrecetastema");
    seccionlat1.classList.toggle("secioneslaterales1tema");
    seccionlat2.classList.toggle("secioneslaterales2tema");
    t2.classList.toggle("titulo2tema");
    
    for(t3for of t3)
    t3for.classList.toggle("titulo3tema");

    for(t4for of t4)
    t4for.classList.toggle("titulo4tema");

    for(nutri of nutricion)
        nutri.classList.toggle("tablaconttema");



}
)


//for (link1 of linkrecetas1) {
 //   console.log(link1)
 //   link1.classList.toggle("linkrecetastema");//link de recetas en index   