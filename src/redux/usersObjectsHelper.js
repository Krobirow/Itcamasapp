
export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(obj => {
        if (obj[objPropName] === itemId) {
            return {...obj, ...newObjProps}
        }
        return obj;
    });
};