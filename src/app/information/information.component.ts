import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  data=[];
  p:number=1;
  orderForm: FormGroup;
   items: FormArray;
    editIndex:number;
  showRow:boolean=false;
  totallength;

  constructor(private ser:ServicesService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ser.TakingData().subscribe(res=>{
      this.data=res;
      var a=JSON.stringify(res);
      console.log("data",a)
      res.forEach((e,i)=>{
        let  items = this.orderForm.get('items') as FormArray;
        items.push(this.createItem());
(        items.at(i).patchValue({
        albumId:e.albumId,
        id:e.id,
        title:e.title,
        url:e.url,
        thumbnailUrl:e.thumbnailUrl
})
)      })

  this.totallength=res.length
    },
    )
    this.orderForm = this.formBuilder.group({
      items: this.formBuilder.array([])
    });
  }
 
  Deletrow(id){
    console.log("hiii");
    if(confirm("do you want to delete this Data")){
      this.items = this.orderForm.get('items') as FormArray;
      this.items.removeAt(id)
    }
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      albumId:'',
      id:'',
      title:'',
      url:'',
      thumbnailUrl:''
     
    });
  }
  onAddPrduct(): void {
    let  items = this.orderForm.get('items') as FormArray;
    items.push(this.createItem());
    console.log("addddd",this.orderForm)
    this.totallength=items.length-1
  }
  GeTInfrm(i){
    console.log("iiiiii ???",i)
    console.log("ttttt",this.totallength)
    if(this.totallength>i){
      
      return true;
    }else{
      return false;
    }
    

  }

}
