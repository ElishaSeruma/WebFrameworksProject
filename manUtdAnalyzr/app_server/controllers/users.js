const axios = require('axios');
const squad = require('../data/squad');

const apiOptions = {
  server : 'http://localhost:3009'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://webframeworksproject-nqn2.onrender.com';
}

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
      action: '/register',
      method: 'post',
      submitLabel: 'Continue',
      fields: [
        { name: 'firstName',       label: 'First name',       type: 'text',     placeholder: 'First name' },
        { name: 'lastName',        label: 'Last name',        type: 'text',     placeholder: 'Last name' },
        { name: 'age',             label: 'Age',              type: 'number',   placeholder: 'Age' },
        { name: 'favouritePlayer', label: 'Favourite player', type: 'select',   placeholder: 'Select a player', options: squad.map(p => p.name) },
        { name: 'username',        label: 'Username',         type: 'text',     placeholder: 'Username' },
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
    title: 'Login Stats Analyzr',
    pageHeader: {
      kicker: 'Login to your account',
      title: 'Welcome to Manchester United 26/27 Stats Analyzr'
    },
    heroImage: {
      src: '/images/login.webp',
      alt: 'Manchester United player in the 2026/27 home kit'
    },
    form: {
      action: '/login',
      method: 'post',
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

/* POST register form */
const doRegister = async function (req, res) {
  const url = apiOptions.server + '/api/users/register';

  const postData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: parseInt(req.body.age),
    favouritePlayer: req.body.favouritePlayer,
    username: req.body.username,
    password: req.body.password
  };

  try {
    const response = await axios.post(url, postData);

    if (response.status === 201) {
      res.redirect('/login');
    } else {
      res.status(response.status).render('error', {
        message: 'Error creating account',
        error: response.data
      });
    }
  } catch (err) {
    const status = err.response ? err.response.status : 500;
    const errorBody = err.response ? err.response.data : { message: err.message };
    res.status(status).render('error', {
      message: 'Error creating account',
      error: errorBody
    });
  }
};

/* POST login form */
const doLogin = async function (req, res) {
  const url = apiOptions.server + '/api/users/login';

  const postData = {
    username: req.body.username,
    password: req.body.password
  };

  try {
    const response = await axios.post(url, postData);

    if (response.status === 200) {
      res.redirect('/stats');
    } else {
      res.status(response.status).render('error', {
        message: 'Login failed',
        error: response.data
      });
    }
  } catch (err) {
    const status = err.response ? err.response.status : 500;
    const errorBody = err.response ? err.response.data : { message: err.message };
    res.status(status).render('error', {
      message: 'Login failed',
      error: errorBody
    });
  }
};

module.exports = {
  register,
  login,
  doRegister,
  doLogin
};
