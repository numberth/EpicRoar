/******************************************************************************************
 * This program is the program that checks to see if the players play matches the solution in order to return 
 * a winning pop up.
 *
 * @author Eva Yu
 * @version 1.0
 *
 ******************************************************************************************
/**
/**
 * This array stores the tile index of the solution path and will be used to comapre 
 * the solution to the user's grid 
 * 
 * @type {Array} [ and Array of integers that each reperesnt the position of the tile or grid]
 */

var grid_solution_tracer = new Array();
var solution_match_counter;
var nonSolutionValues;
/**
 * 
 * This function records the values of the  solution in correspondance to the tile ID position 
 * in the grid_solution_tracer array. 
 * The first numver in the index is always the starting positoon : 8 
 * The last number in the indx is always the ending position : 0 
 * 
 */
function solutionPathId(){
	for (var i = 0 ; i < solution_matrix.length; i++) {
			grid_solution_tracer.push((MAX*solution_matrix[i][1]) + solution_matrix[i][0]);
	}
}
/**
 * This function checks to see if the users path is exactly the same 
 * as the solutions path. If it is the same, this function will ( temporarily)
 * alter the user with a "you win" pop up  
 *
 */
function checkUserBoard(){
	solution_match_counter = 0; 
	for (var i = 0 ; i < grid_solution_tracer.length; i++){
		if(checkUserPlay(grid_solution_tracer[i])){
			solution_match_counter++;
		}

		if(solution_match_counter === grid_solution_tracer.length){
			displayWin(); //WIN 
		}
	}
}
/**
 * This function is called by the checkUserBoard function to check the 
 * specific tile that is being matched
 * 
 * @param   {number}  til [represetns the position of the tile]
 * @return  {boolean}     [will reutrn true if the to image identities match]
 */
function checkUserPlay(til){
	var tile  = parseInt(til);
		if (grid_image_positionId[tile].style.backgroundImage === grid_solution_positionId[tile].style.backgroundImage) {
			return true;
		}else{
			return false;
		}
}
	

function initNonSolVals(){
	nonSolutionValues = new Array(MAX*MAX);
	for (var i = 0; i < nonSolutionValues.length; i++){
		nonSolutionValues[i] = i;
	}
}

function nonSolutionGridsId(){
	initNonSolVals();
	for (var i = 0; i < grid_solution_tracer.length; i++){
		var temp = nonSolutionValues.indexOf(grid_solution_tracer[i]);
		nonSolutionValues.splice(temp,1);
	}
	
}
	
