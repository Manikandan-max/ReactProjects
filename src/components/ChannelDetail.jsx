import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Video, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [video, setvideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part="snippet&id=${id}`).then((data) =>
      setchannelDetail(data?.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setvideo(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,119,1) 0%, rgba(14,138,237,0.768032212885154) 100%)",
            zIndex: 10,
            height: "300px",
          }}
          
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:'100px'}}}/>
          <Video videos={video}/>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
