import { useState } from "react";

import initialNumbers from "../mocks/numbers.json";

interface ReturnInterface {
  numbers: ReadonlyArray<number>;
  deleteNumber: (value: number) => void;
  resetNumbers: () => void;
  setNumbers: (numbers: ReadonlyArray<number>) => void;
}

export const useNumbers = (): ReturnInterface => {
  const [numbers, setNumbers] = useState(
    initialNumbers as ReadonlyArray<number>
  );

  const deleteNumber = (value: number) => {
    const index = numbers.indexOf(value);

    setNumbers([...numbers.slice(0, index), ...numbers.slice(index + 1)]);
  };

  const resetNumbers = () => {
    setNumbers(initialNumbers);
  };

  return {
    numbers,
    setNumbers,
    deleteNumber,
    resetNumbers,
  };
};
