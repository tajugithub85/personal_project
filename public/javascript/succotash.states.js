angular.module('succotash').config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'home',
      url: '/',
      templateUrl: 'partials/home.html',
    })
    .state({
      name: 'underConstruction',
      url: '/under-construction',
      templateUrl: 'partials/under-construction.html',
    })
    .state({
      name: 'productLineNutri',
      url: '/productline-nutri',
      templateUrl: 'partials/productline-nutri.html',
    })
    .state({
      name: 'productLineVita',
      url: '/productline-vita',
      templateUrl: 'partials/productline-vita.html',
    })
    .state({
      name: 'productLineMultivita',
      url: '/productline-multivita',
      templateUrl: 'partials/productline-multivita.html',
    })
    .state({
      name: 'productDetail',
      url: '/products/:id/:ma',
      params: {
        id: {value: '1'},
      },
      templateUrl: 'partials/product-detail.html',
      controller: function($scope, $stateParams,$location,$anchorScroll) {
        $scope.productId = parseInt($stateParams.id) || 1;
        $scope.activeTab = $stateParams.ma || 'Details';
        if ($stateParams.ma == 'Reviews') $location.hash('panelTabs');
        $anchorScroll();
      },
    })
    .state({
      name: 'cartSummary',
      url: '/cart-summary',
      templateUrl: 'partials/cart.html',
    })
    .state({
      name: 'checkout',
      url: '/checkout',
      templateUrl: 'partials/checkout.html',
    })
    .state({
      name: 'searchResult',
      url: '/search/:term',
      templateUrl: 'partials/searchresult-vita.html',
      controller: 'SearchCtrl',
      controllerAs: 'vm',
    })
    .state({
      name: 'orderConfirmation',
      url: '/orderConfirmation',
      templateUrl: 'partials/orderConfirmation.html',
    });

  function getEditDistance(a, b){
    // https://gist.github.com/andrei-m/982927
    // Copyright (c) 2011 Andrei Mackenzie
    // MIT License
    if(a.length == 0) return b.length; 
    if(b.length == 0) return a.length; 

    var matrix = [];

    // increment along the first column of each row
    var i;
    for(i = 0; i <= b.length; i++){
      matrix[i] = [i];
    }

    // increment each column in the first row
    var j;
    for(j = 0; j <= a.length; j++){
      matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for(i = 1; i <= b.length; i++){
      for(j = 1; j <= a.length; j++){
        if(b.charAt(i-1) == a.charAt(j-1)){
          matrix[i][j] = matrix[i-1][j-1];
        } else {
          matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
            Math.min(matrix[i][j-1] + 1, // insertion
              matrix[i-1][j] + 1)); // deletion
        }
      }
    }

    return matrix[b.length][a.length];
  };
  $urlRouterProvider.otherwise('/');
});
