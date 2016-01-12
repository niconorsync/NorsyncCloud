(function () {
 'use strict';

 angular.module('blog.controllers', ['blog.services'])
 	.controller('PostListCtrl', PostListCtrl)
    .controller('PostDetailCtrl', PostDetailCtrl)
    .controller('LoginController', LoginController)
    .controller('RegisterController', RegisterController)
    .controller('DashboardController', DashboardController)
    .controller('SystemController', SystemController);

 function PostListCtrl (Post) {
 this.posts = Post.query();
 }

 function PostDetailCtrl ($routeParams, Post, Comment) {
 	this.post = {};
 	this.comments = {};
 	this.user = {};
 	var self = this; // Para guardar la referencia
	Post.query({ id: $routeParams.postId })
	.$promise.then(
		 //Success
		function (data){
			self.post = data[0];
			self.user = User.query({ id: self.user.userId });
		},
	 	
	 	//Error
	 	function (error){
	 		console.log(error);
	 	}
	 );


	 this.comments = Comment.query({ postId: $routeParams.postId });
}


	function PostCreateCtrl (Post) {
	 	var self = this;
	 	this.create = function() {
		 	Post.save(self.post);
	 	}
	}

	//Controller login page
	function LoginController(LoginService){

		console.log('login page');

		$('#myForm').validator();

		this.submitCtr = function(){
			console.log($('#username').val() + ' ' + $('#password').val());
			LoginService.query({ username: $('#username').val() , password: $('#password').val() }, 
				function(data){

					sessionStorage.setItem("name", data.user.data.first_name + " " + data.user.data.last_name);
					sessionStorage.setItem("userId", 1);
					sessionStorage.setItem("token", data.token);

					console.log("resultado del login: " + data.user.data.first_name);
					window.location.href = '#/dashboard';
					window.location.reload();
					
			});
		};

	}

	//Controller register page 
	function RegisterController(RegisterService){

		console.log('register page');

		$('#myForm').validator();
		this.register = {};
		this.showMsg = false;
		
		this.submitCtr = function(){

			var name = $('#name').val();
			var lastName = $('#lastName').val();
			var username = $('#username').val();
			var inputPassword = $('#inputPassword').val();

			this.showMsg = RegisterService.query({ first_name: name, last_name: lastName, email: username, password: inputPassword }, 
				function(data){
					console.log(data.result);
					if(data.result == "ok")
						return true;

				});
			
		};

	}

	// Controlador de dashboard
	function DashboardController(LoginService){

		console.log('Dashboard page');

		$('#myForm').validator();

		this.submitCtr = function(){
			console.log($('#username').val() + ' ' + $('#password').val());
			LoginService.query({ username: $('#username').val() , password: $('#password').val() }, 
				function(data){
					console.log("resultado del login: " + data.result);
					
			});
		};

	}

	// Controlador de dashboard
	function SystemController(SystemService){

        this.userName = sessionStorage.getItem("name");
		$('#example').dataTable({
		  "lengthChange": false,
		  "searching": false,
		  "scrollY":  true
		});


		console.log('System page');
		$('.selectpicker').selectpicker({
		  size: 4
		});

		$('.filterstatus').selectpicker({
		  size: 4
		});

		$('.filterInstance').selectpicker({
		  size: 4
		});


		
		



	}





 
})();