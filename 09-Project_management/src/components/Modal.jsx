import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption, header, body, callbackFunction }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-500/40 p-4 rounded-md shadow-md w-1/3">
      <h2 className="text-xl font-bold text-stone-800 my-4">{header}</h2>
      <p className="text-stone-700 mb-4">{body}</p>
      {children}
      <form method="dialog" className="mt-6 text-right">
        <Button onClick={callbackFunction && callbackFunction}>{buttonCaption}</Button>
        {callbackFunction && (
          <span className="ml-1">
            <Button>Cancel</Button>
          </span>
        )}
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
