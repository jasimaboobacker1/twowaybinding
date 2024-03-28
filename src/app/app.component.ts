import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task';
  width=700;
  public showtable=false;
  public changedStyle=false;
  public Changedheadstyle=false;

  items = [
    { id: 1, name: 'John Doe', place: 'New York' },
    { id: 2, name: 'Jane Smith', place: 'Los Angeles' },
    { id: 3, name: 'Alice Johnson', place: 'Chicago' }
  ];

  Show(){
    this.showtable=true;
  }

  Change(){
    this.changedStyle=true;
    this.Changedheadstyle=true;

  }

}
