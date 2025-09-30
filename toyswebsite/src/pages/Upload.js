import React from "react";
import './Upload.css';
import { toast, ToastContainer } from "react-toastify";

const Upload = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const img = form.img.value;
    const food = form.food.value;
    const des = form.des.value;
    const price = form.price.value;
    const quantity = 1;

    if (
      title === "" ||
      img === "" ||
      des === "" ||
      food === "" ||
      price === ""
    ) {
      toast.warn("Fill required fields");
    } else {
      const foods = { title, img, des, food, price, quantity };
      console.log(foods);

      fetch("http://localhost:6030/up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(foods),
      }) 
        .then((res) => res.json())
        .then((data) => {
          toast.success("Added successfully");
          form.reset();
          // window.location.href = "/update";
        })
        .catch((error) => {
          console.error("Upload error:", error);
          toast.error("Failed to upload");
        });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="card upload6">
        <div className="card-body upload5">
          <form onSubmit={handleSubmit}>
            <h2>UPLOAD</h2>

            <div className="upload0">
              <label>
                <b>TITLE</b>
              </label>
              <input type="text" name="title" className="ms-3" />
            </div>

            <div className="upload1">
              <label>
                <b>IMAGE</b>
              </label>
              <input type="text" name="img" className="ms-3" />
            </div>

            <div className="upload2">
              <label>
                <b>TOYS</b>
              </label>
              <input type="text" name="food" className="ms-3" />
            </div>

            <div className="upload3">
              <label>
                <b>DES</b>
              </label>
              <input type="text" name="des" className="ms-3" />
            </div>

            <div className="upload4">
              <label>
                <b>PRICE</b>
              </label>
              <input type="number" name="price" className="ms-3" />
            </div>

            <div className="upload7">
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
