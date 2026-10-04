const squad = require('../data/squad');

// Register page
const register = function (req, res) {
  res.render('register', {
    title: 'Register | Stats Analyzr',
    pageHeader: {
      kicker: "Let's get you started",
      title: 'Welcome to Manchester United 26/27 Stats Analyzr'
    },
    heroImage: {
      src: '/images/register.webp',
      alt: 'Manchester United players in the 2026/27 home kit'
    },
    form: {
      action: '/login',
      method: 'get',
      submitLabel: 'Continue',
      fields: [
        { name: 'firstName',       label: 'First name',       type: 'text',     placeholder: 'First name' },
        { name: 'lastName',        label: 'Last name',        type: 'text',     placeholder: 'Last name' },
        { name: 'age',             label: 'Age',              type: 'number',   placeholder: 'Age' },
        { name: 'favouritePlayer', label: 'Favourite player', type: 'select',   placeholder: 'Select a player', options: squad.map(p => p.name) },
        { name: 'password',        label: 'Password',         type: 'password', placeholder: 'Password' }
      ]
    },
    usernamePreview: {
      label: 'Your username will appear here',
      value: 'username'
    }
  });
};

// Login page
const login = function (req, res) {
  res.render('login', {
    title: 'Login | Stats Analyzr',
    pageHeader: {
      kicker: 'Login to your account',
      title: 'Welcome to Manchester United 26/27 Stats Analyzr'
    },
    heroImage: {
      src: '/images/login.webp',
      alt: 'Manchester United player in the 2026/27 home kit'
    },
    form: {
      action: '/stats',
      method: 'get',
      submitLabel: 'Login',
      fields: [
        { name: 'username', label: 'Username', type: 'text',     placeholder: 'Username' },
        { name: 'password', label: 'Password', type: 'password', placeholder: 'Password' }
      ]
    },
    registerLink: {
      text: "Don't have an account?",
      linkText: 'Register here',
      href: '/register'
    }
  });
};

module.exports = {
  register,
  login
};
