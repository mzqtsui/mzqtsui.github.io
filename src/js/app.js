(function(){
  "use strict";
  var app = angular.module('MainApp', ['ngMaterial']);


  app.controller('AppCtrl', ['$scope', '$mdDialog', '$mdMedia', '$window' ,
    function($scope, $mdDialog, $mdMedia, $window) {

    $scope.projects = [
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

    $scope.workplaces = [
      {
        name: 'Palette',
        role: 'Software Developer',
        date: 'Sep 2015 - Dec 2015',
        location: 'Kitchener, Canada',
        url: '//palettegear.com'
      },
      {
        name: 'Imagine Communications',
        role: 'Application Developer',
        date: 'Jan 2015 - Apr 2015',
        location: 'Waterloo, Canada',
        url: '//www.imaginecommunications.com'
      },
      {
        name: 'Christie Digital Systems',
        role: 'Unity Developer',
        date: 'Jan 2014 - Apr 2014',
        location: 'Kitchener, Canada',
        url: '//www.christiedigital.com'
      },
      {
        name: 'MyPlanet',
        role: 'Fellow',
        date: 'Jan 2014 - Mar 2014',
        location: 'Toronto, Canada',
        url: '//www.myplanet.com'
      },
      {
        name: 'BMO InvestorLine',
        role: 'eBusiness Specialist',
        date: 'Jan 2013 - Apr 2013',
        location: 'Toronto, Canada',
        url: '//www.bmo.com/self-directed'
      },
      {
        name: 'Infoskill Intelligent Solutions Inc.',
        role: 'Wordpress Developer',
        date: 'May 2012 - August 2012',
        location: 'Toronto, Canada',
        url: '//infoskill.com'
      }
    ];

    $scope.education = [
    {
      name: "Front End Developer Nanodegree",
      sub: "",
      school: "Udacity",
      date: "In Progress",
      location: "Online"
    },
    {
      name: "Intro to the Design of Everyday Things",
      sub: "",
      school: "Udacity",
      date: "2016",
      location: "Online"
    },
    {
      name: "Bachelor of Computer Science",
      sub: "Software Engineering",
      school: "University of Waterloo",
      date: "2011 - 2016",
      location: "Canada"
    },
    {
      name: "Bachelor of Business Administration",
      sub: "Marketing",
      school: "Laziridis School of Business",
      date: "2011 - 2016",
      location: "Canada"
    },

    ];


    $scope.sendMail = function(){
      $window.open("znvygb:znggurj.md.gfhv@tznvy.pbz?fhowrpg=Jrofvgr - Pbagnpg".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}));
    }

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

})();
