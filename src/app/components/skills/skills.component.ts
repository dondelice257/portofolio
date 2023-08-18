import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  
})
export class SkillsComponent implements OnInit {

  skills: any =[
    {icon:'fa-brands fa-html5',  name:'HTML5', average:90},
    {icon:'fa-brands fa-css3',  name:'CSS', average:81},
    {icon:'fa-brands fa-js',  name:'Javascript', average:78},
    {icon:'fa-brands fa-python',  name:'Python', average:72},
    {icon:'devicon-typescript-plain',  name:'Typescript', average:70},
    {icon:'devicon-sqlite-plain',  name:'SQL', average:57},
    {icon:'fa-brands fa-angular',  name:'Angular', average:72},
    {icon:'fa-brands fa-vuejs',  name:'VueJs', average:39},
    {icon:'fa-brands fa-bootstrap',  name:'Bootstrap', average:71},
    {icon:'devicon-ionic-original',  name:'Ionic', average:52},
    {icon:'devicon-django-plain',  name:'Django', average:37},








  ]

  tools=[
    {icon:'devicon-git-plain colored', name:'Git',},
    {icon:'devicon-firebase-plain colored', name:'Firebase',},
    {icon:'devicon-vscode-plain colored', name:'VS Code',},
    {icon:'devicon-postgresql-plain colored', name:'PostgreSQL',},
    {icon:'devicon-androidstudio-plain colored', name:'Android Studio',},
    {icon:'devicon-figma-plain colored', name:'Figma',},
    {icon:'devicon-photoshop-plain colored', name:'Adobe Photoshop',},
    {icon:'devicon-illustrator-plain colored', name:'Adobe Illustrator',},
    {icon:'devicon-chrome-plain colored', name:'Google chrome',},
    {icon:'devicon-firefox-plain colored', name:'Firefox',},
    {icon:'devicon-edge-plain colored', name:'Edge',},





  ]

  ngOnInit(): void {
      this.startAutoCounting()
  }

  startAutoCounting() {
    const delayBetweenCounts = 30;

    this.skills.forEach((skill:any) => {
      let currentCount = 0;
      const targetCount = skill.average;
      const interval = setInterval(() => {
        if (currentCount >= targetCount) {
          clearInterval(interval);
        } else {
          currentCount += 1;
          skill.displayAverage = currentCount;
        }
      }, delayBetweenCounts);
    });
  }
}
