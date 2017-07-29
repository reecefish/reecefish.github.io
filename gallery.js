var database = [
	"Salt",                     "http://i.imgur.com/zbs5K8L.jpg",
	"Mental Infrastructure",    "http://i.imgur.com/mCDFIkQ.jpg",
	"Fluid",                    "http://i.imgur.com/9y26TRy.jpg",
	"Sketch 1",                 "http://i.imgur.com/6P2QsQf.jpg",
	"BlueJay",                  "http://i.imgur.com/Cykwunr.jpg",
	"Elephant Walking",         "http://i.imgur.com/cj5HZi6.jpg",
	"Swirl",                    "http://i.imgur.com/QamRccm.jpg",
	"The Other Side",           "http://i.imgur.com/A0ZoXLI.jpg",
	"Special Tea",              "http://i.imgur.com/wqkYhYL.jpg",
	"Openning Your Second Eye", "http://i.imgur.com/U8KIc7u.jpg",
];

const DATA_BLOCKS = 2;
var gallery_frame = document.getElementById("gallery-content");
var gallery_image = gallery_frame.getElementsByTagName("img")[0];
var current_index = 0;
var gallery_title = document.getElementById( "gallery-title" );

function set_source( i )
{
	console.log( "setting image to index " + i );
	gallery_title.innerHTML = database[i*DATA_BLOCKS+0];
	gallery_image.src = database[i*DATA_BLOCKS+1];
}

function load_picture( i )
{
	if( i < 0 || i >= database.length/2 ) return false;
	set_source( i );
	current_index = i;
	return true;
}

function next_picture()
{
	if( current_index+1 >= database.length/2 ) return false;
	current_index++;
	set_source( current_index );
	return true;
}

function previous_picture()
{
	if( current_index-1 < 0 ) return false;
	current_index--;
	set_source( current_index );
	return true;
}
