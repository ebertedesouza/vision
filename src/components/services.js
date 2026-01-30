export function createServices() {
  const section = document.createElement('section');
  section.classList.add('services');
  section.id = 'services';

  section.innerHTML = `
    <div class="container">
      <h2>Serviços</h2>
      <p class="section-subtitle">
        Soluções completas para residências, comércios e indústrias.
      </p>

      <div class="service-groups">
        <div class="group-card">
          <h3>Construção e Acabamento</h3>
          <ul>
            <li>Manutenção civil</li>
            <li>Drywall</li>
            <li>Pintura e restauração</li>
          </ul>
        </div>

        <div class="group-card">
          <h3>Instalações</h3>
          <ul>
            <li>Elétrica</li>
            <li>Tubulação e hidráulica</li>
            <li>Vidraçaria</li>
          </ul>
        </div>

        <div class="group-card">
          <h3>Estruturas e Portões</h3>
          <ul>
            <li>Serralheria</li>
            <li>Portões automáticos e manuais</li>
            <li>Reparos e reforços metálicos</li>
          </ul>
        </div>

        <div class="group-card">
          <h3>Comunicação Visual</h3>
          <ul>
            <li>Fachadas e letreiros</li>
            <li>Placas e adesivagem</li>
            <li>Envelopamento</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  return section;
}
