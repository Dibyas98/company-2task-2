import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { useRef } from "react";
import Tr from "../Navbaar/Tr";
const hrs = new Date().getHours();
const DisplayData = () => {
  const SelectedListData = useSelector((state) => state.SelectedListData);
  const cityName = useRef();
  const dispatch = useDispatch();

  // Function to search from input box...............
  function handleSearch() {
    dispatch({ type: "searched", payload: cityName.current.value });
    setTimeout(() => {
      cityName.current.value = "City Name";
      dispatch({ type: "searched", payload: "" });
    }, 3000);
  }

  return (
    <div className="display-data">
      <div className="search">
        <input type="text" placeholder="City Name" ref={cityName} />
        <button style={{ fontSize: "20px" }} onClick={() => handleSearch()}>
          <AiOutlineSearch />
        </button>
      </div>
      <table frame="box" rules="all" className="selected-table">
        <tbody>
          <tr className="selected-table-title">
            <td>City</td>
            <td>Description</td>
            <td>Temprature</td>
            <td>Pressure</td>
            <td>Data age(hrs)</td>
            <td>
              <MdDelete />
            </td>
          </tr>
          {SelectedListData.length === 0 ? (
            <tr>
              <th colSpan="6">
                <h1>No DATA</h1>
              </th>
            </tr>
          ) : (
            <>
              {SelectedListData.map((item, index) => (
                <Tr data={item} key={index} hrs={hrs} />
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default DisplayData;
