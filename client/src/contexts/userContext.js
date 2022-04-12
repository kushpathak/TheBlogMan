import React, { createContext, useState } from "react";
export const UserContext = createContext();
class UserContextProvider extends React.Component {
  state = {
    userId: localStorage.getItem("userId")
      ? localStorage.getItem("userId")
      : null,
    image: localStorage.getItem("image") ? localStorage.getItem("image") : null,
  };
  setUserId = (id) => {
    localStorage.setItem("userId", id);
    this.setState({
      userId: id,
    });
  };

  setImage = (id) => {
    localStorage.setItem("image", id);
    this.setState({
      ...this.state,
      image: id,
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          setUserId: this.setUserId,
          setImage: this.setImage,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
