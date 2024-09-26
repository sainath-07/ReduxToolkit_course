import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addusers, deleteusers, udpateusers } from "../redux/AdduserSlice";

const AddUsers = () => {
  const [user, setuser] = useState("");
  const [toggle, settoggle] = useState(false);
  const [checkId, setCheckId] = useState("");
  const newusers = useSelector((state) => state.AddUsers.users);
  const dispatch = useDispatch();

  const handleuser = (e) => {
    setuser(e.target.value);
  };

  const handleAddUsers = () => {
    if (user == 0 || user == false) {
      return alert("please enter the text");
    }
    dispatch(addusers(user));
    setuser("");
  };

  const handleDelete = (id) => {
    dispatch(deleteusers(id));
  };

  const handleEdit = (value, id) => {
    settoggle(true);
    setuser(value);
    setCheckId(id);
  };

  const handleUpdate = () => {
    settoggle(false);
    dispatch({
      type: udpateusers.type,
      payload: checkId,
      users: user,
    });
    setuser("");
  };
  return (
    <div>
      <input type="text" value={user} onChange={handleuser} />
      {toggle ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAddUsers}>AddUsers</button>
      )}

      <div>
        {newusers.map((value, index) => {
          return (
            <div style={{ display: "flex" }} key={index}>
              <p>{value}</p>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(value, index)}>Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddUsers;
