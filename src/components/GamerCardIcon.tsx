/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ListItemIcon, ListItemText } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";

interface Props {
  name: string;
  type: "mafia" | "city" | "self";
}

const typeIcons = {
  mafia: {
    color: "white",
    background: "black",
  },
  city: {
    color: "white",
    background: "green",
  },
  self: {
    color: "white",
    background: "grey",
  },
};

export const GamerCardIcon = ({ name, type }: Props) => {
  return (
    <>
      <ListItemIcon
        css={css`
          min-width: 35px;
        `}
      >
        <GroupIcon
          css={css`
            background: ${typeIcons[type].background};
            color: white;
          `}
        />
      </ListItemIcon>
      <ListItemText primary={name} />
    </>
  );
};
