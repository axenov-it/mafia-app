import { useForm } from "react-hook-form";
import { IFormInputs } from "../interfaces";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import initialRoles from "mocks/roles.json";

export const useSetting = () => {
  const [roleIds, setRoleIds] = useState<number[]>([]);
  const [numberGamers, setNumberGamers] = useState(0);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInputs>({ mode: "onBlur" });

  const onRoleChange = (event: SelectChangeEvent<typeof roleIds>) => {
    const {
      target: { value },
    } = event;

    if (typeof value === "string") return;

    setRoleIds(value);
  };

  const onChageNumberGamers = (e: any) => {
    setNumberGamers(e.target.value);
  };

  const onSubmit = (data: IFormInputs) => {
    if (Number(data.numberGamers) !== data.roles.length) {
      return alert("Its not good !!!");
    }

    const roles = data.roles.map((roleId) =>
      initialRoles.find((role) => role.id === roleId)
    );

    console.log(roles);

    alert("Готово!");
    reset();
  };

  return {
    handleSubmit,
    register,
    onSubmit,
    errors,
    onRoleChange,
    roleIds,
    numberGamers,
    onChageNumberGamers,
  };
};
