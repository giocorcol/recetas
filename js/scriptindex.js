const boton = document.querySelector("#dianoche1");
const cambiofondobody = document.querySelector("body");

const cambiorecta1 = document.querySelector(".receta1");
const cambiorecta2 = document.querySelector(".receta2");
const cambiorecta3 = document.querySelector(".receta3");
const cambiorecta4 = document.querySelector(".receta4");
const cambiorecta5 = document.querySelector(".receta5");
const cambiorecta6 = document.querySelector(".receta6");
const td2 = document.querySelector(".t2");//titulo de recetas en index
const linkrecetas1 = document.querySelectorAll(".linkrecetas");//link de recetas en index


boton.addEventListener("click", () => {


    cambiofondobody.classList.toggle("temaoscuro");

    cambiorecta1.classList.toggle("receta1t");
    cambiorecta2.classList.toggle("receta2t");
    cambiorecta3.classList.toggle("receta3t");
    cambiorecta4.classList.toggle("receta4t");
    cambiorecta5.classList.toggle("receta5t");
    cambiorecta6.classList.toggle("receta6t");
    td2.classList.toggle("t2tema");//titulo de recetas en index

    for (link1 of linkrecetas1) {
        console.log(link1)
        link1.classList.toggle("linkrecetastema");//link de recetas en index   
    }











}
)