import { GamerInterface } from "common/interfaces";
import { RunNextGamerInterface } from "../interface";

export const useIsBlocked = (
  gamer: GamerInterface,
  onFinishAbility: RunNextGamerInterface
) => ({
  checkIsBlocked: () => {
    const isBlocked = !!gamer.incomingAbilities.find(
      ({ id }) => id === "block" || id === "immortalBlock"
    );

    if (isBlocked) {
      alert("Гравець заблокованный");
      onFinishAbility(0);
    }

    return isBlocked;
  },
});
