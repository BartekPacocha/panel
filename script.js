var app = angular.module("myapp", []);
app.controller("ListController", ['$scope', function($scope) {
	$scope.data = [
	{
		'kolumna1':'Treść kolumny 1',
		'kolumna2':'Treść kolumny 2',
		'kolumna3':'Treść kolumny 3',
		'kolumna4':'Treść kolumny 4',
		'id':'0'
	},
	{
		'kolumna1':'Treść kolumny 1',
		'kolumna2':'Treść kolumny 2',
		'kolumna3':'Treść kolumny 3',
		'kolumna4':'Treść kolumny 4',
		'id':'1'
	},
	{
		'kolumna1':'Treść kolumny 1',
		'kolumna2':'Treść kolumny 2',
		'kolumna3':'Treść kolumny 3',
		'kolumna4':'Treść kolumny 4',
		'id':'2'
	},
    {
        'kolumna1':'Treść kolumny 1',
        'kolumna2':'Treść kolumny 2',
        'kolumna3':'Treść kolumny 3',
        'kolumna4':'Treść kolumny 4',
        'id':'3'
    },
    {
        'kolumna1':'Treść kolumny 1',
        'kolumna2':'Treść kolumny 2',
        'kolumna3':'Treść kolumny 3',
        'kolumna4':'Treść kolumny 4',
        'id':'4'
    },
    {
        'kolumna1':'Treść kolumny 1',
        'kolumna2':'Treść kolumny 2',
        'kolumna3':'Treść kolumny 3',
        'kolumna4':'Treść kolumny 4',
        'id':'5'
    }];

	$scope.editingData = {};
    
    for (var i = 0, length = $scope.data.length; i < length; i++) {
      $scope.editingData[$scope.data[i].id] = false;
    }


    $scope.modify = function(data){
        $scope.editingData[data.id] = true;
    };


    $scope.update = function(data){
        $scope.editingData[data.id] = false;
    };

    $scope.delete = function(x){
    	$scope.data.splice(x, 1);
    };

    $scope.add = function(){
    	var newElement = {
    		'kolumna1':$scope.addNew_kolumna1,
    		'kolumna2':$scope.addNew_kolumna2,
    		'kolumna3':$scope.addNew_kolumna3,
    		'kolumna4':$scope.addNew_kolumna4
    	};
    	$scope.data.push(newElement);
    	$scope.addNew_kolumna1 = '';
    	$scope.addNew_kolumna2 = '';
    	$scope.addNew_kolumna3 = '';
    	$scope.addNew_kolumna4 = '';
    }
}]);