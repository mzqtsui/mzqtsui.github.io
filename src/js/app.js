(function(){
  "use strict";
  var app = angular.module('MainApp', ['ngMaterial']);


  app.controller('AppCtrl', ['$scope', '$mdDialog', '$mdMedia',
    function($scope, $mdDialog, $mdMedia) {

    $scope.projects = [
      {
        name: 'Neighbourhood Map',
        desc: 'Climbing Gyms in SF Area',
        img: 'img/neighbourhood_map.jpg',
        date: '2016',
        dialog: 'projects/neighbourhood_map.tmpl.html'
      },
      {
        name: 'Time Bank',
        desc: 'UX Design Project',
        img: 'img/time.jpg',
        date: '2016',
        dialog: 'projects/timebank_dialog.tmpl.html'
      },
      {
        name: 'Bugs & Baubles',
        desc: 'Frogger Clone',
        img: 'img/bug_game.jpg',
        date: '2016',
        dialog: 'projects/frogger_dialog.tmpl.html'
      },
      {
        name: 'Material Red',
        desc: 'An experiment in SVG',
        img: 'img/material_red.jpg',
        date: '2016',
        dialog: 'projects/material_red_dialog.tmpl.html'
      },
      {
        name: 'Upscale Markets',
        desc: 'Grocery Shopping Prototype',
        img: 'img/upscale.jpg',
        date: '2016',
        dialog: 'projects/upscale_markets_dialog.tmpl.html'
      },
      {
        name: 'Palette Website',
        desc: 'Redesign, Development, Illustration',
        img: 'img/palette.jpg',
        date: '2015',
        dialog: 'projects/palette_site_dialog.tmpl.html'
      },
      {
        name: 'PaletteApp2',
        desc: 'Companion app for Palette hardware',
        img: 'img/paletteapp2.jpg',
        date: '2015',
        dialog: 'projects/paletteapp_dialog.tmpl.html'
      },
      {
        name: 'FastCards',
        desc: 'Android flash card app',
        img: 'img/fastcards_logo.jpg',
        date: '2015',
        dialog: 'projects/fastcards_dialog.tmpl.html'
      },
      {
        name: 'Slate',
        desc: 'A 3D Projection-Mapped Unity Game',
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
  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }

  DialogController.$inject = ['$scope', '$mdDialog'];

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['MainApp']);
  });

})();
