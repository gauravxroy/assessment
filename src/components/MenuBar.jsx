import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";
import { RefreshCcw, EllipsisVertical, Plus } from "lucide-react";
import { useState } from "react";

function MenuBar() {
  const [range, setRange] = useState("");

  const handleChange = (event) => {
    setRange(event.target.value);
  };

  return (
    <div className="w-full  flex justify-end gap-2 items-center mb-2  ">
      <button className="bg-white border-2 rounded-md  px-2 py-1 text-[#475569] text-sm flex">
        <Plus size={20} color="#475569" />
        Add Widget
      </button>
      <div className=" bg-white cursor-pointer border-2 rounded-md px-1 py-1">
        <RefreshCcw size={20} color="#475569" />
      </div>
      <div className=" bg-white cursor-pointer border-2 rounded-md px-1 py-1">
        <EllipsisVertical size={20} color="#475569" />
      </div>

      <div>
        <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
          <InputLabel
            id="demo-select-small-label "
            className="flex items-center"
          >
            Range
          </InputLabel>
          <Select
            className=" rounded-md outline-none bg-white h-8  "
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={range}
            label="Last 2 Days"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={2}>2 Days</MenuItem>
            <MenuItem value={7}>7 Days</MenuItem>
            <MenuItem value={15}>15 Days</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default MenuBar;
