import { CardContent } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import SideBar from "./SideBar";

import { useState } from "react";

function Cspp({ title }) {
  const [cardCount, setCardCount] = useState(0);

  const handleAddWidget = () => {
    setCardCount((prev) => prev + 1);
  };
  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(Array(cardCount)).map((_, index) => (
        <Grid item xs={4} sm={4} md={3} key={index}>
          <Card sx={{ height: 220 }} className=" ">
            <h1>{title}</h1>
            <CardContent>
              <PieChart
                className="flex px-1"
                colors={["red", "blue", "green"]}
                series={[
                  {
                    data: [
                      {
                        id: 0,
                        value: 10,
                        label: "series A",
                        color: "orange",
                      },
                      { id: 1, value: 15, label: "series B" },
                      { id: 2, value: 20, label: "series C" },
                    ],
                  },
                ]}
                width={230}
                height={180}
              />
            </CardContent>
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

export default Cspp;
