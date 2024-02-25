import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

const Tr = ({ data, hrs }) => {
  const SelectedListData = useSelector((state) => state.SelectedListData);
  const SearchedCity = useSelector((state) => state.SearchedCity);
  const dispatch = useDispatch();

  function handleClick(name) {
    const newList = SelectedListData.filter((item) => item.name !== name);
    dispatch({ type: "AfterDelete", payload: name });
    dispatch({ type: "newDatadeletedData", payload: newList });
  }

  const cityhrs1 = data.date_and_time.split(",");
  const cityhrs2 = cityhrs1[1].split(":");

  return (
    <tr
      style={{ backgroundColor: SearchedCity === data.name ? "gold" : "white" }}
    >
      <td>{data.name}</td>
      <td>
        <input
          style={{ width: "80%" }}
          type="text"
          defaultValue={data.description}
        />
      </td>
      <td>{data.temp_in_celsius}</td>
      <td>{data.pressure_in_hPa}</td>
      <td>{hrs - cityhrs2[0]}</td>
      <td onClick={() => handleClick(data.name)}>
        <MdDelete />
      </td>
    </tr>
  );
};
export default Tr;
