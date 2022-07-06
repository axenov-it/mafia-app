import { useForm } from "react-hook-form";
import { IFormInputs } from "../interfaces";

export const useSetting = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInputs>({ mode: "onBlur" });

  const onSubmit = (data: IFormInputs) => {
    reset();
  };

  return { handleSubmit, register, onSubmit, errors };
};
