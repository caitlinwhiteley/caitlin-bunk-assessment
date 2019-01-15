import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service.js';
import players from '../../assets/data/football.json'

interface IPlayer {
  "id": number,
  "name": string,
  "position": string,
  "dateOfBirth": string,
  "countryOfBirth": string,
  "nationality": string,
  "role": string
}

interface IPlayerChosen extends IPlayer {
  "chosen": boolean
}


@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss']
})
export class FootballComponent implements OnInit {
  private playerss;

  private goalkeepers = [];
  private defenders = [];
  private midfielders = [];
  private attackers = [];

  private chosenGoalkeeper = [];
  private chosenDefenders = [];
  private chosenMidfielders = [];
  private chosenAttackers = [];

  private goalkeepersFull: boolean = false;
  private midfieldersFull: boolean = false;
  private attackersFull: boolean = false;
  private defendersFull: boolean = false;

  constructor(private footballService: FootballService) {
    this.playerss = players
      // .map((playerss: IPlayerChosen) => {
      //   playerss.chosen = false;
      //   return playerss
      // });
      // console.log(this.playerss.id)
    this.sortPlayers(this.playerss);
  }  

  ngOnInit() {
  }

  sortPlayers(players){
    for (let player = 0; player < players.length; player++) {
      if (players[player].position == "Goalkeeper") {
        this.goalkeepers.push(players[player]); 
      } else if (players[player].position == "Attacker") {
        this.attackers.push(players[player]); 
      } else if (players[player].position == "Defender") {
        this.defenders.push(players[player]); 
      } else if (players[player].position == "Midfielder") {
        this.midfielders.push(players[player]); 
      }
    }
  }
  
  checkNumberOfPlayers(playerPosition, number) {
    if (playerPosition.length === number) {
      return true;
    }
  }

  addGoalie(id: number) {
    for (let index = 0; index < this.playerss.length; index++) {
      if (this.playerss[index].id === id && !this.chosenGoalkeeper.includes(this.playerss[index].name)) {
        this.chosenGoalkeeper.push(this.playerss[index].name)
      }
    }
    this.goalkeepersFull = this.checkNumberOfPlayers(this.chosenGoalkeeper, 1);
  }

  addMidfielder(id: number) {
    for (let index = 0; index < this.playerss.length; index++) {
      if (this.playerss[index].id === id && !this.chosenMidfielders.includes(this.playerss[index].name)) {
        this.chosenMidfielders.push(this.playerss[index].name)
      }
    }
    this.midfieldersFull = this.checkNumberOfPlayers(this.chosenMidfielders, 4);
  }

  addAttacker(id: number) {
    for (let index = 0; index < this.playerss.length; index++) {
      if (this.playerss[index].id === id && !this.chosenAttackers.includes(this.playerss[index].name)) {
        this.chosenAttackers.push(this.playerss[index].name)
      }
    }
    this.attackersFull = this.checkNumberOfPlayers(this.chosenAttackers, 4);
  }

  addDefender(id: number) {
    for (let index = 0; index < this.playerss.length; index++) {
      if (this.playerss[index].id === id && !this.chosenDefenders.includes(this.playerss[index].name)) {
        this.chosenDefenders.push(this.playerss[index].name)
      }
    }
    this.defendersFull = this.checkNumberOfPlayers(this.chosenDefenders, 4);
  }

}