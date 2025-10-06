export function createHeader() {
  const header = document.createElement('header');
  header.classList.add('site-header');

  header.innerHTML = `
    <div class="logo">
      <img src="img/logo.png" alt="Vision Logo">
    </div>
    <nav class="nav">
      <ul>
        <li><a href="#hero">Início</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
    <div class="menu-toggle">☰</div>
  `;

  const menuToggle = header.querySelector('.menu-toggle');
  const nav = header.querySelector('.nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  return header;
}
