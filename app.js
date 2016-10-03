//setup angular
var app = angular.module('scotch-todo', ['ionic']);
app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('scotch-todo');
  });