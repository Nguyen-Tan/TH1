import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b4tl',
  templateUrl: './b4tl.component.html',
  styleUrls: ['./b4tl.component.css']
})
export class B4tlComponent implements OnInit {
  constructor() { }
  s =[{hoten: 'Nguyen Phu Tan', quequan: 'Hai Duong', diemthi:9},
  {hoten: 'Bui Xuan Thang', quequan: 'Ha Noi', diemthi:7.5},
  { hoten: 'Vu Dinh Toan', quequan: 'Quang Ninh', diemthi:8.3}
  ];
  rs:any [] =[];
  ngOnInit(): void {
  }
  Loc(){
    this.rs = this.s.filter(x=>x.diemthi>8);
  }
}
