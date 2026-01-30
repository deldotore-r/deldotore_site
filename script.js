// ===========================
// SMOOTH SCROLL PARA LINKS
// ===========================

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll para links de navegação
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Evita scroll se for apenas "#"
      if (href === "#") {
        return;
      }

      e.preventDefault();

      const targetElement = document.querySelector(href);
      if (targetElement) {
        // Calcula a posição ajustando para a altura da navbar
        const navHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

// ===========================
// ANIMAÇÕES AO SCROLL
// ===========================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observa elementos para animação
document.addEventListener("DOMContentLoaded", function () {
  const elementsToAnimate = document.querySelectorAll(
    ".about-card, .project-card, .blog-card, .contact-card, .study-card"
  );

  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });
});

// ===========================
// EFEITO HOVER NOS CARDS
// ===========================

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(
    ".about-card, .project-card, .blog-card, .contact-card"
  );

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 20px 25px -5px rgba(14, 165, 233, 0.2)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.boxShadow = "none";
    });
  });
});

// ===========================
// HIGHLIGHT DO LINK ATIVO NA NAVEGAÇÃO
// ===========================

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.style.color = "var(--text-primary)";
      if (link.getAttribute("href").slice(1) === current) {
        link.style.color = "var(--primary-color)";
      }
    });
  });
});

// ===========================
// CONTADOR DE SCROLL SUAVE
// ===========================

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Opcional: Esconde a navbar ao fazer scroll para baixo
  // e mostra ao fazer scroll para cima
  if (scrollTop > lastScrollTop) {
    // Scroll para baixo
    // navbar.style.transform = 'translateY(-100%)';
  } else {
    // Scroll para cima
    // navbar.style.transform = 'translateY(0)';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===========================
// ANIMAÇÃO DE FADE-IN INICIAL
// ===========================

window.addEventListener("load", function () {
  const heroContent = document.querySelector(".hero-content");
  const heroImage = document.querySelector(".hero-image");

  if (heroContent) {
    heroContent.style.opacity = "0";
    heroContent.style.animation = "fadeInUp 0.8s ease forwards";
  }

  if (heroImage) {
    heroImage.style.opacity = "0";
    heroImage.style.animation = "fadeInRight 0.8s ease forwards 0.2s";
  }
});

// ===========================
// KEYFRAMES PARA ANIMAÇÕES
// ===========================

const style = document.createElement("style");
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// ===========================
// FUNÇÃO PARA COPIAR EMAIL
// ===========================

function copyEmail(email) {
  navigator.clipboard
    .writeText(email)
    .then(function () {
      alert("Email copiado para a área de transferência!");
    })
    .catch(function (err) {
      console.error("Erro ao copiar:", err);
    });
}

// ===========================
// VALIDAÇÃO BÁSICA DE LINKS
// ===========================

document.addEventListener("DOMContentLoaded", function () {
  const externalLinks = document.querySelectorAll('a[target="_blank"]');

  externalLinks.forEach((link) => {
    // Adiciona um indicador visual para links externos
    if (!link.textContent.includes("→")) {
      link.style.cursor = "pointer";
    }
  });
});

console.log("Portfolio script carregado com sucesso!");
