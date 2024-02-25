const initialState = [];
const SelectedListData = (state = initialState, action) => {
  switch (action.type) {
    case "selectedFetchedData":
      return (state = [...state, action.payload]);
    case "newDatadeletedData":
      return (state = action.payload);

    default:
      return state;
  }
};
export default SelectedListData;
