/**
 * This JS file is the file that asisgns the images to the each div that makdes up the paths accordingly 
 */



/**
 * [tile_90] is represetented with a value of 0 in the switch statements 
 * [tile_nub]is represetented with a value of 1 in the switch statements 
 * [tile_t]is represetented with a value of 2 in the switch statements 
 * [tile_line]is represetented with a value of 3 in the switch statements 
 *
 * @type {Array} [of images]
 *
 *  [tile_cross] is represetented with a value of 5 in the switch statements 
 *@type {String} [image]
 */
var tile_90 = ["../img/tile_90_0.jpg","../img/tile_90_1.jpg","../img/tile_90_2.jpg","../img/tile_90_3.jpg" ];
var tile_nub =["../img/tile_nub_0.jpg","../img/tile_nub_1.jpg","../img/tile_nub_2.jpg","../img/tile_nub_3.jpg" ];
var tile_t = ["../img/tile_t_0.jpg","../img/tile_t_1.jpg","../img/tile_t_2.jpg","../img/tile_t_3.jpg" ];
var tile_line = ["../img/tile_line_0.jpg","../img/tile_line_1.jpg"];
var tile_cross = "../img/tile_cross.jpg";
/**
 * Following varaibles are counters assigned to each array to loop thorugh array 
 */
 // this variable assigns which of the 5 types of tile it is . 
var tile_90_counter;
var tile_nub_counter;
var tile_t_counter; 
var tile_line_counter; 
var tile_cross_counter;

/**
 * This function intializes all the coutners to zero;
 * 
 */
function initTileCounters(){
	this.tile_90_counter = 0;
	this.tile_nub_counter = 0;
	this.tile_t_counter = 0; 
	this.tile_line_counter = 0; 
	this.tile_cross_counter = 0;
}

/**
 * This function that loops through, according to the type of tile, the possible "directions" the tile is pointing
 * to. It will make the tile appear to turn 90 degrees with every event trigger. 
 * 
 * @param {Number} img [the number assigned to each tile];
 */
function rotate(img, til){
	this.image = document.getElementById(img);
	var tile = parseInt(til);
	switch(til){
	case 0: //tile_90
		this.tile_90_counter++;
		if(this.tile_90_counter> 3){
			this.tile_90_counter = 0;
		}

		image.alt = "Right angle tile"
		image.src = this.tile_90[tile_90_counter];

	break;
	case 1: //this.tile_nub
		this.tile_nub_counter++;
		if(this.tile_nub_counter> 3){
			this.tile_nub_counter = 0;
		}
		image.alt = "Nub tile"
		image.src = this.tile_nub[tile_nub_counter];
	break;
	case 2: //tile_t
		this.tile_t_counter++;
		if(this.tile_t_counter> 3){
			this.tile_t_counter = 0;
		}
		image.alt = "Three-prong tile"
		image.src = this.tile_t[tile_t_counter];
	break;
	case 3: //tile_line
		this.tile_line_counter++;
		if(this.tile_line_counter> 1){
			this.tile_line_counter=0;
		}
		image.alt = "Line tile"
		image.src = this.tile_line[tile_line_counter];
	break;
	case 4:
		image.alt = "Cross tile"
		image.src =  tile_cross;
	break;
	default:
	break;
	}
}
