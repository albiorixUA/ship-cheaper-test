import ReactModal from "react-modal";
import { UseModalProps } from "types/types";
import s from "../style/Style.module.css";
import IconClose from "components/Icons/IconClose";

const Modal: React.FC<UseModalProps> = ({
  hide,
  children,
  title,
  resetStep,
}) => {
  return (
    <ReactModal
      isOpen={true}
      ariaHideApp={false}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "#E5B1B1",
        },
        content: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "365px",
          height: "321px",
          border: "1px solid #ccc",
          background: "#fff",
          boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.24)",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "30px 30px 20px 25px",
        },
      }}
    >
      <div
        className={s.modalClose}
        onClick={() => {
          hide();
          resetStep();
        }}
      >
        <IconClose />
      </div>
      <h1>{title}</h1>

      {children}
      <button
        type="button"
        className={s.buttonCancel}
        onClick={() => {
          hide();
          resetStep();
        }}
      >
        Cancel
      </button>
    </ReactModal>
  );
};

export default Modal;
