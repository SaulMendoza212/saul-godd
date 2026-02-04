/* =====================
   TEMA OSCURO PERSISTENTE
===================== */
const themeBtn = document.getElementById("toggleTheme");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

/* =====================
   CAMBIO DINÁMICO TEXTO
===================== */
document.getElementById("editarPerfil").addEventListener("click", () => {
  document.getElementById("perfilTexto").textContent =
    "Especialista en JavaScript, DOM, eventos y diseño web profesional.";
});

/* =====================
   GALERÍA AUTOMÁTICA + MANUAL
===================== */
const images = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
let index = 0;
const img = document.getElementById("sliderImg");

function updateImage() {
  img.src = images[index];
}

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % images.length;
  updateImage();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateImage();
});

setInterval(() => {
  index = (index + 1) % images.length;
  updateImage();
}, 3000);

/* =====================
   CREAR ELEMENTOS CON JS
===================== */
const skills = ["HTML5", "CSS3", "JavaScript", "DOM", "Eventos"];
const skillsList = document.getElementById("skills");

skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

/* =====================
   VALIDACIÓN FORMULARIO
===================== */
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const feedback = document.getElementById("feedback");

  if (name === "") {
    feedback.textContent = "❌ El nombre es obligatorio";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "✅ Mensaje enviado, " + name;
    feedback.style.color = "green";
    e.target.reset();
  }
});
