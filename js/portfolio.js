(function(){jQuery(document).ready(function($){var t;return t=[],$.getJSON("/data/projects.json",function(t){return $.each(t.projects,function(t,e){var r;return r='<div class="slide" data-project-id="'+e.projectID+'"><img src="'+e.thumb+'" alt="'+e.title+'" /><span>'+e.title+"</span></div>",$(r).appendTo("#project-carousel .strip")})}),$(window).bind("load",function(){return $("#project-carousel").carouselize()})})}).call(this);