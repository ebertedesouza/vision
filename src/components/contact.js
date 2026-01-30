export function createContact() {
  const section = document.createElement('section');
  section.classList.add('contact');
  section.id = 'contact';

  const whatsapp = '5511954310049';
  const instagram = 'vision_manutencao';

  const waLink = `https://wa.me/${whatsapp}?text=${encodeURIComponent('Olá! Vim pelo site da Vision e gostaria de um orçamento.')}`;
  const igLink = `https://instagram.com/${instagram}`;

  section.innerHTML = `
    <div class="container">
      <h2>Contato</h2>
      <p>Atendemos São Paulo e Região Metropolitana. Peça um orçamento rápido pelo WhatsApp ou fale pelo Instagram.</p>

      <div class="contact-cards">
        <a class="contact-card" href="${waLink}" target="_blank" rel="noopener noreferrer">
          <div class="contact-card-title">WhatsApp</div>
          <div class="contact-card-value">(11) 95431-0049</div>
          <div class="contact-card-action">Clique para conversar</div>
        </a>

        <a class="contact-card" href="${igLink}" target="_blank" rel="noopener noreferrer">
          <div class="contact-card-title">Instagram</div>
          <div class="contact-card-value">@${instagram}</div>
          <div class="contact-card-action">Ver perfil</div>
        </a>
      </div>

  `;

  return section;
}
