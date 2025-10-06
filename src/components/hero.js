export function createHero() {
  const section = document.createElement('section');
  section.classList.add('hero');
  section.id = 'hero';

  section.innerHTML = `
    <div class="hero-content">
      <h1>Vision Coberturas e Manutenções</h1>
      <p>Soluções rápidas e eficientes em manutenção civil, hidráulica e serralheria.</p>
      <a href="#contact" class="btn-principal">Fale Conosco</a>
    </div>
  `;

  return section;
}
