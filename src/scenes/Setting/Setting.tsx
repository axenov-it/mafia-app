/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SettingForm, SettingRoles } from "./components";


export const Settings = () => {

    return (
        <div>
            <h2
                css={css`
                      text-align:center;
                      margin: 20px 0 0 0;
                    `}
            >Встановлення конфігурації</h2>
            <SettingForm />

        </div>
    );
};
