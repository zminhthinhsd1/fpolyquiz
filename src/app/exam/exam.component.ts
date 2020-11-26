import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  listQuestion:any;
  index=0;
  currentQuestion:any;
  constructor(private _ActivatedRoute:ActivatedRoute,private _http:HttpClient) { }

  ngOnInit(): void {
    const idsub = this._ActivatedRoute.snapshot.paramMap.get('idSubject');
    this.getallQuestion(idsub).subscribe(data=>{
      this.listQuestion=data;
      this.currentQuestion=this.listQuestion[this.index];
    })
  }
  getallQuestion(idsub){
    return this._http.get(`./assets/db/Quizs/${idsub}.js`);
  }
  next(){
    this.index++;
    this.currentQuestion=this.listQuestion[this.index];
  }

}
