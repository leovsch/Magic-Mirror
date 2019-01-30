App.controller("ClockCtrl", ['$scope', '$interval', 'dateFilter', function ($scope,$interval,dateFilter) {

  updateClock = function () {
    $scope.clock = dateFilter(new Date(), 'HH : mm');
  }

  updateDate = function() {
    $scope.date = dateFilter(new Date(), 'EEEE d MMMM y');
  }

  updateClock();
  updateDate();

  $interval(updateClock, 1000);
  $interval(updateDate, 1000);
}]);