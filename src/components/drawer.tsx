import { ReactNode } from "react";
import { animated, useSpring, useTransition } from "@react-spring/web";
import OutsideClickHandler from "react-outside-click-handler";
import { motion } from "framer-motion";

const show = {
  y: 0,
  opacity: 1,
  display: "flex",
};

const hide = {
  y: "100%",
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};

export default function Drawer(props: {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}) {
  // const [transitions] = useTransition(props.open, () => ({
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // }));
  // console.log(props.open);

  return (
    <OutsideClickHandler onOutsideClick={() => {}}>
      <motion.div
        animate={props.open ? show : hide}
        transition={{ stiffness: 0 }}
        className="h-72 overflow-y-auto text-base fixed flex flex-col bottom-0 right-0 left-0 bg-base-300 shadow-lg rounded-t-3xl p-4 z-10"
      >
        {/* <button onClick={props.onClose}>X</button> */}
        {props.children}
      </motion.div>
    </OutsideClickHandler>
  );
}
