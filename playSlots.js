var game;
var games;
var win;
var lose;
var quarter = 25;
var bank = Math.round((Math.random(100)*100));
var odds = Math.round((Math.random(100)*100));
function playSlots () {
    document.write("<h1>Let's Play with a Slot Machine</h1>");
    document.write("<p>You are beginning with " + quarter + " in the bank.</p>");
    document.write("<p>To play it will cost you 1 quarter from the bank.</p>");
    
    game = bank - 1;
    for (var i = 0; i < quarter; i++) {
        if (odds % 10 == 0) {
            if ( game > 0){
                win = true;
                lose = false;
                bank++;
                document.write("<p class=\"win\">Congratulations you won! You now have this many " + bank + " left</p>");
            } else {
                document.write("<p class=\"try\">You are out of money ... refresh the page to try again.</p>");
            }
        }                
    }
}
playSlots();