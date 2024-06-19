import { createPortal } from "react-dom";
import "./Modal.scss";
import { ReactNode } from "react";
import { RxCross1 } from "react-icons/rx";

interface ModalProps {
  children: ReactNode;
  close: () => void;
  color?: string;
  modalSize?: string;
}

export default function Modal({ children, close, color, modalSize }: ModalProps) {
  const modalRoot = document.getElementById("modal-root");

  function closeModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.target === e.currentTarget && close();
  }

  return createPortal(
    <div className="modalBG" onMouseDown={(e) => closeModal(e)}>
      <div className="modalContent__wrapper">
        <div className={`modalContent ${color} ${modalSize}`}>
          <button
            className="modal__btnClose"
            type="button"
            onClick={close}
          >
            <RxCross1 />
          </button>
          {children}
        </div>
      </div>
    </div>,
    modalRoot as Element
  );
}
