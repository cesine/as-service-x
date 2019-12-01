const config = require('config');
const {
  Router
} = require('express');
const passport = require('passport');
const SamlStrategy = require('passport-saml').Strategy;

const NAME = 'saml';
const router = Router();

router.use(passport.initialize());

router.get('/', (req, res) => {
  res.send('hello world');
});

router.get('/welcome', (req, res) => {
  res.send('welcome world');
});

router.get('/failed', (req, res) => {
  res.send('failed world');
});

router.post('/', (req, res) => {
  console.log('req.path', req.path);
  console.log('req.body', req.body);
  console.log('req.query', req.query);
  res.send('post root');
});

const findByEmail = (key) => {
  console.log('findByEmail', key);
  return {
    username: 'gc@yopmail.com',
    email: 'gc@yopmail.com',
  };
};

passport.use(NAME, new SamlStrategy(config.saml, ((profile, done) => {
  findByEmail(profile.email, (err, user) => {
    if (err) {
      return done(err);
    }
    return done(null, user);
  });
})));

router.post('/login/callback',
  passport.authenticate(NAME, {
    failureRedirect: '/failed',
    failureFlash: true,
  }),
  (req, res) => {
    res.redirect('/welcome');
  });

router.get('/login',
  passport.authenticate(NAME, {
    failureRedirect: '/failed',
    failureFlash: true,
  }),
  (req, res) => {
    console.log('req.path', req.path);
    console.log('req.user', req.user);
    res.redirect('/welcome');
  });


module.exports = router;
