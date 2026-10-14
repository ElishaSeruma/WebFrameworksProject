// Country flags (Northern Ireland is a local file)
//start of mongoWork
const FLAG_CDN = 'https://flagdownload.com/wp-content/uploads/';
const flags = {
  england:         { name: 'England',          src: FLAG_CDN + 'Flag_of_England_Flat_Wavy-1024x707.png' },
  belgium:         { name: 'Belgium',          src: FLAG_CDN + 'Flag_of_Belgium_Flat_Wavy-2048x2049.png' },
  wales:           { name: 'Wales',            src: FLAG_CDN + 'Flag_of_Wales_Flat_Wavy-2048x1413.png' },
  northernIreland: { name: 'Northern Ireland', src: '/images/flags/northern-ireland.svg' },
  portugal:        { name: 'Portugal',         src: FLAG_CDN + 'Flag_of_Portugal_Flat_Wavy-2048x1571.png' },
  morocco:         { name: 'Morocco',          src: FLAG_CDN + 'Flag_of_Morocco_Flat_Wavy-2048x1571.png' },
  netherlands:     { name: 'Netherlands',      src: FLAG_CDN + 'Flag_of_Netherlands_Flat_Wavy-2048x1571.png' },
  argentina:       { name: 'Argentina',        src: FLAG_CDN + 'Flag_of_Argentina_Flat_Wavy-2048x1472.png' },
  france:          { name: 'France',           src: FLAG_CDN + 'Flag_of_France_Flat_Wavy-2048x1571.png' },
  brazil:          { name: 'Brazil',           src: FLAG_CDN + 'Flag_of_Brazil_Flat_Wavy-2048x1648.png' },
  cameroon:        { name: 'Cameroon',         src: FLAG_CDN + 'Flag_of_Cameroon_Flat_Wavy-2048x1571.png' },
  uruguay:         { name: 'Uruguay',          src: FLAG_CDN + 'Flag_of_Uruguay_Flat_Wavy-2048x1571.png' },
  scotland:        { name: 'Scotland',         src: FLAG_CDN + 'Flag_of_Scotland_Flat_Wavy-2048x1413.png' },
  denmark:         { name: 'Denmark',          src: FLAG_CDN + 'Flag_of_Denmark_Flat_Wavy-2048x1776.png' },
  ivoryCoast:      { name: "Côte d'Ivoire",    src: FLAG_CDN + 'Flag_of_Co%CC%82te_dIvoire_Flat_Wavy-2048x1571.png' },
  slovenia:        { name: 'Slovenia',         src: FLAG_CDN + 'Flag_of_Slovenia_Flat_Wavy-2048x1178.png' }
};

module.exports = flags;
