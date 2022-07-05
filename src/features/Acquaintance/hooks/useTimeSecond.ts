import { useEffect, useRef } from "react";

const getFormatedTime = (min: number, sek: number) => {
  if (sek === 60) {
    return `${min}:00`;
  }

  if (min >= 1) {
    return `${min}:${sek >= 10 ? sek : `0${sek}`}`;
  }

  return `${sek}`;
};

export const useTimeSecond = (cooldown: number, format: "m" | "s" = "m") => {
  const sekCount = useRef(60);
  const minCount = useRef(cooldown);

  const timeTikerRef: any = useRef();

  useEffect(() => {
    timeTikerRef.current.innerText = getFormatedTime(
      minCount.current,
      sekCount.current
    );

    const addTimeSecond = setInterval(() => {
      --sekCount.current;

      if (sekCount.current === 0 && minCount.current) {
        sekCount.current = 60;
      }

      if (sekCount.current === 59) {
        --minCount.current;
      }

      timeTikerRef.current.innerText = getFormatedTime(
        minCount.current,
        sekCount.current
      );

      if (sekCount.current === 0) {
        clearInterval(addTimeSecond);
      }
    }, 500);

    return () => {
      clearInterval(addTimeSecond);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return timeTikerRef;
};
