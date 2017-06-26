var game;
var games;
var win;
var lose;
var quarter = Math.round((Math.random(100)*100));
function playSlots () {
    var odds = Math.round((Math.random(100)*100));
    document.write("<h1>Let's Play with a Slot Machine</h1>");
    document.write("<p>You are beginning with " + quarter + " in the bank.</p>");
    document.write("<p>To play it will cost you 1 quarter from the bank.</p>");
    document.write("<p>Your odds of winning right now are: " + odds + " ... Good luck :)</p>")
    while(quarter > 0){
        odds = Math.round((Math.random(100)*100));
        if (odds > 90){
            win = true;
            lose = false;
            quarter++;
            odds = Math.round((Math.random(100)*100));
            document.write("<p class=\"win\">Congratulations you won! You now have this many " + quarter + " left</p>");
        } else {
            win = false; 
            lose = true;
            quarter--;
            odds = Math.round((Math.random(100)*100));
            document.write("<p class=\"try\">You lost. Count your quarters closely ... you only have " + quarter + " left</p>");
        }
    }
}
playSlots();