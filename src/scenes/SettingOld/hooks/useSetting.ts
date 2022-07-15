import initialRoles from "mocks/roles.json";
import { setSetting } from "../../../redux-store/slices/settings";
import { useDispatch } from "../../../redux-store/hooks";

export const useSetting = () => {
  const dispatch = useDispatch();

  const onSubmit = (data: { countGamers: string; roles: string[] }) => {
    const countGamersValue = Number(data.countGamers);

    if (countGamersValue !== data.roles.length) {
      return alert("Кількість ролей повинна бути рівна кількості гравців");
    }

    const roles: any = data.roles.map((roleId) =>
      initialRoles.find((role) => role.id === roleId)
    );

    // dispatch(setSetting({ countGamers: countGamersValue, roles: roles }));

    alert("Готово!");
  };

  return {
    onSubmit,
  };
};
