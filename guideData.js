var guidedb = [ "SOCIAL", "/",
"ABOUT", "about/",
"GALLERY", "gallery/",
];

const GUIDE_BLOCKS = 2;

function guide_load()
{
	console.log( "building guide" );
	var tag_guide = document.getElementById( "guide" );
	var tag_center = document.createElement( "center" );
	tag_guide.appendChild( tag_center );
	var found_inset = 0;
	for( i = 0; i < guidedb.length/GUIDE_BLOCKS; i++ )
	{
		//basic data implementation
		var tag_a = document.createElement( 'a' );
		tag_a.innerHTML = guidedb[i*GUIDE_BLOCKS+0];
		tag_a.href = guidedb[i*GUIDE_BLOCKS+1];

		//get sticky inset if on current page
		var indOf = window.location.pathname.indexOf( guidedb[i*GUIDE_BLOCKS+1] );
		if( indOf > -1 )
		{
			found_inset = i;
		}

		//finally append
		tag_center.appendChild( tag_a );
		tag_center.innerHTML += ' ';
	}

	//a fairly gross way to set inset if on landing page/no post-fix
	if( found_inset >= 0 && found_inset < guidedb.length/GUIDE_BLOCKS )
	{
		tag_guide.getElementsByTagName("a")[found_inset].className = "select";
	}
}

guide_load();
