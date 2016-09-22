(function() {
    'use strict';
    var app = angular.module('MainApp');

    function LinksController($window) {
        this.links = [
            {
                tooltip: 'Resume',
                fa: 'fa-file-text',
                href: '/Matthew_Tsui_Resume.pdf',
                click: null
            },
            {
                tooltip: 'Email',
                fa: 'fa-send',
                href: '',
                click: function(){
                  $window.open("znvygb:znggurj.md.gfhv@tznvy.pbz?fhowrpg=Jrofvgr - Pbagnpg".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}));
                }
            },
            {
                tooltip: 'Linkedin',
                fa: 'fa-linkedin',
                href: 'https://www.linkedin.com/in/mzqtsui',
                click: null
            },
            {
                tooltip: 'Github',
                fa: 'fa-github',
                href: 'https://github.com/mzqtsui',
                click: null
            },
            {
                tooltip: 'Tumblr',
                fa: 'fa-tumblr',
                href: 'https://mattztsui.tumblr.com',
                click: null
            },
            {
                tooltip: 'Medium',
                fa: 'fa-medium',
                href: 'https://medium.com/@matt.tsui',
                click: null
            }
        ];
    }

    LinksController.$inject = ['$window'];

    app.component('contactLinks', {
        template:`
        <aside id="links">
            <div layout="row" layout-align="center center">
                <md-button ng-repeat="link in $ctrl.links" aria-label="" ng-click="link.click()"  ng-href="{{::link.href}}" target="_blank">
                    <i class="fa" ng-class="link.fa"></i>
                    <md-tooltip>
                        {{::link.tooltip}}
                    </md-tooltip>
                </md-button>
            </div>
        </aside>
        `,
        controller: LinksController
    });
})();