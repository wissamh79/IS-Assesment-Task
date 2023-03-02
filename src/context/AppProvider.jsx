import React, { useState, useReducer } from "react";
import { AppContext } from ".";

import { reducer, actions, initialState } from "./state";
import {
  SettingsRounded,
  WidgetsRounded,
  AccountCircleRounded,
  PeopleRounded,
  PhotoCameraFrontRounded,
} from "@mui/icons-material";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const features = [
    {
      id: 1,
      title: "Home",
      to: "/",
      icon: <SettingsRounded />,
    },
    {
      id: 2,
      title: "Categories",
      to: "",
      icon: <WidgetsRounded />,
    },
    {
      id: 3,
      title: "Account",
      to: "",
      icon: <AccountCircleRounded />,
    },

    {
      id: 5,
      title: "Users",
      to: "",
      icon: <PeopleRounded />,
    },
    // {
    //   id: 6,
    //   title: "",
    //   to: "",
    //   icon: <PhotoCameraFrontRounded />,
    // },
  ];
  const [isSide, setIsSide] = useState(false);
  const handleSideBar = () => setIsSide(!isSide);

  return (
    <AppContext.Provider
      value={{
        isSide,
        setIsSide,
        handleSideBar,

        state,
        dispatch,
        features,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
