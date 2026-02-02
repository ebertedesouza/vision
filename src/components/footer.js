export function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('site-footer');

  const whatsapp = '5511954310049';
  const instagram = 'vision_manutencao';

  footer.innerHTML = `
    <div class="container footer-content">
      <div class="footer-brand">
        <strong>Vision Manutenção e Instalações.</strong>
        <p>Eficiência e soluções que transformam.</p>
      </div>
    </div>

  `;

  return footer;
}
