import { PhoneCheckModel } from "./phoneCheck.model";
import { RegisterModel } from './register.model';

export interface AppState {
  phoneCheck: PhoneCheckModel;
  register: RegisterModel;
}
