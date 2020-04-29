export const ADD_FEATURE = "ADD_FEATURES"
export const REMOVE_FEATURE = "REMOVE FEATURES"


export function addFeature(item) {
    return {
        type: ADD_FEATURE,
        payload:item,
    };
}

export function removeFeature(item) {
    console.log(item)
    return {
        type:  REMOVE_FEATURE,
        payload:item
    }
}