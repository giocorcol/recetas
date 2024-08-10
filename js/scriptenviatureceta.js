const boton = document.querySelector("#dianoche1");
const cambiofondobody = document.querySelector("body");

const mainenviatureceta2 = document.querySelector(".mainenviatureceta");//envia tu receta main
const titulo = document.querySelector("h1")
const label1 = document.querySelector("label")
const input2 = document.querySelectorAll("input")
const textarea2 = document.querySelectorAll("textarea")








boton.addEventListener("click", () => {


    cambiofondobody.classList.toggle("temaoscuro");
    mainenviatureceta2.classList.toggle("maintema")
    titulo.classList.toggle("h1tema")
    label1.classList.toggle("labeltema");//envia tu receta main

    for(input3 of input2){

        input3.classList.toggle("inputtema")

    }
    

for(textarea3 of textarea2){

    textarea3.classList.toggle("textareatema")

}

    


}
)