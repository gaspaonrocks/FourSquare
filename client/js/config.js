'use strict';

angular.module('FourSquare').config(function ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
      resolve: {}
    })
    .state('search', {
      url: '/search',
      component: 'search',
      resolve: {}
    })

  $urlRouterProvider.otherwise('/');
});