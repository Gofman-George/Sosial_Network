import React from 'react';
import c from "./Messages.module.css";
import UserContacts from "./UserContacts/UserContacts";
import DialogWindow from "./DialogWindow/DialogWindow";
import DialogWindowShimova from "./DialogWindowShimova/DialogWindowShimova";
import { BrowserRouter, Route } from 'react-router-dom';


const Messages = () => {
  return (
    <BrowserRouter>
        <div className={c.Messages}>
          <UserContacts />
          <Route path="/dialogwindow" component={DialogWindow} />
          <Route path="/dialogwindowshimova" component={DialogWindowShimova} />
        </div>
    </BrowserRouter>
  );
}

export default Messages;
