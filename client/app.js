var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list.html',
			controller:'productController'
		})
		.when('/products/list', {
			templateUrl:'templates/list.html',
			controller:'productController'
		})
		.when('/products/create', {
			templateUrl:'templates/add.html',
			controller:'productController'
		})
		.when('/products/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'productController'
		})
		.when('/products/:id/show', {
			templateUrl:'templates/show.html',
			controller:'productController'
		});
});