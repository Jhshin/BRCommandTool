
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.push = function(req,res)
{
	res.render('Push', {title : 'Push' });
};