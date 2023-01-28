import { UserType } from "./types";

export const updateObjectInArray = (items: Array<UserType>, itemId: number, objPropName: string, newObjProps: { followed: boolean }): Array<UserType> => {
    return items.map(obj => {
        if (obj[objPropName] === itemId) {
            return {...obj, ...newObjProps}
        }
        return obj;
    });
};