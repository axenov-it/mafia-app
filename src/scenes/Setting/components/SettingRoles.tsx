/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
    preset: any
}

export const SettingRoles = ({ preset }: Props) => {

    return (
        <div
            css={css`
        text-transform: capitalize;
      `}
        >
            <h3>Ролі</h3>
            <div
                css={css`
                        display:flex;
                        flex-wrap:wrap ;
                        justify-content:space-around;
                        border:  1px solid rgba(0, 0, 0, 0.23);
                        padding : 25px 10px;
                        border-radius:4px ;
                        li{
                            font-weight:500;
                            font-size:17px ;
                        }
                      `}
            >{preset ? preset.roles?.map((item: any, index: number) => <li key={index}>{item}</li>) : ""}</div>
        </div>
    )
}
