import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCat, setSelectedCat }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cat) => (
        <button
          key={Math.random().toString()}
          className="category-btn"
          onClick={() => setSelectedCat(cat.name)}
          style={{
            background: cat.name === selectedCat && "#FC1503",
            color: "white",
          }}
        >
          <span
            key={Math.random().toString()}
            style={{
              color: cat.name === selectedCat ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {cat.icon}
          </span>
          <span
            key={Math.random().toString()}
            style={{ opacity: cat.name === selectedCat ? "1" : "0.8" }}
          >
            {cat.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
