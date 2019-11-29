const { Router } = require('express');
const passport = require('passport');
const SamlStrategy = require('passport-saml').Strategy;

const router = Router();

router.use(passport.initialize());

router.get('/', (req, res) => {
  res.send('hello world');
});

const findByEmail = () => { 'hi@localhost'; };

passport.use('saml', new SamlStrategy({
  path: '/login/callback',
  entryPoint: 'https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php',
  issuer: 'passport-saml',
},
((profile, done) => {
  findByEmail(profile.email, (err, user) => {
    if (err) {
      return done(err);
    }
    return done(null, user);
  });
})));

router.post('/login/callback',
  passport.authenticate('saml', {
    failureRedirect: '/',
    failureFlash: true,
  }),
  (req, res) => {
    res.redirect('/');
  });

router.get('/login',
  passport.authenticate('saml', {
    failureRedirect: '/',
    failureFlash: true,
  }),
  (req, res) => {
    res.redirect('/');
  });


module.exports = router;
