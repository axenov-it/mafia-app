import { GamerInterface } from "common/interfaces";
import { RunNextGamerInterface } from "../interface";

export const useIsBlocked = (
  gamer: GamerInterface,
  onFinishAbility: RunNextGamerInterface
) => ({
  checkIsBlocked: () => {
    const ability = gamer.incomingAbilities.find(
      ({ id }) => id === "block" || id === "immortalBlock"
    );

    alert("Гравець заблокованный");
    onFinishAbility(0);

    return !!ability;
  },
});
