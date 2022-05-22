import Modal from "components/Modal/Modal";
import BankDataForm from "components/Forms/BankDataForm/BankDataForm";
import { BankDataFormModalProps } from "types/types";

const BankDataModalForm: React.FC<BankDataFormModalProps> = ({
  hide,
  nextStep,
  prevStep,
  resetStep,
}) => {
  return (
    <Modal hide={hide} resetStep={resetStep} title={"Bank Data"}>
      <BankDataForm nextStep={nextStep} prevStep={prevStep} />
    </Modal>
  );
};

export default BankDataModalForm;
