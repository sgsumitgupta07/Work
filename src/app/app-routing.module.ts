import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginformComponent } from './loginform/loginform.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PreventFormsGuard } from './prevent-forms.guard';
import { CategoryComponent } from './category/category.component';
import { BrandComponent } from './brand/brand.component';
import { ProductComponent } from './product/product.component';
import { PreventafterloginGuard } from './preventafterlogin.guard';
import { ShowDataComponent } from './show-data/show-data.component';
import { FilterProductComponent } from './filter-product/filter-product.component';
import { FilterBrandProductComponent } from './filter-brand-product/filter-brand-product.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { CategoryUpdateListingComponent } from './category-update-listing/category-update-listing.component';
import { InputOutputDectComponent } from './input-output-dect/input-output-dect.component';
import { ProfileComponent } from './profile/profile.component';
import { CPasswordComponent } from './c-password/c-password.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

const routes: Routes = [
  {path:'contactpage' , component:ContactComponent},
  {path:'loginpage' , component:LoginComponent},
  {path:'' , component:ContentComponent},
  {path:'registerpage' , component:RegisterComponent,canActivate:[PreventFormsGuard]},
  {path:'loginformpage' , component:LoginformComponent,canActivate:[PreventFormsGuard]},
  {path:'categorypage' , component:CategoryComponent,canActivate:[PreventafterloginGuard]},
  {path:'listing-categorypage' , component:CategoryListingComponent,canActivate:[PreventafterloginGuard]},
  {path:'listing-update-categorypage' , component:CategoryUpdateListingComponent,canActivate:[PreventafterloginGuard]},
  {path:'brandpage' , component:BrandComponent,canActivate:[PreventafterloginGuard]},
  {path:'productpage' , component:ProductComponent,canActivate:[PreventafterloginGuard]},
  {path:'showdata' , component:ShowDataComponent,canActivate:[PreventafterloginGuard]},
  {path:'logoutpage' , component:LogoutComponent},
  {path:'filterProCatwise/:categoryID' , component:FilterProductComponent},
  {path:'filterProBrandwise/:brandID' , component:FilterBrandProductComponent},
  {path:'cartspage' , component:AddToCartComponent,canActivate:[PreventafterloginGuard]},
  {path:'deleteCat/:categoryID' , component:CategoryDeleteComponent},
  {path:'updateCat/:categoryID' , component:CategoryUpdateComponent},
  {path:'input-output' , component:InputOutputDectComponent},
  {path:'profile' , component:ProfileComponent,canActivate:[PreventafterloginGuard]},
  {path:'pChange' , component:CPasswordComponent,canActivate:[PreventafterloginGuard]},
  {path:'dragdown' , component:DragDropComponent},
  {path:'**' , component:PagenotfoundComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
