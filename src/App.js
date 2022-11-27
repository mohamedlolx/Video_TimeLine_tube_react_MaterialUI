import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  VideoDetails,
  ChannelDetails,
  SearchFeeds,
  Feeds,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Box xs={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feeds />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeeds />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
