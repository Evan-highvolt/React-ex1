import { useState } from "react";

const CarDetailes = () => {
  const [carInfo, setCar] = useState({
    make: "",
    model: "",
    year: "",
  });

  const handelChange = (e) => {
    setCar({ ...carInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Information</h2>
      <label>Marque</label>
      <input
        type="text"
        name="make"
        value={carInfo.make}
        onChange={handelChange}
      />
      <label>Model</label>
      <input
        type="text"
        name="model"
        value={carInfo.model}
        onChange={handelChange}
      />

      <label>Année</label>
      <input
        type="text"
        name="year"
        value={carInfo.year}
        onChange={handelChange}
      />
    </div>
  );
};

export default CarDetailes;
