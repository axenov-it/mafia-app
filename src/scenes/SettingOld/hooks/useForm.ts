import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  countGamers: yup
    .number()
    .min(1, "Заповніть поле")
    .required("Обов'язкове поле"),
  roles: yup.array().of(yup.string()).min(1, "Оберіть ролі"),
});

export const useForm = ({ onSubmit }: any) => {
  const form = useFormik({
    initialValues: {
      countGamers: "",
      roles: [],
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  return form;
};
