import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor(private _http:HttpClient) { }
  subjects:any;
  ngOnInit(): void {
    this.getSubjects().subscribe(data=>{
      this.subjects=data;
    })
  }
  getSubjects(){
    return this._http.get('./assets/db/Subjects.js');
  }
}
