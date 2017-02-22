const eo = require('express'),
app = eo(),
port = process.env.PORT || 8080;

app.get('/', (req, res)=>{
	res.send('Hi from Express');
});

app.listen(port, ()=>{
	console.log(`Listening on port http://localhost: ${port}`);
});