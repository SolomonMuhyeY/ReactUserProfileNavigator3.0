import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { client } from "./UserInfo";

function UserDescription() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = client.find((cl) => cl.id == id);

  const handleGoBack = () => {
    navigate(-1);
  };
  if (!user) {
    return <div className='font-bold italic'>User not found</div>;
  }
  return (
    <div className='flex-wrap max-w-screen-md overflow-auto overflow-x-hidden text-left md:w-600'>
      <img className='text-left mr-auto' src={user.img} alt={user.name} />
      <h2 className='text-2xl font-bold italic m-2'>{user.name}</h2>
      <p className='text-left'>{user.description}</p>
      <button
        className='bg-blue-500 rounded text-white py-2 px-5 mt-5 transition duration-300 cursor-pointer hover:bg-blue-400 hover:text-black'
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
}

export default UserDescription;
