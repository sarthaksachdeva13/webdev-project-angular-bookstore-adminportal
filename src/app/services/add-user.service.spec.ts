import {TestBed, inject} from '@angular/core/testing';

import {AddUserService} from './add-user.service';

describe('AddBookService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AddUserService]
        });
    });

    it('should be created', inject([AddUserService], (service: AddUserService) => {
        expect(service).toBeTruthy();
    }));
});
