var database = [
	"Salt", "http://i.imgur.com/zbs5K8L.jpg",
	"Title1", "http://i.imgur.com/mCDFIkQ.jpg",
	"Title2", "http://i.imgur.com/9y26TRy.jpg",
	"Title3", "http://i.imgur.com/6P2QsQf.jpg",
	"Title4", "http://i.imgur.com/Cykwunr.jpg",
	"Title5", "http://i.imgur.com/cj5HZi6.jpg",
	"Title6", "http://i.imgur.com/QamRccm.jpg",
	"Title7", "http://i.imgur.com/A0ZoXLI.jpg",
	"Title8", "http://i.imgur.com/wqkYhYL.jpg",
	"Title9", "http://i.imgur.com/U8KIc7u.jpg",
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
