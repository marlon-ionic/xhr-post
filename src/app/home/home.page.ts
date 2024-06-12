import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonToggle, FormsModule],
})
export class HomePage {
  useSystemTarget = true;
  constructor() {}

  post(useSystem = true, url?: string, body?: any): void {
    body = body || {
      title: 'foo',
      body: 'bar',
      other: 'baz',
      userId: 99,
    };
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = url || 'https://jsonplaceholder.typicode.com/posts';
    if (useSystem){
      form.target = '_system';
    }
    // form.target = '_blank';
    form.style.display = 'none';
    for (const key in body) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = body[key];
      form.appendChild(input);
    }
    document.body.appendChild(form);
    console.log('form', form);
    form.submit();
    document.body.removeChild(form);
  }

}
