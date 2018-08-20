import {Component, OnInit} from '@angular/core';
import {GetUserListService} from '../../services/get-user-list.service';
import {User} from '../../models/user';
import {RemoveUserService} from '../../services/remove-user.service';


@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    userList: User[];
    allChecked: boolean;
    removeUserList: User[] = [];


    constructor(private userService: GetUserListService,
                private removeUserService: RemoveUserService,
    ) {
    }

    getUserList() {
        this.userService.getUserList().subscribe(
            res => {
                console.log(res.json());
                this.userList = res.json();
            },
            error => {
                console.log(error);
            }
        );
    }

    updateSelected(checked: boolean) {
        if (checked) {
            this.allChecked = true;
            this.removeUserList = this.userList.slice();
        } else {
            this.allChecked = false;
            this.removeUserList = [];
        }
    }

    updateRemoveUserList(checked: boolean, user: User) {
        if (checked) {
            this.removeUserList.push(user);
        } else {
            this.removeUserList.splice(this.removeUserList.indexOf(user), 1);
        }
    }

    removeSelectedUsers() {
        for (const user of this.removeUserList) {
            this.removeUserService.sendUser(user.id).subscribe(
                res => {

                },
                err => {
                }
            );
        }
        location.reload();
    }


    deleteUser(user: User) {
        this.removeUserService.sendUser(user.id).subscribe(
            res => {
                console.log(res);
                this.getUserList();
            },
            err => {
                console.log(err);
            }
        );
    }

    ngOnInit() {
        this.getUserList();
    }

}
