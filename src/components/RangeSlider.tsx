import { ImageWrap, ImgContain } from "../styles";
import { styled } from "@mui/material/styles";
import { RangeSliderWrap, SliderValue } from "../styles/RangeSliderStyles";
import { useDispatch, useSelector } from "react-redux";
import { RangeSliderProps } from "../types";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {
  CrackerState,
  selectCracker,
  selectCrackerItem,
  setCrop,
} from "../features/crackerCalc/crackerCalcSlice";
import { RootState } from "../store/store";

const PrettoSlider = styled(Slider)({
  height: 4,
  width: 782,
  "& .MuiSlider-thumb": {
    height: 36,
    width: 36,
    backgroundColor: "var(--white-text)",
    border: "2px solid currentColor",
  },
});

const RangeSlider = ({ name, icon, color }: RangeSliderProps) => {
  const dispatch = useDispatch();
  const currentCracker = useSelector(selectCracker);
  const value = useSelector((state: RootState) =>
    selectCrackerItem(state, name as keyof CrackerState)
  );

  const [a, b, c] = [
    currentCracker.firstCrop,
    currentCracker.secondCrop,
    currentCracker.thirdCrop,
  ];

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    if (typeof newValue !== "number") return;
    const nextSum =
      a + b + c - currentCracker[name as keyof CrackerState] + newValue;
    if (name !== "fourthCrop") {
      if (nextSum >= 0 && nextSum <= 100) {
        dispatch(
          setCrop({
            name: name as keyof CrackerState,
            value: newValue,
          })
        );
        dispatch(
          setCrop({
            name: "fourthCrop" as keyof CrackerState,
            value: 100 - nextSum,
          })
        );
      }
    }
  };

  return (
    <RangeSliderWrap>
      <div style={{ marginRight: 24 }}>
        <ImageWrap width={60} height={60}>
          <ImgContain src={icon} alt="crop" />
        </ImageWrap>
      </div>
      <Box>
        <PrettoSlider
          name={name}
          value={value}
          onChange={handleSliderChange}
          sx={{ color: color }}
        />
      </Box>
      <SliderValue>{value}%</SliderValue>
    </RangeSliderWrap>
  );
};
export default RangeSlider;
