import css from "./LoadMoreBtn.module.css";
import React, { FC } from "react";

type LoadMoreBtnProps = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <div className={css.container}>
      <button type="button" onClick={onClick} className={css.btn}>
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
