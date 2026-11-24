// About page (the content is rendered by the Angular app-about component)
const about = function(req, res){
  res.render('about', { title: 'About | Stats Analyzr' });
};
module.exports = {
  about
};
