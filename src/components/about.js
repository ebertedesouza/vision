export function createAbout() {
  const section = document.createElement('section');
  section.classList.add('about');
  section.id = 'about';

  section.innerHTML = `
    <div class="container">
      <h2>Sobre a Vision</h2>
      <p>
        A <strong>Vision Coberturas e Manutenções</strong>, liderada por Edvaldo e sua equipe especializada, atua em serviços de <strong>manutenção civil, hidráulica e serralheria</strong>, oferecendo soluções rápidas e eficientes para residências, comércios e indústrias.
      </p>
    </div>
  `;

  return section;
}
