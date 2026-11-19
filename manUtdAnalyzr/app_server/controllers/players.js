const axios = require('axios');

const apiOptions = {
  server : 'http://localhost:3009'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://webframeworksproject-nqn2.onrender.com';
}

// Stats page
const _renderSquadStats = function (req, res, players, staff) {
  res.render('squad-stats', {
    title: 'View Stats Stats Analyzr',
    pageHeader: {
      title: 'Manchester United Full Squad',
      strapline: '2026/27 Premier League season'
    },
    squadCard: {
      title: 'Season stats',
      text: 'Pick a position to filter the squad. Hover a row to highlight a player.'
    },
    // Position filter tabs
    tabs: [
      { id: 'all',         label: 'All' },
      { id: 'goalkeepers', label: 'Goalkeepers', position: 'Goalkeeper' },
      { id: 'defenders',   label: 'Defenders',   position: 'Defender' },
      { id: 'midfielders', label: 'Midfielders', position: 'Midfielder' },
      { id: 'attackers',   label: 'Attackers',   position: 'Attacker' }
    ],
    columns: [
      { label: '#' },
      { label: 'Player', align: 'start' },
      { label: 'Age' },
      { label: 'Country' },
      { label: 'Assists' },
      { label: 'Goals' },
      { label: 'Yellow Cards', icon: 'yellow' },
      { label: 'Red Cards', icon: 'red' },
      { label: 'Min Played' }
    ],
    players: players,
    staffSection: {
      title: 'Coaching Staff',
      strapline: 'The team behind the team'
    },
    staff: staff
  });
};

/* GET 'stats' page */
const squadStats = async function (req, res) {
  let players = [];
  let staff = [];

  try {
    const response = await axios.get(apiOptions.server + '/api/players');
    if (response.status === 200 && Array.isArray(response.data)) {
      players = response.data;
    } else {
      console.log('API error or non-array body:', response.data);
    }
  } catch (err) {
    console.log('Request failed:', err.message);
  }

  try {
    const response = await axios.get(apiOptions.server + '/api/staff');
    if (response.status === 200 && Array.isArray(response.data)) {
      staff = response.data;
    } else {
      console.log('API error or non-array body:', response.data);
    }
  } catch (err) {
    console.log('Request failed:', err.message);
  }

  _renderSquadStats(req, res, players, staff);
};

// Player detail page
const _renderPlayerDetail = function (req, res, player) {
  const stats = player.stats || {};
  res.render('player-detail', {
    title: player.name + ' | Stats Analyzr',
    pageHeader: {
      title: player.name,
      strapline: '#' + player.number + ' ' + player.position
    },
    backLink: {
      text: 'Back to full squad',
      href: '/stats'
    },
    player: player,
    details: [
      { label: 'Age',      value: player.age },
      { label: 'Country',  value: player.flag ? player.flag.name : '' },
      { label: 'Position', value: player.position },
      { label: 'Number',   value: player.number }
    ],
    stats: [
      { label: 'Goals',          value: stats.goals },
      { label: 'Assists',        value: stats.assists },
      { label: 'Yellow Cards',   value: stats.yellowCards, icon: 'yellow' },
      { label: 'Red Cards',      value: stats.redCards, icon: 'red' },
      { label: 'Minutes Played', value: stats.minutesPlayed }
    ]
  });
};

/* GET 'player detail' page */
const playerInfo = async function (req, res) {
  const url = apiOptions.server + '/api/players/' + req.params.playerid;

  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      _renderPlayerDetail(req, res, response.data);
    } else {
      res.status(response.status).render('error', {
        message: 'Player not found',
        error: response.data
      });
    }
  } catch (err) {
    const status = err.response ? err.response.status : 500;
    const errorBody = err.response ? err.response.data : { message: err.message };
    res.status(status).render('error', {
      message: 'Player not found',
      error: errorBody
    });
  }
};

module.exports = {
  squadStats,
  playerInfo
};
