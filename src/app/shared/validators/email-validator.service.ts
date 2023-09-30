import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    const callHttpObservable = new Observable<ValidationErrors | null>(
      (subcriber) => {
        if (email === 'test@test.com') {
          subcriber.next({ emailTaken: true });
          subcriber.complete();
        }

        subcriber.next(null);
        subcriber.complete();
      }
    );

    return callHttpObservable;
  }
}
