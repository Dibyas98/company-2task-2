import { useSelector, useDispatch } from "react-redux";
const cities = ["Las Vegas", "London", "Los Angeles", "New York"];
const CityList = () => {
  const ClickedCities = useSelector((state) => state.clickedCity);
  const dispatch = useDispatch();

  function handleClick() {
    if (ClickedCities.length > 0) {
      fnFetch(ClickedCities[0]);
      const unshiftarray = [...ClickedCities];
      unshiftarray.shift();
      dispatch({ type: "clickedCity", payload: unshiftarray });
    }
  }
  // Here is the fetching of city data after checking if data is already present or not
  function fnFetch(query) {
    fetch(
      `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${query}`
    )
      .then((res) => res.json())
      .then((fetchedData) =>
        dispatch({
          type: "selectedFetchedData",
          payload: { name: query, ...fetchedData }
        })
      );
  }

  return (
    <div className="citylist">
      <button onClick={() => handleClick()} className="get-weather">
        Get Weather
      </button>
      <div className="table">
        <p className="city-list-title">City</p>
        {cities.map((item, index) => (
          <p
            key={index}
            // onClick={() => handleSelected(item)}
            className={
              !ClickedCities.includes(item)
                ? "city-list-selected"
                : "city-list-unselected"
            }
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
export default CityList;
