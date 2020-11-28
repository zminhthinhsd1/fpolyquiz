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
  currentAns:any;
  idMon: any;
  correctAns = 0;
  userAns=0;
  showResult = false;
  constructor(private _ActivatedRoute:ActivatedRoute,private _http:HttpClient) { }

  ngOnInit(): void {
    const idsub = this._ActivatedRoute.snapshot.paramMap.get('idSubject');
    this.getallQuestion(idsub).subscribe(data=>{
      this.listQuestion=data;
      this.currentQuestion=this.listQuestion[this.index];
      this.idMon = idsub;
    })
  }
  
  getallQuestion(idsub){
    return this._http.get(`./assets/db/Quizs/${idsub}.js`);
    // Lấy tên mã môn ra 
  }
  nextOrViewResults(){
    // if (this.currentQuestionIndex === this.questions.length - 1) {
    //   this.showResults = true;
    //   return;
    // }
    if (this.index == 3) {
      this.showResult = true;
      return;
    }
    if(this.userAns == this.currentQuestion.AnswerId) {
      this.correctAns++;
    }
    this.index++;
    this.currentQuestion=this.listQuestion[this.index];
  }
  
  prev(){
    this.index--;
    this.currentQuestion=this.listQuestion[this.index];
  }

  onItemChange(value){
    console.log(" Value is : ", value );
    this.userAns = value;
 }
 

}
