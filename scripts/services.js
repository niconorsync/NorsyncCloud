(function () {
 'use strict';
 angular.module('blog.services', ['ngResource']);
 function Post ($resource, BaseUrl) {
 	return $resource(BaseUrl + '/posts/:postId',{ postId: '@_id' });
 }
 function Comment ($resource, BaseUrl) {
 	return $resource(BaseUrl + '/comments/:commentId', { commentId: '@_id' });
 }
 function User ($resource, BaseUrl) {
 	return $resource(BaseUrl + '/users/:userId', { userId: '@_id' });
 }

 function LoginService ($resource, BaseUrl) {
 	console.log( "url service: " + BaseUrl);
 	return $resource(BaseUrl + '/auth/login/', {}, { query: { method: "POST" }  });
 }

 function RegisterService ($resource, BaseUrl) {
 	console.log( "url service: " + BaseUrl);
 	return $resource(BaseUrl + '/auth/signup/', {}, { query: { method: "POST" }  });
 }


 function DashboardService ($resource, BaseUrl) {
 	console.log( "url service: " + BaseUrl);
 	return $resource(BaseUrl + '/auth/signup/', {}, { query: { method: "POST" }  });
 }

  function SystemService ($resource, BaseUrl) {
 	console.log( "url service: " + BaseUrl);
 	return $resource(BaseUrl + '/auth/signup/', {}, { query: { method: "POST" }  });
 }

 function UserLogService($resource, BaseUrl){
 	var sdo = {
    	isLogged: false,
   		username: '',
   		token: ''
  	};
  	return sdo;
 }

 angular.module('blog.services').constant('BaseUrl', 'http://54.213.213.146:3000')
 .factory('Post', Post).factory('Comment', Comment).factory('User', User).factory('LoginService', LoginService)
 .factory('RegisterService', RegisterService).factory('DashboardService', DashboardService)
 .factory('RegisterService', RegisterService).factory('SystemService', SystemService).factory('UserLogService', UserLogService);
})();