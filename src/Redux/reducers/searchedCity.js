const initialState = "a";
const SearchedCity = (state = initialState, action) => {
  switch (action.type) {
    case "searched":
      return (state = action.payload);

    default:
      return state;
  }
};
export default SearchedCity;
