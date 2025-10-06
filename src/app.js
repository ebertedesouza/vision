import { createHeader } from './components/header.js';
import { createHero } from './components/hero.js';
import { createAbout } from './components/about.js';
import { createServices } from './components/services.js';
import { createPortfolio } from './components/portfolio.js';
import { createContact } from './components/contact.js';
import { createFooter } from './components/footer.js';

const app = document.getElementById('app');

app.appendChild(createHeader());
app.appendChild(createHero());
app.appendChild(createAbout());
app.appendChild(createServices());
app.appendChild(createPortfolio());
app.appendChild(createContact());
app.appendChild(createFooter());
