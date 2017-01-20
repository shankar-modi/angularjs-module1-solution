(function (){

'use strict';

var app = angular.module("LunchCheck", []);

app.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){

	$scope.message = "";
	$scope.color="none";
	
	$scope.checkItems = function(){
		var lunchList = $scope.lunchList;
		var itemCounter=0;
		
		itemCounter = itemCount(lunchList);
		if(itemCounter == 0){
			$scope.color="red";
			$scope.message = "Please enter data first";
			return;
		}
		if(itemCounter <= 3){
			$scope.color="green";
			$scope.message = "Enjoy!";
			return;
		}
		$scope.color="green";
		$scope.message = "Too much!";
		return;

	};

	function itemCount (lunchList){

		if(lunchList === undefined || lunchList == ""){
			return 0;
		}
		var lunchItemArr = lunchList.split(",");
		var count = 0;
		for (var i = 0; i < lunchItemArr.length; i++) {
			if(lunchItemArr[i] != " " && lunchItemArr[i].trim() !=""){
				count++;
			}  
		}
		return count;
	}
};

})();