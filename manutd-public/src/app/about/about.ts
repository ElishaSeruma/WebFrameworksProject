import { Component, OnInit, inject, ChangeDetectorRef, signal } from '@angular/core';
import { ManutdData, Staff, Player } from '../manutd-data';

export class Feature {
  title!: string;
  text!: string;
}

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  private manutdData = inject(ManutdData);
  private cdr = inject(ChangeDetectorRef); // 1. Inject ChangeDetectorRef

  protected readonly title = signal('About Stats Analyzr');
  protected readonly strapline = signal('Manchester United 2026/27 Premier League season');

  intro: string = 'Stats Analyzr lets Manchester United fans follow the 2026/27 squad in one place. ' +
    'Create an account, log in and see every player\'s season stats, filtered by position.';

  features: Feature[] = [
    {
      title: 'Register',
      text: 'Sign up with your name, age, a username and your favourite player.'
    },
    {
      title: 'View stats',
      text: 'See goals, assists, cards and minutes played for the full squad.'
    },
    {
      title: 'Player detail',
      text: 'Open any player to see their details and season stats on one page.'
    }
  ];

  staff: Staff[] = [];

  // Players shown in the Highlighted Players section
  highlightedNames: string[] = ['Bruno Fernandes', 'Marcus Rashford', 'Kobbie Mainoo'];
  highlightedPlayers: Player[] = [];

  private async getStaff(): Promise<void> {
    try {
      this.staff = await this.manutdData.getStaff();
      console.log('Fetched staff:', this.staff);

      this.cdr.detectChanges(); // 2. Force Angular to render the new data!
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  }

  private async getHighlightedPlayers(): Promise<void> {
    try {
      const players = await this.manutdData.getPlayers();
      this.highlightedPlayers = players.filter(player => this.highlightedNames.includes(player.name));
      console.log('Fetched highlighted players:', this.highlightedPlayers);

      this.cdr.detectChanges(); // Force Angular to render the new data!
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  }

  ngOnInit(): void {
    this.getHighlightedPlayers();
    this.getStaff();
  }
}
