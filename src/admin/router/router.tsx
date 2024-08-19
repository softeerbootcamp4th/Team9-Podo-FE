import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import EventManagement from "../pages/EventManagement/EventManagement";
import FCFSParticipants from "../pages/FCFSParticipants/FCFSParticipants";
import RandomParticipants from "../pages/RandomParticipants/RandomParticipants";
import FCFSWinnersPopup from "../components/FCFSWinnersPopup/FCFSWinnersPopup";
import RandomWinnersPopup from "../components/RandomWinnersPopup/RandomWinnersPopup";

const RouterWithModal = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<EventManagement />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/fcfs-participants" element={<FCFSParticipants />} />
        <Route path="/random-participants" element={<RandomParticipants />} />
        <Route path="/temp1" element={<FCFSWinnersPopup />} />
        <Route path="/temp2" element={<RandomWinnersPopup />} />

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <RouterWithModal />
    </BrowserRouter>
  );
};

export default Router;
