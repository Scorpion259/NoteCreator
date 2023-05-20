import React from "react";
import UserDataProvider from "./UserDataProvider";

const UserContent = () => {
  return (
    <UserDataProvider>
      {({ user }) => {
        if (!user.userLogin) {
          return <Authorization />;
        } else {
          return <NoteScreen user={user} />;
        }
      }}
    </UserDataProvider>
  );
};

export default UserContent;
