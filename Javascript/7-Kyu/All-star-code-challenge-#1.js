// All star code challenge #1
function sumPPG(playerOne, playerTwo){

    return playerOne.ppg + playerTwo.ppg;

};

// Test
function NBAplayer(name, team, ppg){
    this.name=name;
    this.team=team;
    this.ppg=ppg;
};

var iverson = new NBAplayer("Iverson", "76ers", 11.2);
var jordan = new NBAplayer("Jordan", "bulls", 20.2);

console.log(sumPPG(iverson, jordan));  // --> 31.4
