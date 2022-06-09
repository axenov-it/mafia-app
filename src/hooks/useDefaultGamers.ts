import { useState } from "react";
import { Gamer, GamerFactory } from "../clases";
import { RoleInterface } from "../interfaces";
import roles from '../mocks/roles.json'

interface ReturnInterface {
    defaultGamers: ReadonlyArray<Gamer>;

}



export const useDefaultGames = (countGamers: number = 5): ReturnInterface => {

    const initialRoles = roles.slice(0, countGamers) as RoleInterface[];

    return {
        defaultGamers: initialRoles.map((role, index) => GamerFactory.createGamer(index + 1, role)),
    };
};
