import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addusers, deleteusers } from "../redux/AdduserSlice";

const AddUsers = () => {
  const [user, setuser] = useState("");
  const newusers = useSelector((state) => state.AddUsers.users);

  const dispatch = useDispatch();
  const handleuser = (e) => {
    setuser(e.target.value);
  };

  const handleAddUsers = () => {
    dispatch(addusers(user));
    setuser("");
  };

  const handleDelete = (id) => {
    dispatch(deleteusers(id));
  };
  return (
    <div>
      <input type="text" value={user} onChange={handleuser} />
      <button onClick={handleAddUsers}>AddUsers</button>

      <div>
        {newusers.map((value, index) => {
          return (
            <div style={{ display: "flex" }} key={index}>
              <p>{value}</p>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddUsers;
