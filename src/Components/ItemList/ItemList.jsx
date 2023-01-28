import React from "react";
import "./ItemList.scss";
import trash from "../Icons/trash.png";

const ItemList = ({
  tasks,
  deleteTask,
  deleteAll,
  setCheck,
  setDataToEdit,
}) => {
  if (tasks.length === 0) {
    return (
      <p
        className="text-center"
        style={{ fontFamily: "sans-serif", fontSize: "15px",marginTop:'50px',color: "gray" }}
      >
        {" "}
        No tasks
      </p>
    );
  }
  return (
    <div className="list-Container">
      <ul className="ul-List">
        {tasks.map((item) => (
          <div
            className=" bg-ligth  div-li"
            key={item.id}
          >
            <div>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => setCheck(item.id)}
              />
            </div>
            <div>
              <p
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.task}{" "}
              </p>
            </div>
            <div className="div-Actions" style={{display:'flex'}}>
              <div className="div-edit"style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'3px',marginBottom:'3px'}} >
                <button className="btn btn-dark" style={{width:'auto',height:'auto' , marginRight:'5px'}} onClick={() => setDataToEdit(item)}>
                  {" "}
                  Edit{" "}
                </button>
              </div>
              <div className="div-delete" >
                <button
                  className="btn btn-danger"
                  style={{ width: "auto", height: "auto" }}
                  onClick={() => deleteTask(item.id)}
                >
                  {" "}
                  <img src={trash} className="icon-delete" alt="" />{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
      {tasks.length > 0 && (
        <div className="div-button-delete-all">
          <button onClick={() => deleteAll()} className="btn btn-danger">
            Delete All
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemList;
