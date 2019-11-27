import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-nwe-file-upload',
  templateUrl: './nwe-file-upload.component.html',
  styleUrls: ['./nwe-file-upload.component.less']
})
export class NweFileUploadComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver = false;

  @ViewChild('labelImport', {static: false}) labelImport: ElementRef;
  formImport: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

ngOnInit() {
  this.setInputFile();
}

setInputFile() {
  this.formImport = this.formBuilder.group({
    importFile: ['', new FormControl('', Validators.required)]
  });
}

  public fileOverBase(e: any): void {
  this.hasBaseDropZoneOver = e;
  console.log(this.uploader);
}

}
