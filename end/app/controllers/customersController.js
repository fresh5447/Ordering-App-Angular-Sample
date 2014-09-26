//Option 1

/*app.controller('CustomersController', function ($scope) {
 $scope.sortBy = 'name';
 $scope.reverse = false;

 $scope.customers= [{joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99},{joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99}, {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}];
 $scope.doSort = function(propName) {
 $scope.sortBy = propName;
 $scope.reverse = !$scope.reverse;
 };
 });*/

//Option 2

/*(function() {

 angular.module('customersApp')
 .controller('CustomersController', function ($scope) {
 $scope.sortBy = 'name';
 $scope.reverse = false;

 $scope.customers= [{joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99},{joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99}, {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}];
 $scope.doSort = function(propName) {
 $scope.sortBy = propName;
 $scope.reverse = !$scope.reverse;
 };
 });

 }());*/

//Option 3

(function() {

    var CustomersController = function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers= [
            {joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956, id: 1, orders: [{id: 1, product: 'shoes', price: 9.997}]},
            {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99, id: 2, orders: [{id: 7, product: 'pants', price: 91.997}]},
            {joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99, id: 3, orders: [{id: 23, product: 'hat', price: 19.997}]},
            {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50, id: 4, orders: [{id: 11, product: 'socks', price: 99.997}]}
        ];

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };

    CustomersController.$inject = ['$scope'];

    angular.module('app')
        .controller('CustomersController', CustomersController);

}());