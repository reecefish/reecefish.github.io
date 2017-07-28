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

var gallery_frame = document.getElementById("gallery-content");
var gallery_image = gallery_frame.getElementsByTagName("img")[0];
var current_index = 0;
var gallery_title = document.getElementById( "gallery-title" );

function set_title( i )
{
	gallery_title.innerHTML = database[i*2+0];
}

function load_picture( i )
{
	if( i < 0 || i >= database.length/2 ) return false;
	gallery_image.src = database[i*2+1];
	current_index = i;
	set_title( i );
	return true;
}

function next_picture()
{
	if( current_index+1 >= database.length/2 ) return false;
	current_index++;
	gallery_image.src = database[current_index*2+1];
	set_title( current_index );
	return true;
}

function previous_picture()
{
	if( current_index-1 < 0 ) return false;
	current_index--;
	gallery_image.src = database[current_index*2+1];
	set_title( current_index );
	return true;
}
