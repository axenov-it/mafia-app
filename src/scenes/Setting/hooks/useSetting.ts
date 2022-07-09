import { useForm } from "react-hook-form";
import { IFormInputs } from "../interfaces";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import initialRoles from "mocks/roles.json";
import { setSetting } from "../../../redux-store/slices/settings";
import { useDispatch } from "../../../redux-store/hooks";

export const useSetting = () => {
  const [roleIds, setRoleIds] = useState<number[]>([]);
  const [numberGamers, setNumberGamers] = useState<number>(0);
  const [hideSelect, setHideSelect] = useState<boolean>(false);

  const dispatch = useDispatch();

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
    if (e.target.value) {
      setHideSelect(true);
    }
  };

  const onSubmit = (data: IFormInputs) => {
    if (Number(data.numberGamers) !== data.roles.length) {
      return alert("Кількість ролей повинна бути рівна кількості гравців");
    }

    const roles: any = data.roles.map((roleId) =>
      initialRoles.find((role) => role.id === roleId)
    );

    dispatch(setSetting({ countGamers: numberGamers, roles: roles }));

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
    hideSelect,
  };
};
