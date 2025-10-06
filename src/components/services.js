export function createServices() {
  const section = document.createElement('section');
  section.classList.add('services');
  section.id = 'services';

  section.innerHTML = `
    <div class="container">
      <h2>Serviços</h2>
      <div class="service-cards">
        <div class="card">
          <h3>Manutenção Civil</h3>
          <p>Reformas, reparos e adequações em residências e comércios.</p>
        </div>
        <div class="card">
          <h3>Reparos Hidráulicos</h3>
          <p>Instalação e conserto de encanamentos, torneiras, vasos sanitários e mais.</p>
        </div>
        <div class="card">
          <h3>Serralheria e Portões</h3>
          <p>Fabricação, instalação e manutenção de portões e estruturas metálicas.</p>
        </div>
        <div class="card">
          <h3>Instalação de Coberturas</h3>
          <p>Coberturas metálicas, policarbonato e proteção de áreas externas.</p>
        </div>
        <div class="card">
          <h3>Reformas e Adequações</h3>
          <p>Serviços gerais para deixar qualquer espaço seguro e funcional.</p>
        </div>
      </div>
    </div>
  `;

  return section;
}
