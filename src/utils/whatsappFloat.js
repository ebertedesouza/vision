export function createWhatsappFloat() {
  const phone = '5511954310049';
  const message = 'Olá! Vim pelo site da Vision e gostaria de um orçamento.';
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const btn = document.createElement('a');
  btn.classList.add('whatsapp-float');
  btn.href = waLink;
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.setAttribute('aria-label', 'Chamar no WhatsApp');

  btn.innerHTML = `
    <span class="whatsapp-icon">✆</span>
    <span class="whatsapp-text">WhatsApp</span>
  `;

  document.body.appendChild(btn);
}
