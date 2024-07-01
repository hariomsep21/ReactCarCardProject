import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./ViewRegis.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ViewRegis = () => {
  const [userlist, setUserList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/userReg")
      .then((res) => res.json())
      .then((data) => setUserList(data));
  }, []);

  const deleteUser = (id) => {
    fetch(`http://localhost:5000/userReg/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setUserList(userlist.filter((user) => user.id !== id));
          toast.success("Record deleted successfully");
        } else {
          toast.error("Failed to delete record");
        }
      })
      .catch((err) => {
        toast.error(`Error deleting record: ${err.message}`);
      });
  };

  const editUser = (id) => {
    navigate(`/editreg/${id}`);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (field) => {
    const sortedList = [...userlist].sort((a, b) => {
      if (a[field] < b[field]) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (a[field] > b[field]) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
    setUserList(sortedList);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
  };

  const filteredUsers = userlist.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`container ${style.container}`}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Registered Users</h2>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by username"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th onClick={() => handleSort("username")}>UserName</th>
                <th onClick={() => handleSort("email")}>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => editUser(user.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewRegis;
