export function createPortfolio() {
  const section = document.createElement('section');
  section.classList.add('portfolio');
  section.id = 'portfolio';

  const images = [
    '/img/portfolio/serralheria-01.jpg',
    '/img/portfolio/serralheria-02.jpg',
    '/img/portfolio/serralheria-03.jpg',
    '/img/portfolio/serralheria-04.jpg',
    '/img/portfolio/serralheria-05.jpg',
    '/img/portfolio/serralheria-06.jpg',
    '/img/portfolio/cobertura-01.jpg',
    '/img/portfolio/cobertura-02.jpg',
    '/img/portfolio/cobertura-03.jpg',
    '/img/portfolio/cobertura-04.jpg',
    '/img/portfolio/cobertura-05.jpg',
    '/img/portfolio/cobertura-06.jpg',
    '/img/portfolio/hidraulica-1.jpg',
    '/img/portfolio/hidraulica-2.jpg',
    '/img/portfolio/hidraulica-3.jpg',
    '/img/portfolio/eletrica-03.jpg',
    '/img/portfolio/eletrica-04.jpg',
    '/img/portfolio/eletrica-05.jpg',
    '/img/portfolio/eletrica-06.jpg',
    '/img/portfolio/eletrica-07.jpg',
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
