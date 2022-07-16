/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { useForm } from '../hooks/useForm';
import { PresetInterface } from "common/interfaces";
import { SettingRoles } from "../components";
import { Alert } from "./Alert";



export const SettingForm = () => {
    const {
        openAlert,
        preset,
        onSubmit,
        countGamers,
        countGamer,
        blurHendler,
        countDirty,
        countError,
        presets,
        formValid,
        presetId,
        presetIdGamer,
        presetIdError,
        presetIdDirty,
        presetType } = useForm();

    return (
        <Box sx={{ maxWidth: 500, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>
            <form onSubmit={onSubmit}
                css={css`
                    display: flex;
                    flex-direction:column;
                    justify-content: space-between;
                    align-items: center;
                    width:100%;
            `}
            >
                <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <FormControl sx={{ mt: 5, minWidth: 200 }}>
                        <InputLabel >Кількість</InputLabel>
                        <Select
                            name="countGamers"
                            value={countGamers}
                            label="Кількість"
                            onChange={(e) => countGamer(e)}
                            onBlur={e => blurHendler(e)}
                            error={countDirty && Boolean(countError && countError)}
                        >
                            {presets.map((element, index) => <MenuItem key={index} value={element.type}>{element.type}</MenuItem>)}
                        </Select>
                        <FormHelperText error> {countDirty && countError && countError}</FormHelperText>
                    </FormControl>
                    <Button type="submit" sx={{ mt: 5, minWidth: 200 }} variant="contained" disabled={!formValid}>Зберегти</Button>
                </Box>
                <FormControl sx={{ mt: 3, width: "100%" }}>
                    <InputLabel >Оберіть гру</InputLabel>
                    <Select
                        name="presetId"
                        value={presetId}
                        id="game"
                        label="0беріть гру"
                        onChange={(e) => presetIdGamer(e)}
                        onBlur={e => blurHendler(e)}
                        error={presetIdDirty && Boolean(presetIdError && presetIdError)}
                    >
                        {presetType ? presetType.presets.map((item: PresetInterface) => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>) : null}
                    </Select>
                    <FormHelperText error> {presetIdDirty && presetIdError}</FormHelperText>
                    <SettingRoles preset={preset} />
                </FormControl>
            </form >
            {openAlert ? <Alert /> : ''}
        </Box >
    )
}
