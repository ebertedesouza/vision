export function createPortfolio() {
  const section = document.createElement('section');
  section.classList.add('portfolio');
  section.id = 'portfolio';

  section.innerHTML = `
    <div class="container">
      <h2>Portfólio</h2>
      <div class="portfolio-gallery">
        <img src="img/portfolio/trabalho1.jpg" alt="Trabalho 1">
        <img src="img/portfolio/trabalho2.jpg" alt="Trabalho 2">
        <img src="img/portfolio/trabalho3.jpg" alt="Trabalho 3">
        <img src="img/portfolio/trabalho4.jpg" alt="Trabalho 4">
      </div>
    </div>
  `;

  return section;
}

