export const deleteRow = (idRow) => {
    // console.log(idRow)
    return {
        type: "DELETE_ROW",
        idRow
    }
}
