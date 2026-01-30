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

      <div class="footer-links">
        <a href="https://wa.me/${whatsapp}" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        <a href="https://instagram.com/${instagram}" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      © ${new Date().getFullYear()} Vision Manutenção e Instalações · São Paulo - SP
    </div>
  `;

  return footer;
}
