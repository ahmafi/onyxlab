"use client";

import React, { ReactNode, useCallback, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { twMerge } from "tailwind-merge";

export default function Dropdown(props: {
  children: ReactNode[];
  btnClassName?: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const outsideClicked = useCallback(() => {
    setIsOpen(false);
  }, []);

  const childrenClicked = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <OutsideClickHandler onOutsideClick={outsideClicked}>
      <div className={twMerge("relative", props.className)}>
        <button
          className={twMerge("btn btn-square", props.btnClassName)}
          onClick={toggle}
        >
          {props.children[0]}
        </button>
        {isOpen && (
          <div className="absolute" onClick={childrenClicked}>
            {props.children.slice(1)}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}
