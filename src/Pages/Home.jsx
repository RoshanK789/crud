import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setId }) => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const [deleteData, setDeleteData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async () => {
    await axios
      .get("https://664f1566fafad45dfae241b4.mockapi.io/api/Users")
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
  };
  const handleEdit = (id) => {
    setId(id);
    navigate(`/Edit/:${id}`);
  };
  const handleDelete = async (id) => {
    await axios
      .delete(`https://664f1566fafad45dfae241b4.mockapi.io/api/Users/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
 {/*      <div className="row row-cols-1 row-cols-md-2  g-4">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Website</th>
                <th scope="col">Company Name</th>
                <th scope="col">Bs</th>
                <th scope="col">CatchPhrase</th>
                <th scope="col">Street</th>
                <th scope="col">City</th>
                <th scope="col">Lat</th>
                <th scope="col">long</th>
                <th scope="col">Suite</th>
                <th scope="col">Zip Code</th>
                <th colSpan={2} className="text-center ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {user.map((element, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{element.id}</th>
                    <td>{element.name}</td>
                    <td>{element.username}</td>
                    <td>{element.email}</td>
                    <td>{element.phone}</td>
                    <td>{element.website}</td>
                    <td>{element.company.company_name}</td>
                    <td>{element.company.company_bs}</td>
                    <td>{element.company.company_catchPhrase}</td>
                    <td>{element.address.street}</td>
                    <td>{element.address.city}</td>
                    <td>{element.address.lat}</td>
                    <td>{element.address.lng}</td>
                    <td>{element.address.suite}</td>
                    <td>{element.address.zipcode}</td>
                    <td>
                      <button
                        className="btn btn-primary "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Edit"
                        onClick={() => {
                          handleEdit(element.id);
                        }}
                      >
                        <i className="ri-edit-line"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Delete"
                        onClick={() => {
                          handleDelete(element.id);
                        }}
                      >
                        <i className="ri-delete-bin-4-line"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <button
            className="btn btn-success"
            onClick={() => {
              navigate("/create");
            }}
          >
            <i className="ri-add-box-line"></i> create
          </button>
        </div>
      </div> */}
<div className="align-right mx-3 my-3">
<button
            className="btn btn-primary"
           
            onClick={() => {
              navigate("/create");
            }}
          >
            <i className="ri-add-box-line"></i> Add New
          </button>
</div>
<br>
</br>

      <div className="row row-cols-1 row-cols-md-2 g-4 margins">
        {user.map((element, index) => {
          return (
            <div key={index}>
              <div className="col border">
                <div className="card ss">
                  <div className="card-body ">
                    <h5 className="card-title text-center">
                      UserDetails {element.id}
                    </h5>
                    {/* Name & username */}
                    <div className="row mx-2">
                      <div className="col-6 border">
                        <div className="row">
                          <div className="col-6">
                            <p className="padd text">Name :</p>
                          </div>
                          <div className="col-6">
                            <p className=" text">{element.name}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 border">
                        <div className="row">
                          <div className="col-6 ">
                            <p className="padd text">Username :</p>
                          </div>
                          <div className="col-6">
                            <p className=" text">{element.username}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*email & website */}
                    <div className="row mx-2">
                      <div className="col-6 border">
                        <div className="row">
                          <div className="col-6">
                            <p className="padd text">Email :</p>
                          </div>
                          <div className="col-6 ">
                            <p className=" text">{element.email}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 border">
                        <div className="row">
                          <div className="col-6 ">
                            <p className="padd text">website :</p>
                          </div>
                          <div className="col-6 ">
                            <p className=" text">{element.website}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*phoen & City */}
                    <div className="row mx-2">
                      <div className="col-6 border">
                        <div className="row">
                          <div className="col-6 ">
                            <p className="padd text">Phone Number :</p>
                          </div>
                          <div className="col-6 ">
                            <p className=" text">{element.phone}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 border">
                        <div className="row">
                          <div className="col-6">
                            <p className="padd text">City :</p>
                          </div>
                          <div className="col-6">
                            <p className=" text">{element.address.city}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*street & zip */}
                    <div className="row mx-2">
                      <div className="col-6 border">
                        <div className="row">
                          <div className="col-6">
                            <p className="padd text">Street :</p>
                          </div>
                          <div className="col-6">
                            <p className=" text">{element.address.street}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 border">
                        <div className="row">
                          <div className="col-6 ">
                            <p className="padd text">Zip Code :</p>
                          </div>
                          <div className="col-6 ">
                            <p className=" text">{element.address.zipcode}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*lat & lng */}
                    <div className="row mx-2">
                      <div className="col-6 border">
                        <div className="row">
                          <div className="col-6">
                            <p className="padd text">Lat :</p>
                          </div>
                          <div className="col-6">
                            <p className=" text">{element.address.lat}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 border">
                        <div className="row">
                          <div className="col-6 ">
                            <p className="padd text">lan :</p>
                          </div>
                          <div className="col-6 ">
                            <p className=" text">{element.address.lng}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*companyname & bs */}
                    <div className="row mx-2">
                      <div className="col-6 border">
                        <div className="row">
                          <div className="col-6">
                            <p className="padd text">Company Name :</p>
                          </div>
                          <div className="col-6">
                            <p className=" text">
                              {element.company.company_name}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 border">
                        <div className="row">
                          <div className="col-6 ">
                            <p className="padd text">BS :</p>
                          </div>
                          <div className="col-6 ">
                            <p className=" text">
                              {element.company.company_bs}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*catch & suite */}
                    <div className="row mx-2">
                      <div className="col-6 border">
                        <div className="row">
                          <div className="col-6">
                            <p className="padd text">catchPhrase :</p>
                          </div>
                          <div className="col-6">
                            <p className=" text">
                              {element.company.company_catchPhrase}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 border">
                        <div className="row">
                          <div className="col-6 ">
                            <p className="padd text">suite :</p>
                          </div>
                          <div className="col-6 ">
                            <p className=" text">{element.address.suite}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mx-2 dd">
                      <div className="col-6">
                        <div className="row mx-lg-5">
                          <div className="col-12 my-2 mx-lg-5">
                            <button
                              className="btn btn-primary"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Edit"
                              onClick={() => {
                                handleEdit(element.id);
                              }}
                            >
                              <i className="ri-edit-line"></i> Edit
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 ">
                        <div className="row mx-lg-5">
                          <div className="col-12 my-2 mx-lg-5">
                            <button
                              className="btn btn-danger mx-auto"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Delete"
                              onClick={() => {
                                handleDelete(element.id);
                              }}
                            >
                              <i className="ri-delete-bin-4-line"></i> Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
