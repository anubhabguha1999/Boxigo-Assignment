import React, { Fragment, useState } from "react";
import LivingRoom from "./LivingRoom";

function InventoryDetails(props) {
  {
    console.log(props.data.items.inventory[0].category.length, "propssss");
  }

  let [showDetails1, setshowDetails1] = useState(false);
  let [showDetails2, setshowDetails2] = useState(false);
  let [showDetails3, setshowDetails3] = useState(false);
  let [showDetails4, setshowDetails4] = useState(false);
  let [showDetails5, setshowDetails5] = useState(false);

  let [id, setId] = useState("");

  return (
    <Fragment>
      <div className="row" >
        <h5>Inventory Details</h5>
        <button className="edit-inventory" >Edit Inventory</button>
      </div>
      <div className="row mt-4 inventory justify-content-between">
        <span>
          Furniture{" "}
          <span className="bg-danger rounded-0 text-white border">
            {props.data.items.inventory[0].category.length}
          </span>
        </span>
        <div
          className="move-details bg-transparent border-white"
          id={props.data.estimate_id}
          onClick={(e) => {
            e.preventDefault();
            setshowDetails1(!showDetails1);
            setId(props.data.estimate_id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </div>
      </div>
      {showDetails1 === true ? (
        props.data.estimate_id === id ? (
          <LivingRoom data={props.data.item} />
        ) : (
          <div></div>
        )
      ) : (
        <div></div>
      )}

      <div className="row mt-1 inventory justify-content-between">
        <span>
          Electronics{" "}
          <span className="bg-danger rounded-0 text-white border">
            {props.data.items.inventory[1].category.length}
          </span>
        </span>
        <div
          className="move-details bg-transparent border-white"
          id={props.data.estimate_id}
          onClick={(e) => {
            e.preventDefault();
            setshowDetails2(!showDetails2);
            setId(props.data.estimate_id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </div>{" "}
      </div>
      {showDetails2 === true ? (
        props.data.estimate_id === id ? (
          <LivingRoom data={props.data.item} />
        ) : (
          <div></div>
        )
      ) : (
        <div></div>
      )}

      <div className="row mt-1 inventory justify-content-between">
        <span>
          Vehicle{" "}
          <span className="bg-danger rounded-0 text-white border">
            {props.data.items.inventory[2].category.length}
          </span>
        </span>
        <div
          className="move-details bg-transparent border-white"
          id={props.data.estimate_id}
          onClick={(e) => {
            e.preventDefault();
            setshowDetails3(!showDetails3);
            setId(props.data.estimate_id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </div>{" "}
      </div>
      {showDetails3 === true ? (
        props.data.estimate_id === id ? (
          <LivingRoom data={props.data.item} />
        ) : (
          <div></div>
        )
      ) : (
        <div></div>
      )}

      <div className="row mt-1 inventory justify-content-between">
        <span>
          boxes_trolley{" "}
          <span className="bg-danger rounded-0 text-white border">
            {props.data.items.inventory[3].category.length}
          </span>
        </span>
        <div
          className="move-details bg-transparent border-white"
          id={props.data.estimate_id}
          onClick={(e) => {
            e.preventDefault();
            setshowDetails4(!showDetails4);
            setId(props.data.estimate_id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </div>{" "}
      </div>
      {showDetails4 === true ? (
        props.data.estimate_id === id ? (
          <LivingRoom data={props.data.item} />
        ) : (
          <div></div>
        )
      ) : (
        <div></div>
      )}
      <div className="row mt-1 inventory justify-content-between">
        <span>
          custom items{" "}
          <span className="bg-danger rounded-0 text-white border">
            {props.data.items.inventory[4].category.length}
          </span>
        </span>
        <div
          className="move-details bg-transparent border-white"
          id={props.data.estimate_id}
          onClick={(e) => {
            e.preventDefault();
            setshowDetails5(!showDetails5);
            setId(props.data.estimate_id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </div>{" "}
      </div>
      {showDetails5 === true ? (
        props.data.estimate_id === id ? (
          <LivingRoom data={props.data.item} />
        ) : (
          <div></div>
        )
      ) : (
        <div></div>
      )}

      <div className="row mt-4">
        <h5>House Details</h5>
        <button className="edit-house">Edit house details</button>
      </div>
      <div className="row mt-4 mb-3">
        <h6>Existing House Details</h6>
      </div>
      <div className="row">
        <div className="col-sm-3">Floor No.</div>
        <div className="col-sm-3">Elevator Available</div>
        <div className="col-sm-3">Packing Required</div>
        <div className="col-sm-3">Distance from truck to door</div>
      </div>
      <div className="row">
        <div className="col-sm-3">{props.data.old_floor_no}</div>
        <div className="col-sm-3">{props.data.old_elevator_availability}</div>
        <div className="col-sm-3">{props.data.packing_service}</div>
        <div className="col-sm-3">{props.data.old_parking_distance}</div>
      </div>
      <div className="row mt-3">
        <h6>Additional Information</h6>
      </div>
      <div className="row mt-1">No additional info</div>
      <div className="row mt-3 additional"></div>

      <div className="row mt-4 mb-3">
        <h6>New House Details</h6>
      </div>
      <div className="row">
        <div className="col-sm-3">Floor No.</div>
        <div className="col-sm-3">Elevator Available</div>
        <div className="col-sm-3">Packing Required</div>
        <div className="col-sm-3">Distance from truck to door</div>
      </div>
      <div className="row">
        <div className="col-sm-3">{props.data.new_floor_no}</div>
        <div className="col-sm-3">{props.data.new_elevator_availability}</div>
        <div className="col-sm-3">{props.data.unpacking_service}</div>
        <div className="col-sm-3">{props.data.new_parking_distance}</div>
      </div>
      <div className="row mt-3">
        <h6>Additional Information</h6>
      </div>
      <div className="row mt-1">No additional info</div>
      <div className="row mt-3 additional"></div>
    </Fragment>
  );
}

export default InventoryDetails;
