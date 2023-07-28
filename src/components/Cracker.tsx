import { CrackerInner } from "../styles/CrackerStyles";
import AboutCracker from "./AboutCracker";
import CrackerConstructor from "./CrackerConstructor";

const Cracker = () => {
  return (
    <CrackerInner>
      <AboutCracker />
      <CrackerConstructor />
    </CrackerInner>
  );
};

export default Cracker;
