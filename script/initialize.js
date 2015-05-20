/***************************************************************************************
 * The function that will call all the init functions in the path assignment and implementation programs  
 * 
 * 
 * @author Eva Yu
 * @version [2.0]
 ***************************************************************************************
 */
/**
 * Initializes the necessary components of the path , the path assignment, and the solution ID
 *  on load of the page 
 *
 * this function is called when the grid for a 3x3 page is called in the landingPage.js
 * 
 */
function initBoard3x3(){
  var MAX_3 = 3;
  MAX = MAX_3;
  initPath(); // from pathGenerator. js
  assignPath3x3(); // from boardGenerator.js
  generateGameBoard(); // boardGenerator.js
  generateGameBoard();
}
 /**
 * Initializes the necessary components of the path , the path assignment, and the solution ID
 *  on load of the page 
 *
 * this function is called when the grid for a 4x4 page is called in the landingPage.js
 * 
 */
 function initBoard4x4(){
  var MAX_4 = 4;
  MAX = MAX_4;
  initPath();
  assignPath4x4();
  generateGameBoard();
  generateGameBoard();
 }
/**
 * This function is called with every click of an image in order to rotate it and then check it against the solution
 * 
 * @param   {Number}  til [the position of the tile]
 */
function rotateAndCheck(til){
  flipSound();
  var tile = parseInt(til); 
  rotate(tile); // from play_check_solution_3x3.js
  checkUserBoard(); // from check_solution_3x3.js
}

// function rotateAndCheck4x4(til){
//   var tile = parseInt(til); 
//   rotate4x4(tile); // from play_check_solution_3x3.js
//   checkUserBoard(); // from check_solution_3x3.js
// }
