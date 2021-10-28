const mongoose = require('../db/connection');

// Schema is saving mood, the date of mood, and being tied to user so that this information can be called back on.

const MoodSchema = new mongoose.Schema({
    mood: String,
    date: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    
    

});


const Mood = mongoose.model('Mood', MoodSchema);


module.exports = Mood
