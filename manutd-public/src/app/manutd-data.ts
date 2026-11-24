import { Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

// Same idea as apiOptions in the Express controllers:
// use the local server when running on this computer, otherwise the Render URL
const apiOptions = {
  server: 'http://localhost:3009'
};
if (window.location.hostname !== 'localhost') {
  apiOptions.server = 'https://webframeworksproject-nqn2.onrender.com';
}

export class Flag {
  name!: string;
  src!: string;
}

export class Staff {
  _id!: string;
  name!: string;
  role!: string;
  flag!: Flag;
  photo!: string;
}

export class Stats {
  assists!: number;
  goals!: number;
  yellowCards!: number;
  redCards!: number;
  minutesPlayed!: number;
}

export class Player {
  _id!: string;
  number!: number;
  name!: string;
  position!: string;
  age!: number;
  flag!: Flag;
  photo!: string;
  stats!: Stats;
}

@Service()
export class ManutdData {
  private http = inject(HttpClient);
  private apiBaseUrl = `${apiOptions.server}/api`; // Your backend API endpoint

  // Public method returning a Promise of Staff array
  public async getStaff(): Promise<Staff[]> {
    const url = `${this.apiBaseUrl}/staff`;
    return firstValueFrom(this.http.get<Staff[]>(url));
  }

  // Public method returning a Promise of Player array
  public async getPlayers(): Promise<Player[]> {
    const url = `${this.apiBaseUrl}/players`;
    return firstValueFrom(this.http.get<Player[]>(url));
  }
}
