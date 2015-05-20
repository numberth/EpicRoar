 /******************************************************************************************
 * This program is the program that checks to see if the players play reaches from point A to B
 * if there is a path from a to b, the win page will be displayed
 *
 * v 2.0:   
 * 
 * @author Eva Yu
 * aid for algorithm code from:
 *  http://www.stoimen.com/blog/2012/09/17/computer-algorithms-graph-depth-first-search/ 
 *
 *aid for algorithm from: 
 * A.Alimardani 
 * 
 * @version 2.0
 *
 ******************************************************************************************/


var marked; // an array to determine if the grid vertex has been visited
var stack_counter; // number[int] that increments with every dfs recursion to store the visited value in the stack array
var stack; // array that records which tiles have been visitsed that are connected to the last tile (point A)
var path_found; // boolean that will determine if the a path from point a - b is found

/**
 * This initializes the user board path searching variables everytime it is called.
 *
 */
function initUserBoardCheck(){
	initMarker();
	stack_counter = 0;
	stack = new Array();
	max_point = MAX*MAX-1;
	path_found = false;
}

/**
 * This function initializes al lthe values in the marker ( with a length of MAX^2 ) to false.
 */
function initMarker(){
	marked = new Array(MAX*MAX);
	for (var i = 0; i < marked.length; i++){
		marked[i] = false;
	}
}

/**
 * This function is called every time a tile is rotates to see if the point A is connected to point B
 * point A will also be max point ( the largest grid position/ vertex in the grid size)
 *
 * if there is a connection from point A to B , the win function will run. 
 * otherwise, the user will keep playing 
 * 
 * */
function checkUserBoard(){
 	initUserBoardCheck();
 	dfs(max_point);

 	for (var i = 0; i < stack.length; i++){
 		if(stack[i] === 0){
 			path_found = true;
 		}
 	}

 	if (path_found) {
 		flipWin(); // replace with display win code
 	}
}
/**
 * The depth first search algorithm that recursively searches the adjacency matrix 
 * and sees if there is an exit and entrance point in the tile 
 * if there 
 *
 *aid for algorithm code from:
 *  http://www.stoimen.com/blog/2012/09/17/computer-algorithms-graph-depth-first-search/ 
 *
 *aid for algorithm from: 
 *A.Alimardani 
 *
 *@author Eva Yu 
 * 
 */
function dfs(til){
	var tile = parseInt(til);
	marked[tile] = true;
	stack[stack_counter] = tile;
	for( var i = 0; i < max_point; i++){
		if(adj_matrix_user[tile][i] && adj_matrix_user[i][tile] && !marked[i]){
			stack_counter++;
			this.dfs(i);
		}
	}
}