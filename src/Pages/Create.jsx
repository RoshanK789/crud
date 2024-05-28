import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [createData, setCreateData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",

      lat: "",
      lng: "",
    },
    phone: "",
    website: "",
    company: {
      company_name: "",
      company_bs: "",
      company_catchPhrase: "",
    },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const [key, subKey, nestkey] = name.split(".");
    console.log(key, subKey, nestkey);

    console.log(createData);
    if (subKey) {
      setCreateData((prevState) => ({
        ...prevState,
        [key]: { ...prevState[key], [subKey]: value },
      }));
    } else {
      setCreateData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }  
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`https://664f1566fafad45dfae241b4.mockapi.io/api/Users`, createData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    navigate("/");
  };
  return (
    <div>
      <div className="container mt-5">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={createData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={createData.username}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Street</label>
            <input
              type="text"
              className="form-control"
              name="address.street"
              value={createData.address.street}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="address.city"
              value={createData.address.city}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label className="form-label">suite</label>
            <input
              type="text"
              className="form-control"
              name="address.suite"
              value={createData.address.suite}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label className="form-label">lat</label>
            <input
              type="text"
              className="form-control"
              name="address.lat"
              value={createData.address.lat}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label className="form-label">lng</label>
            <input
              type="text"
              className="form-control"
              name="address.lng"
              value={createData.address.lng}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={createData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Website</label>
            <input
              type="text"
              className="form-control"
              name="website"
              value={createData.website}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email ID</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={createData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Company Name</label>
            <input
              type="text"
              className="form-control"
              name="company.company_name"
              value={createData.company.company_name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Company Bs</label>
            <input
              type="text"
              className="form-control"
              name="company.company_bs"
              value={createData.company.company_bs}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Company catchphrase</label>
            <input
              type="text"
              className="form-control"
              name="company.company_catchPhrase"
              value={createData.company.company_catchPhrase}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Zip Code</label>
            <input
              type="text"
              className="form-control"
              name="address.zipcode"
              value={createData.address.zipcode}
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
