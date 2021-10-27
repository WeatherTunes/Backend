const mongoose = require('../db/connection');


const MoodSchema = new mongoose.Schema({
    mood = Happy, Ehh, Angry 
    

});


const Mood = mongoose.model('Mood', MoodSchema);


module.exports = Mood
