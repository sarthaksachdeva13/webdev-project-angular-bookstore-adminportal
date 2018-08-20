import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';
import {MaterialModule} from '@angular/material';
import 'hammerjs';

import {LoginService} from './services/login.service';
import {AddBookService} from './services/add-book.service';
import {UploadImageService} from './services/upload-image.service';
import {GetBookListService} from './services/get-book-list.service';
import {GetBookService} from './services/get-book.service';
import {EditBookService} from './services/edit-book.service';
import {RemoveBookService} from './services/remove-book.service';


import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {LoginComponent} from './components/login/login.component';
import {AddNewBookComponent} from './components/add-new-book/add-new-book.component';
import {BookListComponent, DialogResultExampleDialog} from './components/book-list/book-list.component';
import {ViewBookComponent} from './components/view-book/view-book.component';
import {EditBookComponent} from './components/edit-book/edit-book.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {GetUserListService} from './services/get-user-list.service';
import {RemoveUserService} from './services/remove-user.service';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        LoginComponent,
        AddNewBookComponent,
        BookListComponent,
        DialogResultExampleDialog,
        ViewBookComponent,
        EditBookComponent,
        UserListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        MaterialModule,
        BrowserAnimationsModule
    ],
    providers: [
        LoginService,
        AddBookService,
        UploadImageService,
        GetBookListService,
        GetBookService,
        EditBookService,
        RemoveBookService,
        GetUserListService,
        RemoveUserService
    ],
    bootstrap: [AppComponent, DialogResultExampleDialog]
})
export class AppModule {
}
