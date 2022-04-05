import { getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardInterface } from '../interface/cardInterface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  value: number = 0;

  public gallery: CardInterface[] = [];
  
  public sum(data: number) {
    this.value += data;
  }
  
  constructor() {
    this.gallery = [
      {img: '../../assets/Kizu+Table+Lamp+White+Marble,+Small.jpeg', name: 'Kizu', num: 10},
      {img: '../../assets/22887941654_211a6e1475_k.jpeg', name: '1', num: 10},
      {img: '../../assets/45844733402_3d756dd1c1_5k.jpeg', name: '2', num: 10},
      {img: '../../assets/Coil3.jpeg', name: '3', num: 10},
      {img: '../../assets/Con+Barkrakker_Fora+Form.jpeg', name: '4', num: 10},
      {img: '../../assets/Cooee_01_COR_horizontal.jpeg', name: '5', num: 10},
      {img: '../../assets/Copenhagen+chair+sort++Fora+Form.jpeg', name: '6', num: 10},
    ];
   }

  ngOnInit(): void {
  }

}
