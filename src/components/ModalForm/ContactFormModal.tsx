import Modal from "components/Modal/Modal";

import ContactForm from "components/Forms/ContactForm/ContactForm";
import { ContactFormModalProps } from "types/types";

const ContactFormModal: React.FC<ContactFormModalProps> = ({
  hide,
  prevStep,
  resetStep,
}) => {
  return (
    <Modal hide={hide} resetStep={resetStep} title={"Contact"}>
      <ContactForm prevStep={prevStep} hide={hide} resetStep={resetStep} />
    </Modal>
  );
};

export default ContactFormModal;
