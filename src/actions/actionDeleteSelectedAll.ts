export const deleteSelectedAll = (dataId) => {
    console.log(dataId)
    return {
        type: "DELETE_SELECTED_ALL_DATA",
        dataId
    }
}