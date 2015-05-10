/********************************************************
 * This is the finalized version of the Solution generator 
 * this is the algorithm that will gnereate a solution dynamically 
 * and ensure that the assinged tiles will have at least one possible 
 * path to from point A to point B
 * 
 * @author Eva Yu
 * @version [2.0]
 * *******************************************************
    /**
     * The constants for the size of the matrix
     * @type {Number: Constant}
     */
    var MAX = 3; // size of matrix
    var MIN = 1; // minimum size of matrix !NOT INDEX! 

    var direction; // stores the randomly generated integer 

    /**
     * The following variables initiate the coordinates for the starting point, ending point, and current povar 
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

    var adj_matrix = createArray(MAX*MAX,MAX*MAX); // the grid
    var grid_matrix = createArray (MAX, MAX); // stores the connected cubes ;
    var path_matrix = createArray (10, 2); // stores the coordinates every time
    var solution_matrix = createArray (10, 2); // stores the solution
/**
 * Retrieves the Adjacent Matrix 
 * @return {array} [the values in adjacent matrix]
 */
    function getAdjMatrix(){
      var coordinates;
      for (var i =0; i < adj_matrix.length; i++ ){
        for (var ii = 0; ii = adj_matrix.length; ii++) {
          if(this.adj_matrix[i][ii]){
            coordinates +=  ("("+i+","+ii+")\n");
        }
      }
      return coordinates;  
    }
  }

     /*OR this function instead of prior--->
    function getAdjMatrix(){
      for (var i =0; i < adj_matrix.length; i++ ){
          return this.adj_matrix[i].toString();
      }   
    }
      */
    /**
     *createArray intializes an array of N dimensions of X size: where N is the nubmer of parameters input and X is the values in each input.
     *This function is taken from an external contributor. The details of this retreieving of this function are followed.
     *createArray function retrieved from: 
     *http://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
     * @param  {Number: Integer} length [the size of each array]
     * @return {Multidimension Array}        [the array that has been initaialized]
     */
  function createArray(length) {
      var arr = new Array(length || 0),
          i = length;

      if (arguments.length > 1) {
          var args = Array.prototype.slice.call(arguments, 1);
          while(i--) 
            arr[length-1 - i] = createArray.apply(this, args);
      }

      return arr;
  }
  /**
   * This function intializes all the values in  a 2D array-grid to 0 ( or false in JS)
   * @param  {Array} matrix [An array of two dimensions]
   * 
   */
  function initGrid(matrix){
    for (var i = 0; i < matrix.length ; i++){
      for (var ii = 0; ii < matrix[i].length ; ii++){ 
        matrix[i][ii] = 0;  
      }
    } 
  }
/**
 * This function returns the solution that is saved.  
 * @return {Array} [returns a 2-D array of coordinates with [n][0] as X; [n][1] as y where n represents the n-th step taken ]
 */
    function getPath(){
      return this.solution_matrix;
    }

/**
 * The solution initializer. Initializes and dynamically generates the solution path. 
 * 
 */
    function initPath(){
        this.grid_counter = 0; 
        this.unfilled_counter = 0;
        this.solution_counter = 0;
        this.x_A = MAX - 1;
        this.y_A = MAX - 1;
        this.x_B = MIN - 1;
        this.y_B = MIN - 1;
        this.y = x_A;
        this.x = y_A;
        this.path_matrix[0][0] = x;
        this.path_matrix[0][1] = y;
        initGrid(this.grid_matrix);
        initGrid(this.adj_matrix);
        this.grid_matrix[x][y] = true;
        this.matrix_complete = false;
        this.solution_saved = false;
        createPath();
    }
    /**
     * The function that ensures the path is a non-looping tree. Solution covers all the possible coordinates of the grid_matrix 
     * 
     */
    function createPath(){
      while (!matrix_complete){
        this.direction = Math.floor(Math.random() * 4);
        check();
        savePath();
          
         for (var i = 0; i < grid_matrix.length; i++) {
           for (var ii = 0; ii < grid_matrix[i].length; ii++) {
              if (!grid_matrix[i][ii]) {
                unfilled_counter++;
              }
            }
         }

         if (unfilled_counter > 0) {
          matrix_complete = false;
          unfilled_counter = 0;
          } else {
          matrix_complete = true;
          }


      }
    }
/**
 * This functions checks to make sure that no tile adjacent to the cuurent 
 * coordinate has been filled or is out of bounds in the randomly gnereated direction. 
 * If there is a free adjacent tile, the path will move to the next unfilled tile. 
 * If there is not a free tile, the trap function will run to retrace the steps.  
 *
 *  */
    function check(){
        this.counter_direction = 0;
        var adj_tile_burned;
        this.flag_direction = false;

        while (!this.flag_direction && counter_direction < 4) {
            switch (this.direction) {
            case 0:
                if (this.y - 1 >= MIN - 1) {
                    adj_tile_burned = this.grid_matrix[y - 1][x];
                } else {
                    adj_tile_burned = true;
                }
                break;
            case 1:
                if (this.x + 1 <= MAX - 1) {
                    adj_tile_burned = this.grid_matrix[y][x + 1];
                } else {
                    adj_tile_burned = true;
                }
                break;
            case 2:
                if (this.y + 1 <= MAX - 1) {
                    adj_tile_burned = this.grid_matrix[y + 1][x];
                } else {
                    adj_tile_burned = true;
                }
                break;
            case 3:
                if (this.x - 1 >= MIN - 1) {
                    adj_tile_burned = this.grid_matrix[y][x - 1];
                } else {
                    adj_tile_burned = true;
                }

                break;
            default:
                adj_tile_burned = true;
                break;
            }

            if (adj_tile_burned) {
                this.direction++;
                counter_direction++;
                if (this.direction > 3) {
                    this.direction = 0;
                }
            } else if (!adj_tile_burned) {
                this.flag_direction = true;
            }
        }

        if (counter_direction > 3) {
            trap();
        } else if (flag_direction) {
            move();
        }
     }


