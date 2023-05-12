import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/booking?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure want to delete !");

    if (proceed) {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.deletedCount>0){
            alert('Delete successful');
            const remaining = bookings.filter( booking => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleUpdateBooking = id => {
    fetch(`http://localhost:5000/booking/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: "confirmed"})

    })
    .then(res=>res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount>0){
            const remaining = bookings.filter(booking => booking._id !== id);
            const updatedBooking = bookings.find(booking => booking._id === id);
            updatedBooking.status = 'confirmed';
            const newBookings = [updatedBooking, ...remaining];
            setBookings(newBookings);
        }
        
    })
  }

  console.log(bookings);

  return (
    <div>
      <h2 className="text-5xl mb-5">My Bookings: {bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                bookings.map(booking => <BookingRow 
                    key={booking._id} 
                    booking={booking}
                    handleDelete={handleDelete}
                    handleUpdateBooking={handleUpdateBooking}
                    ></BookingRow>)
            } 
          </tbody>
        
        </table>
      </div>
    </div>
  );
};

export default Bookings;
