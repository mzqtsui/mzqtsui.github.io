(function(){
  "use strict";
  var app = angular.module('MainApp', ['ngMaterial']);


  app.controller('AppCtrl', ['$scope', '$mdDialog', '$mdMedia',
    function($scope, $mdDialog, $mdMedia) {

    $scope.projects = [
      {
        name: 'Climbing Map',
        titleBold: 'Climbing',
        titleThin: 'Map',
        skills: 'HTML5 . SCSS . Knockout . Google Maps API . Uber Rides API',
        summary: 'Climbing Gyms in SF Area',
        img: 'img/neighbourhood_map.jpg',
        date: '2016',
        dialog: 'projects/project_dialog.tmpl.html',
        desc: 'A single-page web application using Knockout. The searchable webapp displays a Google Map of a few climbing gyms in the SF Bay Area. Users can click the listview or markers to see more information (including Uber pricing) on the selected gym.',
        links: [
          {
            caption: 'Repo',
            fa: 'fa-github',
            href: 'https://github.com/mzqtsui/frontend-nanodegree-map'
          },
          {
            caption: 'Demo',
            fa: 'fa-globe',
            href: 'https://mzqtsui.github.io/frontend-nanodegree-map/dist'
          }
        ]
      },
      {
        name: 'Time Bank',
        titleBold: 'Time',
        titleThin: 'Bank',
        skills: 'UX Design . Paper Prototyping',
        summary: 'UX Design Project',
        img: 'img/time.jpg',
        date: '2016',
        dialog: 'projects/project_dialog.tmpl.html',
        desc: 'What if time was a currency, and you could trade it for services?',
        links: [
          {
            caption: 'Read more on Medium',
            fa: 'fa-medium',
            href: 'https://medium.com/@matt.tsui/creating-a-time-bank-5a1a719e85f4'
          }
        ]
      },
      {
        name: 'Bugs & Baubles',
        titleBold: 'Bugs&',
        titleThin: 'Baubles',
        skills: 'HTML5 . SCSS . JavaScript',
        summary: 'Frogger Clone',
        img: 'img/bug_game.jpg',
        date: '2016',
        dialog: 'projects/project_dialog.tmpl.html',
        desc: 'A Frogger clone, with some gem collecting, developed using the best practices in Object Oriented JavaScript.',
        links: [
          {
            caption: 'Repo',
            fa: 'fa-github',
            href: 'https://github.com/mzqtsui/frontend-nanodegree-arcade-game'
          },
          {
            caption: 'Play',
            fa: 'fa-globe',
            href: 'https://mzqtsui.github.io/frontend-nanodegree-arcade-game'
          }
        ]
      },
      {
        name: 'Material Red',
        summary: 'An experiment in SVG',
        img: 'img/material_red.jpg',
        date: '2016',
        dialog: 'projects/material_red_dialog.tmpl.html'
      },
      {
        name: 'Upscale Markets',
        summary: 'Grocery Shopping Prototype',
        img: 'img/upscale.jpg',
        date: '2016',
        dialog: 'projects/upscale_markets_dialog.tmpl.html'
      },
      {
        name: 'Palette Website',
        summary: 'Redesign, Development, Illustration',
        img: 'img/palette.jpg',
        date: '2015',
        dialog: 'projects/palette_site_dialog.tmpl.html'
      },
      {
        name: 'PaletteApp2',
        summary: 'Companion app for Palette hardware',
        img: 'img/paletteapp2.jpg',
        date: '2015',
        dialog: 'projects/paletteapp_dialog.tmpl.html'
      },
      {
        name: 'FastCards',
        summary: 'Android flash card app',
        img: 'img/fastcards_logo.jpg',
        date: '2015',
        dialog: 'projects/fastcards_dialog.tmpl.html'
      },
      {
        name: 'Slate',
        summary: 'A 3D Projection-Mapped Unity Game',
        img: 'img/slate.jpg',
        date: '2014',
        dialog: 'projects/slate_dialog.tmpl.html'
      }
    ];

    $scope.viewProject = function(ev, p){
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
        controller: DialogController,
        templateUrl: p.dialog,
        parent: angular.element(document.body),
        targetEvent: ev,
        locals: {
          project: p
        },
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      });
      $scope.$watch(function() {
        return $mdMedia('xs');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    }

  }]);


  function DialogController($scope, $mdDialog, project) {
    $scope.project = project;

    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }

  DialogController.$inject = ['$scope', '$mdDialog', 'project'];

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['MainApp']);
  });

})();
