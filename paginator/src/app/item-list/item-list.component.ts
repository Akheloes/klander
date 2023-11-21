import { Component, OnInit } from '@angular/core';

type Data = {
  id: number;
  name: string;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor() { }

  data: Data[] = [{
    id: 1,
    name: "ID1"
  },
  {
    id: 2,
    name: "ID2"
  },
  {
    id: 3,
    name: "ID3"
  },
  {
    id: 4,
    name: "ID4"
  },
  {
    id: 5,
    name: "ID5"
  },
  {
    id: 6,
    name: "ID1"
  },
  {
    id: 7,
    name: "ID2"
  },
  {
    id: 8,
    name: "ID3"
  },
  {
    id: 9,
    name: "ID4"
  },
  {
    id: 10,
    name: "ID5"
  },
  ];

  displayedData: Data[] = [];

  page = 0;

  ngOnInit(): void {
    this.displayedData = this.data.slice(0, 5);
  }

  prev() {
    console.log("prev")
    this.page - 1;
  }

  next() {
    console.log("next")
    this.page++;
    const itemNumber = this.page * 5;
    this.displayedData = this.data.slice(itemNumber, itemNumber + 5);
  }

}
