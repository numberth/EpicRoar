/***************************************************************************************
 * The function that will call all the init functions in the program 
 * 
 * 
 * @author Eva Yu
 * @version [1.0]
 ***************************************************************************************
 */
/**
 * Initializes the necessary components of the path , the path assignment, and the solution ID
 *  on load of the page 
 * 
 */
function initAll(){
	initPath(); // from solution_generate.js
    assignPath(); // from play_check_solution_3x3.js
    solutionPathId(); // from check_solution_3x3.js
}
/**
 * This function is called with every click of an image in order to rotate it and then check it against the solution
 * 
 * @param   {Number}  til [the position of the tile]
 */
function rotateAndCheck(til){
	var tile = parseInt(til); 
	if(enableFunction(til)){
	rotate(tile); // from play_check_solution_3x3.js
	checkUserBoard(); // from check_solution_3x3.js
}
}