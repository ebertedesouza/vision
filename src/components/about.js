export function createAbout() {
  const section = document.createElement('section');
  section.classList.add('about');
  section.id = 'about';

  section.innerHTML = `
    <div class="container">
      <h2>Sobre a Vision</h2>
      <p>
        A <strong>A Vision Manutenção e Instalações nasceu para oferecer soluções integradas em construção, manutenção e acabamentos. Nosso compromisso é unir qualidade, agilidade e custo-benefício em cada projeto, seja residencial, comercial ou industrial.
      </p>
    </div>
  `;

  return section;
}
