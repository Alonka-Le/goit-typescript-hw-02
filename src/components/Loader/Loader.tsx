import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";
import React, { FC } from "react";

interface LoaderProps {
  loading: boolean;
}

const Loader: FC<LoaderProps> = () => {
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
        // className={css.loader}
      />
    </div>
  );
};

export default Loader;
