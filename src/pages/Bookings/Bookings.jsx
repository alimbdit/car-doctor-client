import { useContext, useEffect, useState } from "react";

import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate()

  const url = `https://car-doctor-server-beta-nine.vercel.app/booking?email=${user.email}`;

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('car-access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error){
          setBookings(data)
        }
        else{
          //  logout and then navigate
          navigate('/')
        }
      });
  }, [url, navigate]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure want to delete !");

    if (proceed) {
      fetch(`https://car-doctor-server-beta-nine.vercel.app/booking/${id}`, {
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
    fetch(`https://car-doctor-server-beta-nine.vercel.app/booking/${id}`, {
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
