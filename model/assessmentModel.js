// Author: Veda
const mongoose=require("mongoose");

const assessmentSchema={
    questions: String,
    correctAnswer: String,
    givenAnswer: String,
    score: Number
}

const Assessment = mongoose.model("Assessment", assessmentSchema);

module.exports = Assessment;


 