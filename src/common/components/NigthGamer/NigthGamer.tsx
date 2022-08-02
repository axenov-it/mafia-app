import { GamerInterface } from "common/interfaces";

interface Props {
  gamer: GamerInterface;
}

export const NigthGamer = (props: Props) => {
  console.log(props.gamer);
  return <h2>Nigth Gamer</h2>;
};
