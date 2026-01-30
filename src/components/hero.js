export function createHero() {
  const section = document.createElement('section');
  section.classList.add('hero');
  section.id = 'hero';

  const whatsapp = '5511954310049';
  const waLink = `https://wa.me/${whatsapp}?text=${encodeURIComponent('Olá! Vim pelo site da Vision e gostaria de um orçamento.')}`;

  section.innerHTML = `
    <div class="hero-content">
      <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-principal">
        Chamar no WhatsApp
      </a>
    </div>
  `;

  return section;
}
