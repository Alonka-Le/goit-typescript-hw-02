import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.container}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#48074ede"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        className={css.loader}
      />
    </div>
  );
}
