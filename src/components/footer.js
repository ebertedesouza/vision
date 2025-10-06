export function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('site-footer');

  footer.innerHTML = `
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} Vision Coberturas e Manutenções. Todos os direitos reservados.</p>
      <div class="social-links">
        <a href="#" target="_blank">Instagram</a>
        <a href="#" target="_blank">Facebook</a>
      </div>
    </div>
  `;

  return footer;
}
