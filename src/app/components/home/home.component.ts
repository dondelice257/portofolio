import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  roles = ['Web Developer', 'Web Designer', 'Graphic Designer', 'Mobile Developer', 'Content Creator'];
  currentRoleIndex = 0;
  typingSpeed = 100; 

 

  ngDoCheck(){
    this.typeRole();

    const verticalLine:any = document.getElementById('verticalLine');

// Show the line after 1 second
setTimeout(() => {
  verticalLine.style.opacity = '1';
}, 2000);

// Hide the line after another 1 second
setTimeout(() => {
  verticalLine.style.opacity = '0';
}, 6000);

  }

  typeRole() {
    const roleText = this.roles[this.currentRoleIndex];
    const typingContainer:any = document.getElementById('typing-text');
    typingContainer.innerHTML = ''; 

    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < roleText.length) {
        typingContainer.innerHTML += roleText.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          this.eraseRole();
        }, 3000); 
      }
    }, this.typingSpeed);
  }

  eraseRole() {
    const typingContainer:any = document.getElementById('typing-text');
    const roleText = this.roles[this.currentRoleIndex];
    let charIndex = roleText.length - 1;

    const erasingInterval = setInterval(() => {
      if (charIndex >= 0) {
        typingContainer.innerHTML = roleText.substring(0, charIndex);
        charIndex--;
      } else {
        clearInterval(erasingInterval);
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        this.typeRole();
      }
    }, this.typingSpeed / 1000); 
  }

}
