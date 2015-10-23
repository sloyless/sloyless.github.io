app = angular.module 'portfolio', [
  'ngSanitize', 
  'ngAnimate', 
  'projectDescription', 
  'projectCarousel'
]

app.controller 'ProjectController', ['$http', ($http) ->
  projectData = @
  projectData.projects = []
  $http.get('/data/projects.json').success (data) ->  
    data.sort
    projectData.projects = data

  projectData._Index = 0
  projectData.isActive = (index) ->
    projectData.projects[index] is index

  projectData.showProject = (index) ->
    projectData._Index = index
    projectData.selected = projectData.projects[index]
    console.log(index + ' is now active')
  false
]

jQuery(document).ready ($) ->
  $(window).bind "load", ->
    do $('#project-carousel').carouselize