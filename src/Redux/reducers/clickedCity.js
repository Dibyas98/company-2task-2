const initialState = ["London", "New York", "Los Angeles", "Las Vegas"];
if (initialState.length > 1) {
  initialState.sort();
}
const clickedCity = (state = initialState, action) => {
  switch (action.type) {
    case "AfterDelete":
      return (state = [...state, action.payload]);
    case "clickedCity":
      return (state = action.payload);
    default:
      return state;
  }
};
export default clickedCity;
