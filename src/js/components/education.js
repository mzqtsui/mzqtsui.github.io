function EducationController() {
    this.education = [
    {
      name: "Front End Developer Nanodegree",
      sub: "",
      school: "Udacity",
      date: "2016",
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
    }];
}

app.component('education', {
    template:`
        <section>
            <h2>Education</h2>
            <div flex="60" flex-offset="20" flex-xs="100" flex-offset-xs="0"  class="md-padding" layout="column" layout-align="center center">
                <md-list flex>
                    <md-list-item class="md-3-line" ng-repeat="item in $ctrl.education">
                        <div class="md-list-item-text" layout="column">
                            <h3>{{ item.name }}<data class="right location">{{ item.location }}</data></h3>
                            <h4>{{ item.sub }}</h4>
                            <p>{{ item.school }}, {{ item.date }}</p>
                        </div>
                    </md-list-item>
                </md-list>
            </div>
        </section>
    `,
    controller: EducationController
});