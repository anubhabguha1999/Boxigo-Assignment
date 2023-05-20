import React, { Fragment } from "react";

function LivingRoom(props) {
  return (
    <Fragment>
      <div className="row mt-3">
        <div className="col-sm-3">
          <h6>Furnitures</h6>
        </div>
        <div className="col-sm-3">
          <h6>Electrical</h6>
        </div>
        <div className="col-sm-3">
          <h6>Fragile</h6>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-2">
          1 seater sofa <b>wooden</b>
        </div>
        <div className="col-sm-1">2</div>
        <div className="col-sm-2">LCD TV 30-40 inch</div>
        <div className="col-sm-1">1</div>
        <div className="col-sm-2">Bulb</div>
        <div className="col-sm-1">1</div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-2">
          3 seater sofa <b>wooden</b>
        </div>
        <div className="col-sm-1">1</div>
        <div className="col-sm-2">
          Home Theatre <b>3+1 speakers</b>
        </div>
        <div className="col-sm-1">1</div>
        <div className="col-sm-2">Pictue/Poster/Painting</div>
        <div className="col-sm-1">1</div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-2">TV Cabinet</div>
        <div className="col-sm-1">1</div>
        <div className="col-sm-2">Ceiling Fan</div>
        <div className="col-sm-1">1</div>
        <div className="col-sm-2">
          Clock <b>small</b>
        </div>
        <div className="col-sm-1">1</div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-2">
          Study table <b>medium</b>
        </div>
        <div className="col-sm-1">1</div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-2">
          Teapoy <b>Glass top</b>
        </div>
        <div className="col-sm-1">1</div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-2">
          Shoe Rack <b>small</b>
        </div>
        <div className="col-sm-1">1</div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-2">Plastic Chair</div>
        <div className="col-sm-1">2</div>
      </div>
    </Fragment>
  );
}

export default LivingRoom;
