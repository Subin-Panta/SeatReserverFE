const path = require('path')
const express = require('express')
const app = express()
const publicPath = path.join(__dirname, '../', 'build')
const port = process.env.PORT || 3000
const proxy = require('http-proxy-middleware')
app.use(express.static(publicPath))

app.use(
	proxy('/api', {
		target: 'https://stark-cove-03395.herokuapp.com/',
		changeOrigin: true
		// pathRewrite: { '^/api': '' }
	})
)

app.get('*', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'))
})
app.listen(port, () => {
	console.log('Server is up!', port)
})