/**
 * This function will save the path once (x,y) is equal to the end destination (0,0)
 * this function will ensure that the path is saved only once and the counter will be transfered over to record the steps taken 
 * 
 */
    function savePath(){
        if (this.x == this.x_B && this.y == this.y_B && !this.solution_saved) {
            for (var i = 0; i < this.path_matrix.length; i++) {
                for (var ii = 0; ii < this.path_matrix[i].length; ii++) {
                    this.solution_matrix[i][ii] = this.path_matrix[i][ii];
                }
            }
            this.solution_counter = this.grid_counter;
            this.solution_saved = true;
        }

    }
/**
 * This function is run when all tiles adjacent to the current coordinate have been filled or stepped into. 
 * The function willtrace the path backwards once. 
 *
 */
    function trap(){
      if (this.grid_counter > 0) {
            this.grid_counter--;
            this.x = this.path_matrix[this.grid_counter][0];
            this.y = this.path_matrix[this.grid_counter][1];
        } else {
            this.x = this.path_matrix[this.grid_counter][0];
            this.y = this.path_matrix[this.grid_counter][1];
        }
      
    } 
/**
 * This function assigns the next move according to the variable direction.
 * there are 4 possible cases: North, South, East, or West. 
 */
    function move(){
      switch (direction) {
        case 0:
            North();
            break;
        case 1:
            East();
            break;
        case 2:
            South();
            break;
        case 3:
            West();
            break;
        default:
            trap();
            break;
        }
    }
/**
 * This function moves the coordinates UPWARD (north) one tile space while it: 
 *   - Assigns the boolean value of the grid values that are connecting to the adjacent matrix
 *   - adds a step to the grid counter.
 *   - Assigns the coordinates to the matrix that is keeping all the paths 
 */
    function North(){
        this.y--;
        this.grid_counter++;
        this.grid_matrix[y][x] = true;
        this.path_matrix[this.grid_counter][0] = x;
        this.path_matrix[this.grid_counter][1] = y;
        this.adj_matrix[(this.MAX * (y + 1)) + x][(this.MAX * y) + x] = true;
        this.adj_matrix[(this.MAX * y) + x][(this.MAX * (y + 1)) + x] = true;
    }
/**
 * This function moves the coordinates DOWNWARD(south) one tile space while it: 
 *   - Assigns the boolean value of the grid values that are connecting to the adjacent matrix
 *   - adds a step to the grid counter.
 *   - Assigns the coordinates to the matrix that is keeping all the paths 
 */
    function South(){
        this.y++;
        this.grid_counter++;
        this.grid_matrix[y][x] = true;
        this.path_matrix[this.grid_counter][0] = x;
        this.path_matrix[this.grid_counter][1] = y;

        this.adj_matrix[(this.MAX * y) + x][(this.MAX * (y - 1)) + x] = true;
        this.adj_matrix[(this.MAX * (y - 1)) + x][(this.MAX * y) + x] = true;
    }
/**
 * This function moves the coordinates RIGHT(East) one tile space while it: 
 *   - Assigns the boolean value of the grid values that are connecting to the adjacent matrix
 *   - adds a step to the grid counter.
 *   - Assigns the coordinates to the matrix that is keeping all the paths 
 */
    function East(){
        this.x++;
        this.grid_counter++;
        this.grid_matrix[y][x] = true;
        this.path_matrix[this.grid_counter][0] = x;
        this.path_matrix[this.grid_counter][1] = y;

        this.adj_matrix[(this.MAX * y) + (x - 1)][(this.MAX * y) + x] = true;
        this.adj_matrix[(this.MAX * y) + x][(this.MAX * y) + (x - 1)] = true;

    }
/**
 * This function moves the coordinates LEFT (West) one tile space while it: 
 *   - Assigns the boolean value of the grid values that are connecting to the adjacent matrix
 *   - adds a step to the grid counter.
 *   - Assigns the coordinates to the matrix that is keeping all the paths 
 */
    function West(){
        this.x--;
        this.grid_counter++;
        this.grid_matrix[y][x] = true;
        this.path_matrix[this.grid_counter][0] = x;
        this.path_matrix[this.grid_counter][1] = y;

        this.adj_matrix[(this.MAX * y) + (x + 1)][(this.MAX * y) + x] = true;
        this.adj_matrix[(this.MAX * y) + x][(this.MAX * y) + (x + 1)] = true;

    }
/**
 * Test Matrices
 * 
 * */
function printMatrix(matrix){
  var line; 
    for (var i = 0; i < matrix.length; i++) {
      line += ("( " + matrix[i][0] + " , "+ matrix[i][1] + " )\n ");
    }
    return line;
}

  function printM(){
    return grid_matrix.toString();
  }
      
