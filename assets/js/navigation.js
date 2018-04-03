		function na() {
		document.getElementById('diff').innerHTML = '<li><a href="#mail"><span class="fa fa-envelope"></span> info@example.com</a></li>' +
		'<li style="float:right"><a href="#linkedin"><span class="fa fa-linkedin"></span></a></li>' +
		'<li style="float:right"><a href="#pinterest"><span class="fa fa-pinterest"></span></a></li>' +
		'<li style="float:right"><a href="#twitter"><span class="fa fa-twitter"></span></a></li>' +
		'<li style="float:right"><a href="#facebook"><span class="fa fa-facebook"></span></a></li>';

		document.getElementById('short').innerHTML = 		'<div class="navbar-header">' +
			'<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mynavbar">' +
				'<span class="icon-bar"></span>' +
				'<span class="icon-bar"></span>' +
				'<span class="icon-bar"></span>' +
			'</button>' +
			'<a class="navbar-brand"><span class="first">A</span>CCOUNTS</a>' +
		'</div>' +
		'<div class="collapse navbar-collapse" id="mynavbar">' +
			'<ul class="nav navbar-nav navbar-right">' +
				'<li><a href="index.html">HOME</a></li>' +
				'<li><a href="aboutus.html">ABOUT</a></li>' +
				'<li class="dropdown">' +
					'<a href="#pages" class="dropdown-toggle" data-toggle="dropdown">PAGES<span class="caret"></span></a>' +
					'<ul class="dropdown-menu">' +
						'<li><a href="#shortcodes">SHORT CODES</a></li>' +
						'<li><a class="yo" href="#webicons">WEB ICONS</a></li>' +
					'</ul>' +
				'</li>' +
				'<li><a href="projects.html">PROJECTS</a></li>' +
				'<li><a href="contact.html">CONTACT</a></li>' +
			'</ul>' +
		'</div>' ;
}