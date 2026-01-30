export function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('site-footer');

  const whatsapp = '5511954310049';
  const instagram = 'vision_manutencao';

  footer.innerHTML = `
    <div class="container footer-content">
      <div class="footer-brand">
        <strong>Vision Manutenção e Instalações</strong>
        <p>Soluções completas em manutenção, instalações e reformas.</p>
      </div>
    </div>

    <div class="footer-bottom">
      © ${new Date().getFullYear()} Vision Manutenção e Instalações
    </div>
  `;

  return footer;
}
