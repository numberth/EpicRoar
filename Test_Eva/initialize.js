
/***************************************************************************************
 * The function that will call all the init functions  in the program 
 * 
 * 
 * @author Eva Yu
 * @version [1.0]
 ***************************************************************************************
 */
 
 /* This function is the function to be called on load. 
 Here stores all the necessities of intializing the solution path 
 AND  the solution AND asisgns the tile images at the same time. 
 * 
 * @function {initPath} [the main function from solution_generate.js. This function is the one that finds the path]
 * @function {tileAsign} [the main function that Assigns the tiles accordingly]
 */
function initAll() {
    initPath();
    tileAssign();
}