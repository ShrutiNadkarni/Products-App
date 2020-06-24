myApp.controller('productController', function($scope,$route,$routeParams,$http){
  
    //Get all products
	$scope.getProducts = function(){
		$http.get('/api/products/').then(function(response){
            console.log("Inside getProducts function");
			$scope.products = response.data;
		});
    };
    
    //Show or view particular product
	$scope.showProduct = function(){
		var id = $routeParams.id;
		$http.get('/api/products/'+ id).then(function(response){
            console.log("Inside showProduct function");
			$scope.product = response.data;
		});
    };
    
    //Add new Product
	$scope.addProduct = function(){
		//var id = $routeParams.id;
		$http.post('/api/products/', $scope.product).then(function(response){
            //$scope.product = response.data;
            console.log("Inside addProduct funtion");
            window.location.href = '/';
		});
	};
    
    //Update Product
	$scope.updateProduct = function(){
		var id = $routeParams.id;
		$http.put('/api/products/'+ id , $scope.product).then(function(response){
            //$scope.product= response.data;
            console.log("Inside updateProduct funtion");
            window.location.href = '/';            
		});
    };
    

    //Delete Product
	$scope.deleteProduct = function(id){
		var id = id;
		$http.delete('/api/products/'+ id).then(function(response){
            console.log("Inside deleteProduct funtion");
			$route.reload();
		});
	};
	
});