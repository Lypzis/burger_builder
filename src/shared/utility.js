/**
 * Receives two objects and turn into a one with updated properties.
 * @param {*} oldObject object
 * @param {*} updatedProperties custom object with properties inside. eg: { potato: 1 }
 */
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject, // deep clone, because of 'spread'
        ...updatedProperties
    }
}