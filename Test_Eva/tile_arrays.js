
var tile(src, alt) = {
	this.src = src;
	this.alt = alt;
	this.width = 225;
	this.height = 225;
}

var tile_90 = ["tile_90_0.jpg","tile_90_1.jpg","tile_90_2.jpg","tile_90_3.jpg" ];
var tile_nub =["tile_nub_0.jpg","tile_nub_1.jpg","tile_nub_2.jpg","tile_nub_3.jpg" ];
var tile_t = ["tile_t_0.jpg","tile_t_1.jpg","tile_t_2.jpg","tile_t_3.jpg" ];
var tile_line = ["tile_line_0.jpg","tile_line_1.jpg"];
var tile_cross = "tile_cross.jpg";

var tile;
var tile_90_counter;
var tile_nub_counter;
var tile_t_counter; 
var tile_line_counter; 
var tile_cross_counter;

function initTileCounters(){
	tile_90_counter = 0;
	tile_nub_counter = 0;
	tile_t_counter = 0; 
	tile_line_counter = 0; 
	tile_cross_counter = 0;
}

function rotate(){
	switch(tile)
	case 0: //tile_90
		tile_90_counter++;
		displayTile();
		if(tile_90_counter> 3){
			tile_90_counter = 0;
		}
	break;
	case 1: //tile_nub
		tile_nub_counter++;
		displayTile();
		if(tile_nub_counter> 3){
			tile_nub_counter = 0;
		}
	break;
	case 2: //tile_t
		tile_t_counter++;
		displayTile();
		if(tile_t_counter> 3){
			tile_t_counter = 0;
		}
	break;
	case 3: //tile_line
		tile_line_counter++;
		displayTile();
		if(tile_line_counter> 1){
			tile_line_counter=0;
		}
	break;
	case 4:
		displayTile();
	break;
	default:
	break;
}

function displayTile(){
	switch(tile)
	case 0: //tile_90
		//disaplay image at tile_90[tile_90_counter];
		
		break;
	case 1: //tile_nub
		//disaplay image at tile_nub[tile_nub_counter];
		
		break;
	case 2: //tile_t
		//disaplay image at tile_t[tile_t_counter];
		
		break;
	case 3: //tile_line
		//disaplay image at tile_line[tile_line_counter];
		break;
	case 4: //tile_cross
		//disaplay image tile_cross;
		break;		
	default:
		break;
}
