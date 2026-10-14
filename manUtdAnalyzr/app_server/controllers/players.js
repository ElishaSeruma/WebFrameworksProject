const squad = require('../data/squad');
const staff = require('../data/staff');

// Stats page
const squadStats = function (req, res) {
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
    players: squad,
    staffSection: {
      title: 'Coaching Staff',
      strapline: 'The team behind the team'
    },
    staff: staff
  });
};

module.exports = {
  squadStats
};
