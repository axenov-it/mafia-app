import * as React from "react";
import { useForm } from "react-hook-form";
import { IFormInputs } from "../interfaces";
import  { SelectChangeEvent } from "@mui/material/Select";

export const useSetting = () => {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInputs>({ mode: "onBlur" });

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const onSubmit = (data: IFormInputs) => {
    if (data.numberPlayers == data.nameCard.length){
      console.log(data);
      reset();
    }else{
      alert("Кількість гравців має бути рівним обраним ролям")
    }
    
   
  };

  return { handleSubmit, register, onSubmit, errors, handleChange, personName };
};
