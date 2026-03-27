const buttons = document.querySelectorAll(".info-btn")
const modal = document.getElementById("modal")
const modalTitle = document.getElementById("modal-title")
const modalText = document.getElementById("modal-text")
const closeBtn = document.querySelector(".modal-close")

const infoData = {

cerro: {
title: "Cerro Rico de Potosí",

text: `El Cerro Rico de Potosí es uno de los símbolos históricos más importantes de Bolivia.
Durante la colonia española fue una de las minas de plata más grandes del mundo,
contribuyendo significativamente a la economía del imperio español.
Actualmente continúa siendo explotado por cooperativas mineras y es un
importante atractivo turístico e histórico.`
},

salar: {
title: "Salar de Uyuni",

text: `El Salar de Uyuni es el desierto de sal más grande del mundo con más de
10.000 km² de extensión. Durante la temporada de lluvias se convierte en un
enorme espejo natural que refleja el cielo, creando uno de los paisajes
más impresionantes del planeta.`
},

moneda: {
title: "Casa de la Moneda",

text: `La Casa Nacional de la Moneda es uno de los museos más importantes
de Bolivia. Fue construida en el siglo XVIII para acuñar monedas de plata
extraídas del Cerro Rico. Actualmente conserva maquinaria histórica,
arte colonial y documentos de gran valor histórico.`
}

}

buttons.forEach(button=>{

button.addEventListener("click",()=>{

const place = button.dataset.place

modalTitle.textContent = infoData[place].title

modalText.textContent = infoData[place].text

modal.style.display = "flex"

})

})


closeBtn.addEventListener("click",()=>{

modal.style.display = "none"

})


modal.addEventListener("click",(e)=>{

if(e.target === modal){

modal.style.display = "none"

}

})