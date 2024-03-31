import { twMerge } from "tailwind-merge";
import { Key } from "@/utils/keys";
import useFitText from "use-fit-text";

export default function KeyShape(props: {
  keyData: Key | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  id?: string;
}) {
  const { fontSize: fontSizeClicked, ref: refClicked } = useFitText();
  const { fontSize: fontSizeHeld, ref: refHeld } = useFitText();

  return (
    <div
      className="w-full h-full tooltip"
      data-tip={props.keyData?.description}
    >
      <button
        onClick={props.onClick}
        data-id={props.id}
        disabled={props.disabled}
        className={twMerge(
          "relative p-1 text-xl flex flex-col items-center leading-none w-full h-full font-medium btn btn-outline",
          props.className
        )}
      >
        <div
          ref={refClicked}
          style={{ fontSize: fontSizeClicked }}
          className="font-english w-full h-full flex items-center justify-center"
        >
          {props.keyData?.unicode ?? props.keyData?.click}
          <br />
          {props.keyData?.heldUnicode ?? props.keyData?.held}
        </div>

        {/* <div */}
        {/*   ref={refHeld} */}
        {/*   style={{ fontSize: fontSizeHeld }} */}
        {/*   className="font-english w-full h-1/2 flex items-center justify-center" */}
        {/* > */}
        {/*   {props.keyData?.held} */}
        {/* </div> */}

        {/* {key?.persian !== undefined && ( */}
        {/*   <div className="absolute right-1.5 bottom-1.5 font-semibold"> */}
        {/*     {key.persian} */}
        {/*   </div> */}
        {/* )} */}

        {/* <div className="absolute top-0 left-0 right-0"> */}
        {/*   {bToK[props.keycode]} */}
        {/* </div> */}
      </button>
    </div>
  );
}
