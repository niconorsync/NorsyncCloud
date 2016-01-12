(function () {
 'use strict';
 angular.module('blog', ['ngRoute', 'blog.controllers']);
 function config ($locationProvider, $routeProvider) {
	 $locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
	 $routeProvider
	 .when('/', {
		 templateUrl: '../views/login.tpl.html',
		 controller: 'LoginController',
		 controllerAs: 'loginCtrl'
	 })
	 .when('/register', {
		 templateUrl: '../views/register.tpl.html',
		 controller: 'RegisterController',
		 controllerAs: 'registerCtrl'
	 })
	 .when('/dashboard', {
		 templateUrl: '../views/dashboard.tpl.html',
		 controller: 'DashboardController',
		 controllerAs: 'dashboardCtrl'
	 })
	  .when('/systems', {
		 templateUrl: '../views/systems.tpl.html',
		 controller: 'SystemController',
		 controllerAs: 'systemCtrl',
		 resolve: {
		 	permission: function () {
		 		if(!sessionStorage.getItem("token")){
               		window.location.href = '#/dashboard';
					window.location.reload();
				}
            },
		 }
	 })
	 .when('/posts', {
		 templateUrl: '../views/post-list.tpl.html',
		 controller: 'PostListCtrl',
		 controllerAs: 'postlist'
	 })
	 .when('/post/:postId', {
		 templateUrl: '../views/post-detail.tpl.html',
		 controller: 'PostDetailCtrl',
		 controllerAs: 'postdetail'
	 })
	 .when('/new', {
		 templateUrl: '../views/post-create.tpl.html',
		 controller: 'PostCreateCtrl',
		 controllerAs: 'postcreate'
	 });
 }
 angular.module('blog').config(config);
})();