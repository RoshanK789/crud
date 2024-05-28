import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
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
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get(`https://664f1566fafad45dfae241b4.mockapi.io/api/Users/${id}`)
      .then((res) => setEditData(res.data))
      .catch((error) => console.log(error));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const [key, subKey] = name.split(".");

    if (subKey) {
      setEditData((prevState) => ({
        ...prevState,
        [key]: { ...prevState[key], [subKey]: value },
      }));
    } else {
      setEditData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://664f1566fafad45dfae241b4.mockapi.io/api/Users/${id}`,
        editData
      )
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
              value={editData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={editData.username}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Street</label>
            <input
              type="text"
              className="form-control"
              name="address.street"
              value={editData.address.street}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="address.city"
              value={editData.address.city}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label className="form-label">suite</label>
            <input
              type="text"
              className="form-control"
              name="address.suite"
              value={editData.address.suite}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label className="form-label">lat</label>
            <input
              type="text"
              className="form-control"
              name="address.lat"
              value={editData.address.lat}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label className="form-label">lng</label>
            <input
              type="text"
              className="form-control"
              name="address.lng"
              value={editData.address.lng}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={editData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Website</label>
            <input
              type="text"
              className="form-control"
              name="website"
              value={editData.website}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={editData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Company Name</label>
            <input
              type="text"
              className="form-control"
              name="company.company_name"
              value={editData.company.company_name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-5">
            <label className="form-label">Company Bs</label>
            <input
              type="text"
              className="form-control"
              name="company.company_bs"
              value={editData.company.company_bs}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Company catchphrase</label>
            <input
              type="text"
              className="form-control"
              name="company.company_catchPhrase"
              value={editData.company.company_catchPhrase}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Zip Code</label>
            <input
              type="text"
              className="form-control"
              name="address.zipcode"
              value={editData.address.zipcode}
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Save Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
