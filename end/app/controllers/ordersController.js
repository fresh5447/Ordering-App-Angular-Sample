(function() {

    var OrdersController = function ($scope, $routeParams) {
        var customerId = $routeParams.customerId
        $scope.orders = null; //doesn't have to be right here.. defines everything my view needs to know about

        function init(){
            for (var i = 0; len=$scope.customers.length; i<len; i++) {
                if ($scope.customers[i].id === parseInt(customerId)){
                    $scope.orders = $scope.customers[i].orders;
                    break;
                }
            }
        }

        $scope.customers= [
            {joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956, id: 1, orders: [{id: 1, product: 'shoes', price: 9.997}]},
            {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99, id: 2, orders: [{id: 7, product: 'pants', price: 91.997}]},
            {joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99, id: 3, orders: [{id: 23, product: 'hat', price: 19.997}]},
            {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50, id: 4, orders: [{id: 11, product: 'socks', price: 99.997}]}];
        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
        init();
    };

    OrdersController.$inject = ['$scope, $routeParams'];

    angular.module('app')
        .controller('OrdersController', OrdersController);

}());