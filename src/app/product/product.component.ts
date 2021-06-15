import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyService } from '../services/my.service';

@Component({
    selector : 'app-product',
    templateUrl : 'product.Component.html',
    styleUrls : ['product.Component.css']
})

export class ProductComponent implements OnInit {
public Catdata:any;
public Branddata:any;
public productForm!:FormGroup;
constructor( private fb: FormBuilder, private myser:MyService ) { }

ngOnInit(): void {
        this.myser.selectData("category").subscribe(
            (res)=>{
                console.log(res)
                this.Catdata = res;
            }
        )


        this.myser.selectData("brand").subscribe(
            (res)=>{
                console.log(res)
                this.Branddata = res;
            }
        )

    ///////
        this.productForm = this.fb.group({
            productName:['',Validators.required],
            productPrice:['',Validators.required],
            productCatID:['',Validators.required],
            productBrandID:['',Validators.required],
            productFile:['',Validators.required]
        })
    ///////

    }

    productAction(){
        console.log(this.productForm.value)
        this.myser.postData("products",this.productForm.value).subscribe(
            (res)=>{
                console.log(res);
            }
        )
    }
    
}