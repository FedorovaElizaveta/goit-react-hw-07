import css from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#4d5ae5"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperClass={css.loader}
    />
  );
};

export default Loader;
