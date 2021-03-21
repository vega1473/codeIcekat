app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [
    {
    icon: 'img/move.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  },
{
    icon: 'img/shutterbugg.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  },
  {
    icon: 'img/gameboard.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  },
  {
    icon: 'img/forecast.jpg',
    title: 'Forecast',
    developer: 'Armando P.',
    price: 1.99
  },
    {
    icon: 'img/getleads.jpg',
    title: 'Get Leads',
    developer: 'CloudLab',
    price: 3.99
  },
      {
    icon: 'img/socialweb.jpg',
    title: 'SocialWeb',
    developer: 'Spider Geek',
    price: 0.99
  }
];

}]);
