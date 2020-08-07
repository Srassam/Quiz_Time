var highScoresEL = document.getElementById('highscores');

var highscores =JSON.parse(localStorage.getItme("highscores"))
highScores= highScores.sort(function(a,b){
    return b.score -a.score;

});

console.log(highscores)

for (var i - 0; i < highscores.length; i++) {
var li - document.createElement("li");
li.textContent -'initials: ' + highscores[i].initials + "score:"+ highScores[i].score
highScoresEL.appendChild(li)
}