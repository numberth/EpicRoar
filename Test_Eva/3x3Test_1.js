    var direction; // stores the randomly generated integer
    var move = Math.floor(Math.random() * 4); // the variable that randomly assigns the next move

    var MAX = 3; // size of matrix
    var MIN = 1; // minimum size of matrix !NOT INDEX! 

    /**
     * The following variables initiate the coordinates for the starting point, ending point, and current point 
     */
    var x_A; 
    var y_A;
    var x_B;
    var y_B;
    var y;
    var x;
    var temp;
     /**
      * The following varaiables are counters for the program  
      */
    var grid_counter; // count the number of steps taken to back track when needed
    var unfilled_counter; // counts the number of tiles filled
    var solution_counter; // copied from grid_counter when solution is reached
    var counter_direction; // for the trap method to determine the next move of the direction

    /**
     * the boolean values
     */
    var matrix_complete; // sees if the enitre board has been stepped on
    var solution_saved; // sees if the solution has been saved
    var flag_direction; // sees if the directing can go on

    
 
    /**
     * This function was taken from :
     *
     * it will create a multi dimension array 
     * in this program, it will be creating 2-D arrays for the grids 
     * 
     * @param  {int, int,..} length [the length of each array seperated y the length of the array inside]
     * @return {n-D array}        [returns a array of N-dimension ]
     */
    function createArray(length) {
        var arr = new Array(length || 0),
            i = length;

        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            while(i--) arr[length-1 - i] = createArray.apply(this, args);
        }

        return arr;
    }

    /**
     * This Array sets all the values inside the 2-D matrices to 0 or false; 
     * @param  {Array} matrix [it reads a 2d array and sets all the values to 0]
     */
    function initializeArray(matrix){
        for (var i = 0; i < matrix.length ; i++){
            for (var ii = 0; ii < matrix[i].length ; ii++){ 
                matrix[i][ii] = 0;  
            }
        }   
     }

    var adj_matrix = createArray(MAX * MAX, MAX * MAX);// the grid
    var grid_matrix = createArray(MAX, MAX); // stores the connected cubes ;
    var path_matrix = new Array(); // stores the coordinates every time
    var solution_matrix = new Array(); // stores the solution
    initializeArray(adj_matrix);
    initializeArray(grid_matrix);

/**
 * This prints all the values inside the 2-D grid -- for checking purposes 
 * 
 * @param  {2D Array} matrix [description]
 */
     function printGrid(matrix){
        for (var i = 0; i < matrix.length ; i++){
            for (var ii = 0; ii < matrix[i].length ; ii++){     
               //FIND OTHER CODE TO WRITE THE GRID! 
                //console.log(matrix[i][ii]);
            }
        }   
     }

    /**
     * This function prints the coordinates inside the array to see which coordinate values are true 
     * It reads a boolean matrix and assigns the connecting coordinates of which x and y are true. 
     * In this program, this function is meant for the adj_matrix.
     * 
     * @param  {2D Array} matrix [ a 2d array to read ]
     * 
     */
     function printCoordinate(matrix){
        for (var i = 0; i < matrix.length ; i++){
            for (var ii = 0; ii < matrix[i].length ; ii++){ 
                if(matrix[i][ii]){
                   //FIND OTHER CODE TO WRITE THE GRID! 
                   // console.log ("(" + i + "," + ii + ")");    
                }
            }
        }        
     }
    

    