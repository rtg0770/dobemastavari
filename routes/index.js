var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

/* GET index. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vítejte! DOBEMA, vaši stavaři!' });
});

/* GET produkty. */
router.get('/produkty', function(req, res, next) {
  res.render('produkty', { title: 'Produkty' });
});

/* GET služby. */
router.get('/sluzby', function(req, res, next) {
  res.render('sluzby', { title: 'Služby' });
});

/* GET o společnosti. */
router.get('/spolecnost-dobema', function(req, res, next) {
  res.render('spolecnost-dobema', { title: 'O společnosti DOBEMA s.r.o.' });
});

/* GET galerie. */
router.get('/galerie', function(req, res, next) {
  res.render('galerie', { title: 'Galerie' });
});

/* GET kontakty. */
router.get('/kontakty', function(req, res, next) {
  res.render('kontakty', { title: 'Kontakty' });
});

module.exports = router;