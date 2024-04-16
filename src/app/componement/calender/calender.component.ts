import { Component, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { DragEventArgs, EventSettingsModel, View  } from '@syncfusion/ej2-angular-schedule';
import { InterviewService } from 'src/app/services/interview.service';


@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
 
  /*public interviews: any[] = [];

  constructor(private interviewService: InterviewService) { }
 
  ngOnInit(): void {
   this.loadInterviews();
 }
 
   loadInterviews() {
     this.interviewService.getInterviews().subscribe(
       (data: any) => {
         this.interviews = data; 
         console.log(this.interviews);
       },
       (error: any) => {
         console.log('Error fetching interviews', error); 
       }
     );
   }
  public setView : View = 'WorkWeek';
  public setDate = new Date(2019,1,15);
  ngOnInit() {
    console.log(this.eventObject.dataSource);
  }
  
  public eventObject : EventSettingsModel = {
    dataSource : [{
      EventTitle: "",
      EventStart : new Date(2019,0,17,4,0),
      EventEnd : new Date(2019,0,17,6,0),
      //IsAllDay : true ,
      //RecurrenceRule : "FREQ=DAILY;INTERVAL=1;COUNT=10"
      //IsBlock : true
    }],
    
    
    fields : {
      subject  : { name : 'EventTitle' , default : "Hello Environment" , title : "Enter Title"},
      startTime : { name : 'EventStart'},
      endTime : { name : 'EventEnd'}
    }
   
  }*/
  
  public eventObject!: EventSettingsModel;

  constructor(private interviewService: InterviewService) {}

  ngOnInit() {
    this.loadInterviews();
  }

  private loadInterviews() {
    this.interviewService.getInterviews().subscribe((data: any[]) => {

      // Transformez les données au format attendu par le calendrier
      const eventData = data.map(event => ({
        title: event.title,
        start: new Date(event.startDate),
        end: new Date(event.endDate)
      }));
      console.log(eventData);

      this.eventObject = { dataSource: eventData };
     
    });
  }

  
}

