import { BarChart } from "@mui/x-charts/BarChart";
import { CardContent } from "@mui/material";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import SideBar from "./SideBar";

import { useState } from "react";

function RegistryScan() {
  const [cardCount, setCardCount] = useState(0);

  const handleAddWidget = () => {
    setCardCount((prev) => prev + 1);
  };
  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(Array(cardCount)).map((_, index) => (
        <Grid item xs={4} sm={4} md={3} key={index}>
          <Card
            sx={{ height: 220 }}
            className="flex justify-center items-center"
          >
            <CardContent>{/* <BarChart /> */}</CardContent>
          </Card>
        </Grid>
      ))}
      <Grid item xs={4} sm={4} md={3} className="cursor-pointer">
        <Card sx={{ height: 220 }}>
          <CardContent className="flex items-center justify-center ">
            <div>
              <SideBar onAddWidget={handleAddWidget} />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default RegistryScan;
