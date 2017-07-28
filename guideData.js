var guidedb = [ "SOCIAL", "index.html",
"ABOUT", "about.html",
"GALLERY", "gallery.html",
];

function guide_load()
{
	var tag_guide = document.getElementById( "guide" );
	var tag_center = document.createElement( "center" );
	tag_guide.appendChild( tag_center );
	for( i = 0; i < guidedb.length/2; i++ )
	{
		var tag_a = document.createElement( 'a' );
		tag_a.innerHTML = guidedb[i*2+0];
		tag_a.href = guidedb[i*2+1];
		tag_center.appendChild( tag_a );
		tag_center.innerHTML += ' ';
	}
}

guide_load();
