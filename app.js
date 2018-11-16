'use strict';

const angular = require('angular');
const express = require('express');
const app = express();
let port = process.env.port || 3000;
app.get('/', (req, res) => res.send('Hello World'));
app.listen(port, () => console.log(`Server is running on port ${port}`));

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
