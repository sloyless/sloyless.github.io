// Generated by CoffeeScript 1.9.3
(function() {
  var app;

  app = angular.module('portfolio', ['ngSanitize']);

  app.controller('ProjectController', [
    '$http', function($http) {
      var projectData;
      projectData = this;
      projectData.projects = [];
      $http.get('/data/projects.json').success(function(data) {
        return projectData.projects = data;
      });
      return false;
    }
  ]);

  app.controller('SelectedProjectController', function() {
    this.tab = 1;
    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };
    return this.setTab = function(setTab) {
      return this.tab = setTab;
    };
  });

  app.directive('projectDescription', function() {
    return {
      restrict: 'E',
      templateUrl: '/partials/project-description.html'
    };
  });

  jQuery(document).ready(function($) {
    return $(window).bind("load", function() {
      return $('#project-carousel').carouselize();
    });
  });

}).call(this);


//# sourceMappingURL=portfolio.js.map