import { FormikProps } from "formik";

export type TFormHandler<T> = {
  formik: FormikProps<T>;
  isLoading: boolean;
  setValidationAttempt: React.Dispatch<React.SetStateAction<boolean>>;
};
