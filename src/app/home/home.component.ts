import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  flag:boolean=true;
 clear:any;
 counter:number=0;
slides:{images:string,name:string,sptiatization:string}[]
            =[
            {'images':'assets/doctor1.jpg','name':'sara','sptiatization':'denisty'},
            {'images':'assets/doctor2.jpg','name':'aya','sptiatization':'Orthopaedic'},
            {'images':'assets/doctor3.jpg','name':'ali','sptiatization':'heart surgery'},
            {'images':'assets/doctor4.jpg','name':'asmaa','sptiatization':'Pediatrics'},
            {'images':'assets/doctor5.jpg','name':'ahmed','sptiatization':'ophthalmology'},
            {'images':'assets/doctor6.jpg','name':'mohamed','sptiatization':'Pediatrics'},
            {'images':'assets/doctor1.jpg','name':'sara','sptiatization':'denisty'},
            {'images':'assets/doctor2.jpg','name':'aya','sptiatization':'Orthopaedic'},
            {'images':'assets/doctor3.jpg','name':'ali','sptiatization':'heart surgery'},
            {'images':'assets/doctor4.jpg','name':'asmaa','sptiatization':'Pediatrics'},
            {'images':'assets/doctor5.jpg','name':'ahmed','sptiatization':'ophthalmology'},
            {'images':'assets/doctor6.jpg','name':'mohamed','sptiatization':'Pediatrics'}
            
            ];
slide=this.slides[0]
slide1=this.slides[1]
slide2=this.slides[2]
slide3=this.slides[3]



constructor() { }
  animate(){
    if(this.flag){
  this.clear= setInterval(() => {
                           
    this.slide=this.slides[this.counter+1]
    this.slide1=this.slides[this.counter+2]
    this.slide2=this.slides[this.counter+3]
    this.slide3=this.slides[this.counter+4]
    this.counter++;
    if(this.counter==this.slides.length){
      this.slide=this.slides[0]
      this.slide1=this.slides[1]
      this.slide2=this.slides[2]
      this.slide3=this.slides[3]
    }
                          }
                          ,3000);
    this.flag=false;
    }
  
}

  
}
