export function createContact() {
  const section = document.createElement('section');
  section.classList.add('contact');
  section.id = 'contact';

  section.innerHTML = `
    <div class="container">
      <h2>Contato</h2>
      <p>Entre em contato conosco via telefone, WhatsApp ou envie uma mensagem pelo formulário abaixo.</p>

      <div class="contact-info">
        <p>📞 Telefone: (xx) xxxx-xxxx</p>
        <p>📱 WhatsApp: (xx) xxxxx-xxxx</p>
        <p>✉️ E-mail: contato@vision.com</p>
      </div>

      <form class="contact-form">
        <input type="text" name="name" placeholder="Seu Nome" required>
        <input type="email" name="email" placeholder="Seu E-mail" required>
        <textarea name="message" placeholder="Sua Mensagem" required></textarea>
        <button type="submit" class="btn-principal">Enviar Mensagem</button>
      </form>
    </div>
  `;

  section.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    e.target.reset();
  });

  return section;
}
