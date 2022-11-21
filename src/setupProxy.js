const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
	app.use(
		'/api',
			createProxyMiddleware({
			target: 'https://demo7084900.mockable.io', // <--- config the url based on your backend server
			changeOrigin: true,
		})
	)
}