import { useForm } from "react-hook-form";
import s from "../../style/Style.module.css";
import { useDispatch } from "react-redux";
import { BankDataFormProps, FormBankData } from "types/types";
import { addDataBankModal } from "redux/dataSlice";

const BankDataForm: React.FC<BankDataFormProps> = ({ nextStep, prevStep }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<FormBankData>();

  const onFormSubmit = (data: FormBankData) => {
    dispatch(addDataBankModal(data));
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className={s.formGroup}>
        <label>IBAN*</label>
        <input {...register("iban", { required: true })} />
      </div>
      <div className={s.formGroup}>
        <label>BIC*</label>
        <input {...register("bic", { required: true })} />
      </div>
      <div className={s.formGroup}>
        <label>Bank name*</label>
        <input {...register("bankName", { required: true })} />
      </div>
      <button type="button" className={s.buttonPrevious} onClick={prevStep}>
        Previous
      </button>
      <button type="submit" className={s.activeButton}>
        Next
      </button>
    </form>
  );
};
export default BankDataForm;
