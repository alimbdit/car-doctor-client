import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, title, price, service_id, img } = service;

  const handleBookOrder = (event) => {
    event.preventDefault();

    const form = event.target;

    const customerName = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const due = form.due.value;

    const order = {
      customerName,
      date,
      email,
      service: title,
      service_id,
      price,
      img
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){
            alert('service booking completed')
        }
      });

    console.log(order);
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold mb-5">
        Book serviece: {title}
      </h2>

      <form onSubmit={handleBookOrder}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name="due"
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-error text-white"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
