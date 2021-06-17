// Author: Veda
const mongoose=require("mongoose");

const assessmentSchema={
    questions: String,
    correctAnswer: String,
    givenAnswer: String,
    // score: String
}

const Assessment = mongoose.model("Assessment", assessmentSchema);

module.exports = Assessment;