import { createPortal } from "react-dom";
import {forwardRef, useImperativeHandle, useRef} from "react";
import Button from "./Button";

const Modal = forwardRef(function Modal({children, buttonCaption}, ref) {
const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
             
        }
    })
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 pd-4 rounded-md shadow-md px-4 py-2">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button type="submit" text={buttonCaption} />
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
});

export default Modal;