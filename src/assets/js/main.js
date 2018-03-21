function ok() {
	document.getElementById('myFooter').innerHTML = '<div class="container">' +
			  	'<div class="row">' +
					'<div class="col-sm-4">' +
						'<h2>Latest Tweets</h2>' +
						'<hr>' +
						'<p><span class="fa fa-twitter"></span>' +
						'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>' +
						'<p>1 day ago</p>' +
						'<p><span class="fa fa-twitter"></span>' +
						'Itaque earum rerum hic tenetur a sapiente delectus <a href="#">info@mail.com</a> cumque nihil impedit.</p>' +
						'<p>2 days ago</p>' +
						'</div>' +
					'<div class="col-sm-4 navi">' +
						'<h2>Navigation</h2>' +
						'<hr>' +
						'<p><a href="index.html"><span class="fa fa-angle-double-right"></span> HOME</a></p>' +
						'<p><a href="aboutus.html"><span class="fa fa-angle-double-right"></span> ABOUT</a></p>' +
						'<p><a href="projects.html"><span class="fa fa-angle-double-right"></span> PROJECTS</a></p>' +
						'<p><a href="contact.html"><span class="fa fa-angle-double-right"></span> CONTACT</a></p>' +
						'</div>' +
					'<div class="col-sm-4">' +
						'<h2>Latest Works</h2>' +
						'<button type="button" class="btn btn-default" data-toggle="modal" data-target="#mymodal">' +
						'<div class="bg-2">' +
						'<div class="row">' +
					'<div class="col-sm-4">' +
						'<a href="#">' +
							'<img src="assets/images-main/work_1.jpg"' +
					 		'style="width:100%">' +
					 	'</a>' +
					'</div>' +
					'<div class="col-sm-4">' +
						'<a href="#">' +
					 		'<img src="assets/images-main/work_2.jpg"' +
							'style="width:100%">' +
						'</a>' +
					'</div>' +
					'<div class="col-sm-4">' +
						'<a href="#">' +
							'<img src="assets/images-main/work_3.jpg"' +
							'style="width:100%">' +
						'</a>' +
					'</div>' +
				'</div>' +
				'<div class="row">' +
					'<div class="col-sm-4">' +
						'<a href="#">' +
							'<img src="assets/images-main/work_4.jpg"' +
					 		'style="width:100%">' +
						'</a>' +
					'</div>' +
					'<div class="col-sm-4">' +
						'<a href="#">' +
							'<img src="assets/images-main/work_5.jpg" ' +
							'style="width:100%">' +
						'</a>' +
					'</div>' +
					'<div class="col-sm-4">' +
						'<a href="#">' +
							'<img src="assets/images-main/work_6.jpg"' +
							'style="width:100%">' +
						'</a>' +
					'</div>' +
				'</div>' +
				'</div>' +
			'</button>' +
	'</div>' +
	'</div>' +
	'<div class="modal fade" id="mymodal" role="dialog">' +
		'<div class="modal-dialog">' +
			'<div class="modal-content">' +
				'<div class="modal-header">' +
					'<button type="button" class="close" data-dismiss="modal">&times;</button>' +
					'<h2 class="modal-title text-center">Accounts</h2>' +
				'</div>' +
				'<div class="modal-body">' +
					'<img src="assets/images-main/accounts.jpg"' +
					 'style="width:100%">' +
					 '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
					  	'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
					  	'when an unknown printer took a galley of type and scrambled it to make a type specimen book.' +
					  	'It has survived not only five centuries, but also the leap into electronic typesetting.</p>' +
				'</div>' +
			'</div>' +
		'</div>' +
	'</div>' +
'</div>' +
'<form method="post">' +
	'<div class="container input-group">' +
		'<input type="email"  name="email" placeholder="Email">' +
		'<button type="submit" name="submit">SEND</button>' + 
	'</div>' +
'</form>' +
'<hr class="different">' +
'<p class="text-center">&copy; 2018 Accounts.All Rights Reserved.</p>' ; 
}