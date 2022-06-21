import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  multipartFile:any;
  flag=true;
  fileUploadUrl='http://localhost:8080/product/upload';

  constructor(
    private http:HttpClient,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
  }
  selectFile(event: any) {
    this.multipartFile=event.target.files[0];
    console.log(this.multipartFile);
   
  }
  uploadFile(){
    let formData=new FormData();
    formData.append("multipartFile",this.multipartFile);

    this.http.post(this.fileUploadUrl,formData,
      {responseType: 'text'}).subscribe(
      (data:any) => {

      console.log(data);
      alert('Upload successful');

      },
      (error)=>{
        console.log(error);
        alert('error');
      });
    
  }

}
