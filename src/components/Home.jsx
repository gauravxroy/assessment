import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import MenuBar from "./MenuBar";
import Cspm from "./Cspm";
import Cspp from "./Cspp";
import RegistryScan from "./RegistryScan";
import { useState, useEffect } from "react";
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);

  const loadData = () => {
    //axios call
    axios
      .get("./localData.json")
      .then((res) => {
        console.log("The API response is", res.data);
        setData(res.data.accuknox);
      })
      .catch((err) => {
        console.log("The Error is", err);
      });
  };

  //declarative

  useEffect(() => {
    //api call
    loadData();
    //clean the api call
    return () => {
      loadData();
    };
  }, []);

  return (
    <Container maxWidth="" className=" bg-blue-50 ">
      <Box>
        <MenuBar />

        {data.map((item, index) => {
          return (
            <div key={index}>
              <h1 className="text-gray-600 font-medium mb-1 ">
                {item.categoryTitle}
              </h1>
              <div>
                {item.widgets.map((item, index) => {
                  return (
                    <Cspm
                      key={index}
                      title={item.title}
                      description={item.description}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </Box>
    </Container>
  );
}

export default Home;
