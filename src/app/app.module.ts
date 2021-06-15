import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';
import { LogoutComponent } from './logout/logout.component';
import { CategoryComponent } from './category/category.component';
import { BrandComponent } from './brand/brand.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { ShowBrandComponent } from './show-brand/show-brand.component';
import { FilterProductComponent } from './filter-product/filter-product.component';
import { FilterBrandProductComponent } from './filter-brand-product/filter-brand-product.component';
import { CookieModule } from 'ngx-cookie';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { CategoryUpdateListingComponent } from './category-update-listing/category-update-listing.component';
import { InputOutputDectComponent } from './input-output-dect/input-output-dect.component';
import { InputOutputDectChildComponent } from './input-output-dect-child/input-output-dect-child.component';
import { ProfileComponent } from './profile/profile.component';
import { CPasswordComponent } from './c-password/c-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ProductComponent,
    ContactComponent,
    LoginComponent,
    PagenotfoundComponent,
    RegisterComponent,
    LoginformComponent,
    LogoutComponent,
    CategoryComponent,
    BrandComponent,
    ShowDataComponent,
    ShowCategoryComponent,
    ShowProductComponent,
    ShowBrandComponent,
    FilterProductComponent,
    FilterBrandProductComponent,
    AddToCartComponent,
    CategoryListingComponent,
    CategoryDeleteComponent,
    CategoryUpdateComponent,
    CategoryUpdateListingComponent,
    InputOutputDectComponent,
    InputOutputDectChildComponent,
    ProfileComponent,
    CPasswordComponent,
    DragDropComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CookieModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
