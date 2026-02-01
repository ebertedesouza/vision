export function createPortfolio() {
  const section = document.createElement('section');
  section.classList.add('portfolio');
  section.id = 'portfolio';

  const images = [
    '/img/portifolio/serralheria-01.jpg',
    '/img/portifolio/serralheria-02.jpg',
    '/img/portifolio/serralheria-03.jpg',

    '/img/portifolio/cobertura-01.jpg',
    '/img/portifolio/cobertura-02.jpg',
    '/img/portifolio/cobertura-03.jpg',

    '/img/portifolio/eletrica-01.jpg',
    '/img/portifolio/eletrica-02.jpg',
    '/img/portifolio/eletrica-03.jpg',
  ];

  section.innerHTML = `
    <div class="container">
      <h2>Portfólio</h2>

      <div class="portfolio-gallery">
        ${images
          .map(
            (src) =>
              `<img src="${src}" alt="Serviço realizado pela Vision" loading="lazy">`
          )
          .join('')}
      </div>
    </div>
  `;

  return section;
}
