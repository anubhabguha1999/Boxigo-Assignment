import React, { Component, Fragment } from "react";
import { db } from "../db/db.js";
import MyMoves from "./MyMoves.js";

class MainComponent extends Component {
  constructor(props) {
    super();
    this.state = { db: db, showMoveDetails: false, id: null, inventory: "" };
  }
  toggleMoveDetails(e) {
    e.preventDefault();

    this.setState({
      showMoveDetails: !this.state.showMoveDetails,
    });
    console.log("hello" + this.state.id);
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 col-sm-3 side-bar">
              <div className="row mt-5">
                <span className="fa fa-truck">MY MOVES</span> 
              </div>

              <div className="row mt-2">
                <span className="fa fa-user"> MY PROFILE</span>
              </div>
              <div className="row mt-2">
                <span className="fa fa-clipboard">GET QUOTE</span> 
              </div>
              <div className="row mt-2">
                <span className="fa fa-sign-out"> LOGOUT </span>
              </div>
            </div>
            
            <div className="col-12 col-sm-9">
              <div className="row mt-3">
                <h4>
                  <b>My Moves</b>
                </h4>
              </div>
              {this.state.db.Customer_Estimate_Flow.map((data) => {
                return (
                  <MyMoves
                    key={data.estimate_id}
                    data={data}
                    showMoveDetails={this.state.showMoveDetails}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MainComponent;
