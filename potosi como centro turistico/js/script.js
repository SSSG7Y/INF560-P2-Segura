const buttons = document.querySelectorAll(".info-btn");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".modal-close");

const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

const imagenes = document.querySelectorAll(".galeria-item");
const imagenes2 = document.querySelectorAll(".galeria-img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const form = document.querySelector(".contact-form");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  toggle.classList.toggle("active");
});

const infoData = {
  salar: {
    title: "Salar de Uyuni",
    img: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/657529691_1636002557602197_6916883379888422950_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd6889&_nc_ohc=ayhMJEjVBDMQ7kNvwFIZGFA&_nc_oc=Adq6_QuY3JiRdTT1WdRlutxUplnOYGRXeXZaMBBQYb50i3iRAttGxLkaRw4g5p35Pp6kXO67NXgFrQImZHgwc2zX&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=JA8HAUHMaDBkwSVjuaMYEA&_nc_ss=7a32e&oh=00_Afwvv1jIdBVbVYSGOWyrphyh4vGrdubrVhMZZDGU3alPiA&oe=69CBC848",
    text: "El Salar de Uyuni es el desierto de sal más grande del mundo, con más de 10.000 kilómetros cuadrados de extensión. Se formó a partir de la evaporación de antiguos lagos prehistóricos que cubrían gran parte del altiplano boliviano. Hoy en día es uno de los destinos turísticos más impresionantes de Bolivia. Durante la temporada de lluvias, una fina capa de agua cubre la superficie del salar creando un gigantesco espejo natural que refleja el cielo, generando un paisaje surrealista que atrae a fotógrafos y viajeros de todo el mundo. Además de su belleza natural, el salar también posee una gran importancia económica debido a las enormes reservas de litio que se encuentran bajo su superficie.",
  },

  cerro: {
    title: "Cerro Rico de Potosí",
    img: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/656656008_1636003000935486_731045984844102162_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd6889&_nc_ohc=z468hPYRWRoQ7kNvwH4bbiE&_nc_oc=Adpgkt8I6eswWZDRy7VI9YzAbxJDNhm3zMpZH4tVqX3rydLO8GFPqXfoSynkvaWug9HZ-vvuoXZ5hh4To9x6Xh-x&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=YCKyPLZ-mgAA53Ux7YbXcg&_nc_ss=7a3a8&oh=00_AfyzqJNIvUCvYEVcPDIOTbGSX61pBtsdgBvcVUB9V1yA_w&oe=69CB980C",
    text: "El Cerro Rico de Potosí es uno de los lugares históricos más importantes de América Latina. Descubierto en 1545, este cerro se convirtió en una de las mayores fuentes de plata del mundo durante la época colonial española. La riqueza mineral extraída de este lugar permitió el crecimiento de la ciudad de Potosí hasta convertirse en una de las ciudades más grandes y prósperas del mundo en el siglo XVII. Sin embargo, la historia del Cerro Rico también está marcada por el duro trabajo de miles de mineros indígenas y africanos que trabajaron en condiciones extremadamente difíciles. Hoy en día el cerro continúa siendo explotado por cooperativas mineras y es considerado un símbolo histórico de Bolivia.",
  },

  moneda: {
    title: "Casa Nacional de la Moneda",
    img: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/658169877_1636003484268771_5783304904713891217_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd6889&_nc_ohc=d_pVkGx_7_kQ7kNvwEm3DQX&_nc_oc=AdqtIPUE8wJ9nGeeeY4YepRYcJVXRTLnVYxrlL2E7-PKHm5pGrQoTxjgh9vROE2AObdaffig0e5CgW7S3Z4tJGmC&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=oyuSVWoa5EIh4-fleSti6A&_nc_ss=7a32e&oh=00_AfzeXg_JySd_IQXyBwn_aQAVAWXxYMvC0DN6AE45woZevA&oe=69CBA8CF",
    text: "La Casa Nacional de la Moneda es uno de los edificios coloniales más importantes de Bolivia. Fue construida en el siglo XVIII para acuñar monedas utilizando la plata extraída del Cerro Rico de Potosí. Este edificio fue clave para el sistema económico del Imperio Español, ya que desde aquí se producían monedas que circulaban por gran parte del mundo. Actualmente funciona como museo y conserva una impresionante colección de maquinaria colonial, monedas históricas, arte religioso y objetos que narran la historia económica y cultural de la región. Visitar este museo permite comprender la enorme importancia que tuvo Potosí en la historia global.",
  },
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const place = button.dataset.place;

    modalTitle.textContent = infoData[place].title;

    modalText.textContent = infoData[place].text;

    modalImg.src = infoData[place].img;

    modal.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  imagenes.forEach((img) => {
    const posicion = img.getBoundingClientRect().top;

    const pantalla = window.innerHeight;

    if (posicion < pantalla - 100) {
      img.classList.add("visible");
    }
  });
});

imagenes2.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");

    lightboxImg.src = img.src;

    lightboxImg.alt = img.alt;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});


form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Mensaje enviado correctamente");

    form.reset();
});