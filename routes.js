const routes = require('next-routes')()
	.add('App', '/', 'Index')
	.add('project', '/project/:name', 'Project')

module.exports = routes;
