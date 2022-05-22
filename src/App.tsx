import GeneralPage from "./components/GeneralPage/GeneralPage";
import InvoiceAddressModalForm from "components/ModalForm/InvoiceAddressModalForm";
import UseModal from "utils/UseModal";
import BankDataFormModal from "components/ModalForm/BankDataFormModal";
import ContactFormForm from "components/ModalForm/ContactFormModal";
import { useSelector, useDispatch } from "react-redux";
import { getAllData, deleteData } from "redux/dataSlice";
import { useState } from "react";
import Container from "components/Container/Container";

function App() {
  const { isShowing, toggle } = UseModal();
  const [step, setStep] = useState(1);

  const dispatch = useDispatch();
  const visibleData = useSelector(getAllData);

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const resetStep = () => {
    setStep(1);
  };

  const deleteLine = (lineId: number) => {
    return dispatch(deleteData(lineId));
  };
  return (
    <Container>
      <GeneralPage hide={toggle} data={visibleData} onDeleteline={deleteLine} />
      {isShowing && step === 1 && (
        <InvoiceAddressModalForm
          hide={toggle}
          resetStep={resetStep}
          nextStep={nextStep}
        />
      )}
      {isShowing && step === 2 && (
        <BankDataFormModal
          hide={toggle}
          nextStep={nextStep}
          prevStep={prevStep}
          resetStep={resetStep}
        />
      )}
      {isShowing && step === 3 && (
        <ContactFormForm
          hide={toggle}
          prevStep={prevStep}
          resetStep={resetStep}
        />
      )}
    </Container>
  );
}

export default App;
