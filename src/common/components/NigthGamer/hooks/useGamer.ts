import { AbilityInterface, GamerInterface } from "common/interfaces";
import initialAbilities from "mocks/abilities.json";
import { useState } from "react";

const dataAbilities = initialAbilities as Record<string, AbilityInterface>;

export const useGamer = (gamer: GamerInterface) => {
  const {
    role: { abilities },
  } = gamer;

  const [gamerAbilities, setGamerAbilities] = useState(
    abilities.map((abilityId) => ({
      id: abilityId,
      name: dataAbilities[abilityId].name,
      isActive: true,
      value: "",
    }))
  );

  const onChangeAbility = (data: any) => {
    setGamerAbilities(
      gamerAbilities.map((gamerAbility) => ({
        ...gamerAbility,
        value: gamerAbility.id === data.target.name ? data.target.value : "",
        isActive: gamerAbility.id === data.target.name,
      }))
    );
  };

  return {
    gamerAbilities,
    onChangeAbility,
  };
};
