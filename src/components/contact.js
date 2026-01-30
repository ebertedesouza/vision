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

        <div class="contact-card contact-card-static">
          <div class="contact-card-title">Região</div>
          <div class="contact-card-value">São Paulo - SP</div>
          <div class="contact-card-action">Atendimento na região</div>
        </div>
      </div>

      <div class="contact-form-wrap">
        <h3>Ou envie uma mensagem</h3>
        <form class="contact-form">
          <input type="text" name="name" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu e-mail" required />
          <textarea name="message" placeholder="Descreva o serviço que você precisa" required></textarea>
          <button type="submit" class="btn-principal">Enviar</button>
        </form>
        <p class="contact-note">
          * Ao clicar em "Enviar", o seu aplicativo de e-mail será aberto com a mensagem pronta.
        </p>
      </div>
    </div>
  `;

  const form = section.querySelector('.contact-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = `Orçamento - Vision (Site)`;
    const body = `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}\n\nEnviado pelo site da Vision.`;

    const mailto = `mailto:contato@vision.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    form.reset();
  });

  return section;
}
