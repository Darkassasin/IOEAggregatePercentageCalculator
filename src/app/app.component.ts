import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  percentage:number[]=[0,0,0,0,0,0,0,0];
  aggregate:number[]=[0,0,0,0,0,0,0,0];
  sem:number[]=[0,0,0,0,0,0,0,0];
  total:number[];
  faculty:number=1;
  aggregateTotal:number=0;
  flag:boolean;

  constructor(){}
  ngOnInit(){
    this.total=[725,650,875,900,875,825,825,750];
  }

  onChangeFaculty(faculty){
    if(faculty == 1){
      this.total=[725,650,875,900,875,825,825,750];
    }else if(faculty == 2){
      this.total =[675, 700, 700, 750, 875, 750, 750, 650];
    }
  }
  CalculatePercentageandAggregate(){
    this.percentage[0]=(this.sem[0]/this.total[0])*100;
    this.percentage[1]=(this.sem[1]/this.total[1])*100;
    this.percentage[2]=(this.sem[2]/this.total[2])*100;
    this.percentage[3]=(this.sem[3]/this.total[3])*100;
    this.percentage[4]=(this.sem[4]/this.total[4])*100;
    this.percentage[5]=(this.sem[5]/this.total[5])*100;
    this.percentage[6]=(this.sem[6]/this.total[6])*100;
    this.percentage[7]=(this.sem[7]/this.total[7])*100;


    this.aggregate[0]=0.1*this.percentage[0];
    this.aggregate[1]=0.1*this.percentage[1];
    this.aggregate[2]=0.1*this.percentage[2];
    this.aggregate[3]=0.1*this.percentage[3];
    this.aggregate[4]=0.15*this.percentage[4];
    this.aggregate[5]=0.15*this.percentage[5];
    this.aggregate[6]=0.15*this.percentage[6];
    this.aggregate[7]=0.15*this.percentage[7];

    this.aggregateTotal = this.aggregate[0] + this.aggregate[1] + this.aggregate[2] + this.aggregate[3] + this.aggregate[4] + this.aggregate[5] + this.aggregate[6] + this.aggregate[7]
  }

  reset(){
    this.percentage =[0,0,0,0,0,0,0,0];
    this.aggregate =[0,0,0,0,0,0,0,0];
    this.sem =[0,0,0,0,0,0,0,0];
    this.aggregateTotal=0;
  }

  flagOn(){
    this.flag=true;
  }
}
