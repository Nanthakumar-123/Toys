import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

const Update = () => {
  const [ProductItems, setProductItems] = useState([]);

  useEffect(() => {
    fetch(`https://kidstouykiddy.onrender.com/getdata`)
      .then((res) => res.json())
      .then((data) => setProductItems(data))
      .catch((error) => {
        console.error("Fetch error:", error);
        toast.error("Failed to load data");
      });
  }, []);

  const DeleteItems = (id) => {
    fetch(`https://kidstouykiddy.onrender.com/del/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.error("Deleted successfully");
        setProductItems((prevProductItems) =>
          prevProductItems.filter((Item) => Item._id !== id)
        );
      })
      .catch((error) => {
        console.error("Delete error:", error);
        toast.error("Failed to delete item");
      });
  };

  return (
    <div className="card table2">
      <div className="card-body">
        <table>
          <thead>
            <tr>
              <th>TITLE</th>
              <th>IMAGE</th>
              <th>DES</th>
              <th>PRICE</th>
              <th>TOYSTYPE</th>
              <th>QUANTITY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {ProductItems?.map((Item) => (
              <tr key={Item._id}>
                <td>{Item.title}</td>
                <td>
                  <img src={Item.img} alt="" />
                </td>
                <td>{Item.des}</td>
                <td>{Item.price}</td>
                <td>{Item.food}</td>
                <td>{Item.quantity}</td>
                <td>
                  <button
                    className="table3"
                    onClick={() => DeleteItems(Item._id)}
                  >
                    Delete
                  </button>
                  <Link to={`/edit/${Item._id}`}>
                    <button>
                      <FiEdit />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Update;
