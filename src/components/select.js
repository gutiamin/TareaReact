import React, { useState } from "react";

const Select = (props) => {
  const [data] = useState(props.data);
  const [selectedData, setSelectedData] = useState("");

  const handleChange = (event) => {
    setSelectedData(event.target.value);
    if (props.onSelectChange) props.onSelectChange(selectedData);
  }

  let options = data.map(data => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ));

  return (
    <select
      name="customSearch"
      className="custom-search-select"
      onChange={handleChange}
    >
      <option>Select Item</option>
      {options}
    </select>
  );
}
export default Select;