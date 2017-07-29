var guidedb = [ "SOCIAL", "index.html",
"ABOUT", "about.html",
"GALLERY", "gallery.html",
];

function guide_load()
{
	var tag_guide = document.getElementById( "guide" );
	var tag_center = document.createElement( "center" );
	tag_guide.appendChild( tag_center );
	var found_inset = false;
	for( i = 0; i < guidedb.length/2; i++ )
	{
		//basic data implementation
		var tag_a = document.createElement( 'a' );
		tag_a.innerHTML = guidedb[i*2+0];
		tag_a.href = guidedb[i*2+1];

		//get sticky inset if on current page
		var indOf = window.location.pathname.indexOf( guidedb[i*2+1] );
		if( indOf > -1 )
		{
			found_inset = true;
			tag_a.className = "select";
		}

		//finally append
		tag_center.appendChild( tag_a );
		tag_center.innerHTML += ' ';
	}

	//a fairly gross gimpy way to set inset for the website
	if( !found_inset )
	{
		tag_guide.getElementByTagName("a")[0].className = "select";
	}
}

guide_load();
