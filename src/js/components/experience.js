(function() {
    'use strict';
    var app = angular.module('MainApp');

    function ExperienceController() {
        this.workplaces = [
        {
            name: 'Palette',
            role: 'Software Developer',
            date: 'Sep 2015 - Dec 2015',
            location: 'Kitchener, Canada',
            url: 'https://palettegear.com'
        },
        {
            name: 'Imagine Communications',
            role: 'Application Developer',
            date: 'Jan 2015 - Apr 2015',
            location: 'Waterloo, Canada',
            url: 'https://www.imaginecommunications.com'
        },
        {
            name: 'Christie Digital Systems',
            role: 'Unity Developer',
            date: 'Jan 2014 - Apr 2014',
            location: 'Kitchener, Canada',
            url: 'https://www.christiedigital.com'
        },
        {
            name: 'MyPlanet',
            role: 'Fellow',
            date: 'Jan 2014 - Mar 2014',
            location: 'Toronto, Canada',
            url: 'https://www.myplanet.com'
        },
        {
            name: 'BMO InvestorLine',
            role: 'eBusiness Specialist',
            date: 'Jan 2013 - Apr 2013',
            location: 'Toronto, Canada',
            url: 'https://www.bmo.com/self-directed'
        },
        {
            name: 'Infoskill Intelligent Solutions Inc.',
            role: 'Wordpress Developer',
            date: 'May 2012 - August 2012',
            location: 'Toronto, Canada',
            url: 'https://infoskill.com'
        }
        ];
    }


    app.component('workExperience', {
        template:`
        <section>
            <h2>Work Experience</h2>
            <div flex="60" flex-offset="20" flex-xs="100" flex-offset-xs="0"  class="md-padding" layout="column" layout-align="center center">
                <md-list flex>
                    <md-list-item class="md-3-line" ng-repeat="place in $ctrl.workplaces">
                        <div class="md-list-item-text" layout="column">
                            <h3>{{ place.role }} <data class="right location">{{ place.location }}</data></h3>
                            <h4><a ng-href="{{ place.url }}" target="_blank">{{ place.name }}</a></h4>
                            <p>{{ place.date }}</p>
                        </div>
                    </md-list-item>
                </md-list>
            </div>
        </section>
        `,
        controller: ExperienceController
    });

})();