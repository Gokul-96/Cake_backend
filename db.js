const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://gokul:gokul@cluster0.u3a4aa6.mongodb.net/mern-cake';

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

// Success event for connection
db.on('connected', () => {
    console.log('MongoDB Connection Successful');
});
    
// Error event for connection
db.on('error', (err) => {
    console.error('MongoDB Connection Error:', err);
});

// Export the mongoose instance (optional, depending on your use case)
module.exports = mongoose;


// mongodb+srv://gokul:gokul@cluster0.u3a4aa6.mongodb.net/mern-cake
// mongodb+srv://gokul:gokul@cluster0.hfxcmgq.mongodb.net/Delight-cake