import Modal from "components/Modal/Modal";
import InvoiceAddressForm from "components/Forms/InvoiceAddressForm/InvoiceAddressForm";
import { InvoiceAddressModalFormProps } from "types/types";

const InvoiceAddressModalForm: React.FC<InvoiceAddressModalFormProps> = ({
  hide,
  nextStep,
  resetStep,
}) => {
  return (
    <Modal hide={hide} resetStep={resetStep} title={"Invoice Address"}>
      <InvoiceAddressForm nextStep={nextStep} />
    </Modal>
  );
};
export default InvoiceAddressModalForm;
