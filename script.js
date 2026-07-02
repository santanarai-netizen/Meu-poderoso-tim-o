
// =========================
// MENU MOBILE
// =========================

const menu = document.querySelector("#menu");
const navList = document.querySelector("nav ul");

menu.addEventListener("click", () => {
    navList.classList.toggle("active");
});

// =========================
// LOADER
// =========================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1500);
});

// =========================
// BOTÃO TOPO
// =========================

const topo = document.getElementById("topo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topo.classList.add("show");
    } else {
        topo.classList.remove("show");
    }
});

topo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =========================
// CONTADOR ANIMADO
// =========================

const contadores = document.querySelectorAll(".contador");

function animarContador(el) {
    const target = +el.getAttribute("data-target");
    let count = 0;

    const interval = setInterval(() => {
        count += Math.ceil(target / 100);

        if (count >= target) {
            el.textContent = target.toLocaleString("pt-BR");
            clearInterval(interval);
        } else {
            el.textContent = count.toLocaleString("pt-BR");
        }
    }, 20);
}

// dispara quando seção aparece na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            animarContador(el);
            observer.unobserve(el);
        }
    });
}, {
    threshold: 0.6
});

contadores.forEach(c => observer.observe(c));

// =========================
// GALERIA (ZOOM LIGHTBOX)
// =========================

const imagens = document.querySelectorAll(".galeria img");

imagens.forEach(img => {
    img.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100vh";
        overlay.style.background = "rgba(0,0,0,0.9)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "9999";

        const novaImg = document.createElement("img");
        novaImg.src = img.src;
        novaImg.style.maxWidth = "90%";
        novaImg.style.maxHeight = "90%";
        novaImg.style.borderRadius = "10px";
        novaImg.style.boxShadow = "0 0 20px #000";

        overlay.appendChild(novaImg);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });
    });
});

// =========================
// SCROLL SUAVE (links)
 // =========================

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// =========================
// ANIMAÇÃO HEADER
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
    }
});

// =========================
// LOG FINAL
// =========================

console.log("🔥 Projeto Corinthians carregado com sucesso!");
