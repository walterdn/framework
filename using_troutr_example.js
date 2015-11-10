var app = require(__dirname + '/troutr/index.js');

app.setTrout('html');
app.setTrout('txt');
app.serveTrouts(3000);
