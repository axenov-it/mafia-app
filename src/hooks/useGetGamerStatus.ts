import { AbilityTypesInterface } from "../interfaces";

export const useGetGamerStatus = () => ({
  getGamerStatus: (
    gamerAblility: AbilityTypesInterface,
    incomingAbilities: ReadonlyArray<AbilityTypesInterface>
  ) => {
    const prevAbility = incomingAbilities[incomingAbilities.length - 1];

    if (gamerAblility === "killing" && prevAbility !== "healing") {
      return { isKilled: true };
    }

    if (gamerAblility === "block") {
      return { isBlocked: true };
    }

    return {};
  },
});
