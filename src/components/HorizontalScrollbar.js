import React, { useContext } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
/* import Icon from "../assets/icons/gym.png";
import Back from "../assets/icons/back.svg";
import Heart from "../assets/icons/heart.svg"; */

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const extraDetail = [
  {
    icon: BodyPartImage,
    // name: bodyPart,
  },
  {
    icon: TargetImage,
  },
  {
    icon: EquipmentImage,
  },
];

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

/* const categories = [
  {
    id: 0,
    name: "all",
    src: { Icon },
  },
  {
    id: 1,
    name: "back",
    src: { Back },
  },
  {
    id: 2,
    name: "cardio",
    src: { Heart },
  },
]; */

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  /*  console.log(data);
  const target = {};
  const newObject = Object.assign(target, data);
  console.log(newObject);
  categories.map((category) => {
    if (data === category.name) {
      const imgItems = [...data, category.src];
      console.log(imgItems);
    }
  });
  console.log(categories); */
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}

      {/*     {extraDetail?.map((item) => (
        <Stack key={item.name} direction="row" gap="24px" alignItems="center">
          <Button
            sx={{
              background: "#FFF2DB",
              borderRadius: "50%",
              width: "100px",
              height: "100px",
            }}
          >
            <img
              src={item.icon}
              alt={bodyPart}
              style={{ width: "50px", height: "50px" }}
            />
          </Button>
          <Typography
            textTransform="capitalize"
            sx={{ fontSize: { lg: "30px", xs: "20px" } }}
          >
            {item.name}
          </Typography>
        </Stack>
      ))} */}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
