const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuration du transporteur SMTP
let transporter = nodemailer.createTransport({
  host: '127.0.0.1', 
  port: 1025,
  ignoreTLS: true
});

// Route pour l'envoi d'email
app.post('/send-email', (req, res) => {
  const { nom, prénom, email, sujet, message, artisanEmail } = req.body;

  console.log('Received data:', req.body);  // Log the received data

  let mailOptions = {
    from: '"Site Web" <no-reply@example.com>',
    to: artisanEmail,
    subject: sujet,
    text: `Nom: ${nom} ${prénom}\nEmail: ${email}\nSujet: ${sujet} \n\nMessage:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error while sending email:', error); 
      return res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
    }
    console.log('Email sent successfully:', info);  
    res.status(200).json({ message: 'Email envoyé avec succès' });
  });
});

// Utilisation0 des fichiers statiques de l'application React
app.use(express.static(path.join(__dirname, '/build')));

// Toutes les autres requêtes sont redirigées vers l'application React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`); //si non fonctionelle : http://127.0.0.1:1080/#/ //
});
