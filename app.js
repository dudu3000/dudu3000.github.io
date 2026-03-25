const express = require('express');
const path = require('path');
const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Acasă' });
});

app.get('/services', (req, res) => {
  const services = [
    {
      name: 'Curățare Apartamente',
      price: '$50/oră',
      description: 'Curățare profesională pentru apartamente de toate dimensiunile'
    },
    {
      name: 'Curățare Casă',
      price: '$60/oră',
      description: 'Curățare profundă pentru locuințe rezidențiale'
    },
    {
      name: 'Curățare Birou',
      price: '$70/oră',
      description: 'Mentenanță și curățare comercială a spațiilor de birou'
    },
    {
      name: 'Curățare Mutare',
      price: '$400-800',
      description: 'Curățare completă pentru tranzacții de proprietate'
    },
    {
      name: 'Curățare Ferestre',
      price: '$30/oră',
      description: 'Curățare ferestre interior și exterior'
    },
    {
      name: 'Curățare Covoase',
      price: '$150-400',
      description: 'Curățare profesională de covoase și mochete'
    }
  ];
  res.render('services', { title: 'Servicii & Prețuri', services });
});

app.get('/about', (req, res) => {
  const employees = [
    {
      name: 'Maria',
      image: '/images/maria.jpg',
      bio: 'Cu 8 ani de experiență în curățenie, Maria se specializează în curățire profundă și mentenanța casei. Atenția sa la detalii și dedicarea asigură că fiecare colț strălucește.'
    },
    {
      name: 'Sofia',
      image: '/images/sofia.jpg',
      bio: 'Sofia aduce 6 ani de experiență profesională în curățenie comercială și rezidențială. Exceleaza în gestionarea proiectelor mari și crearea soluțiilor ecologice.'
    }
  ];
  res.render('about', { title: 'Despre Noi', employees });
});

app.get('/gallery', (req, res) => {
  const gallery = [
    { image: '/images/gallery1.jpg', title: 'Curățare Apartamente' },
    { image: '/images/gallery2.jpg', title: 'Spațiu de Birou' },
    { image: '/images/gallery3.jpg', title: 'Curățare Casă' },
    { image: '/images/gallery4.jpg', title: 'Curățire Profundă' },
    { image: '/images/gallery5.jpg', title: 'Înainte & După' },
    { image: '/images/gallery6.jpg', title: 'Curățare Ferestre' }
  ];
  res.render('gallery', { title: 'Galerie', gallery });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'ContactaȚi-ne' });
});

// Contact form submission (you'll need to add email service later)
app.post('/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log('Trimitere formular contact:', { name, email, phone, message });
  // TODO: Add email sending functionality here
  res.redirect('/contact');
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { title: 'Pagina Nu a Fost Găsită' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serverul rulează pe http://localhost:${PORT}`);
});
