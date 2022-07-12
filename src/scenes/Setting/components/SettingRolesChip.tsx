import { Box, Chip } from "@mui/material";
import roles from "mocks/roles.json";

interface Props {
  selected: string[];
}

export const SettingRolesChip = ({ selected }: Props) => (
  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
    {selected.map((roleId) => (
      <Chip
        key={roleId}
        label={roles.find((role) => role.id === roleId)?.name}
      />
    ))}
  </Box>
);
