import { categoryModel } from './category.model';
import { statusModel } from './status.model';

export interface userModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  idNumber: number;
  birthDate: string;
  category: categoryModel;
  status: statusModel;
}
