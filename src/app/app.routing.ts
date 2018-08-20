import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AddNewBookComponent} from './components/add-new-book/add-new-book.component';
import {BookListComponent} from './components/book-list/book-list.component';
import {ViewBookComponent} from './components/view-book/view-book.component';
import {EditBookComponent} from './components/edit-book/edit-book.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {AddNewUserComponent} from './components/add-new-user/add-new-user.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'addNewBook', component: AddNewBookComponent},
    {path: 'addNewUser', component: AddNewUserComponent},
    {path: 'bookList', component: BookListComponent},
    {path: 'userList', component: UserListComponent},
    {path: 'viewBook/:id', component: ViewBookComponent},
    {path: 'editBook/:id', component: EditBookComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);