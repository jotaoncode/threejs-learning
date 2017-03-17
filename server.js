// I want express framework to work with node to provide to the client my needs. So I require this dependency.
var express = require('express');
// Create a new application of express
var app = express();
// Expose public as static content
app.use(express.static('public'));
app.use('/scripts', express.static('node_modules/three/build'));

// Start listening to the port 3000
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});
