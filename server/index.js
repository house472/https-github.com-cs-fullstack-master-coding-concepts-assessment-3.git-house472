let express = require('express');
let app  = express();
let port = 5000;

// Database stuff
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const mongoDb = 'mongodb+srv://student:Datwho@91@cluster0-mhpvz.gcp.mongodb.net/cs_database?retryWrites=true&w=majority';
console.log(`Connecting to Mongo @ ${mongoDb}...`);
mongoose.connect(mongoDb, {useNewUrlParser: true,  useUnifiedTopology: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB crapped out'));




let api = require('./routes/api')
app.use('/api', api)

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
});