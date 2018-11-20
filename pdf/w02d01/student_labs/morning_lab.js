// let coldWaffle = 0;
// let wafflesInFreezer = " ";
// let syrupInFridge = 0;
// let waffleGoldenBrown = 0;
//
// alert('It\'s breakfast time!');
//
// while (coldWaffle === 0) {
//   wafflesInFreezer = prompt('Are there waffles in the freezer?', 'yes/no');
//   if (wafflesInFreezer == 'yes') {
//     alert('Great! Let\'s get to toasting!');
//     coldWaffle++;
//   } else if (wafflesInFreezer === "no") {
//     alert('Go to the store and get some waffles, duh!');
//     prompt('Got your waffles now?' )
//   }
// }
//
// // If yes - take waffles out (subtract from waffle)
// //   (alert you have __ waffles)
// // else - go to store and get waffles (add to waffles)
// //
// //
// // Toast waffle in toaster
// // Is waffle golden brown? (t/f)
// //   if yes - done toasting
// //   else - keep toasting
// //
// // Done toasting - place waffle on plate
// // Get syrup fridge
// // is syrup cold?
// //   if yes - warm in microwave then continue (t/f)
// //   if else - continue
// //
// // if waffle ==== warm and syrup === warm
// // put syrup on waffle
// // Enjoy!


// //////////////////////////////
// Best game ever!
// promt user do you want to win?
// if yes win game
// if no, lose game
// if quit, quit
// if something else - show an error

let playGame = true;

while(playGame) {
  let answer = prompt('Welcome to best game evert! Do you want to win?', 'yes/no')

    if (answer === 'yes'){
      alert('you won!')
    } else if (answer === 'no'){
      alert('you lost')
    } else if (answer === 'quit') {
      playGame = false
      alert('Have a nice day please play again soon')
      console.log(playGame); //be false
    } else {
      alert("sorry I don't understand you")
    }
}
