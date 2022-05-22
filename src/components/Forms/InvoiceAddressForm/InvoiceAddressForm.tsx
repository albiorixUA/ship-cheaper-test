import { useForm } from "react-hook-form";
import s from "../../style/Style.module.css";
import { useDispatch } from "react-redux";
import { addDataInvoiceModal } from "redux/dataSlice";
import { FormInvoiceData, InvoiceAddressFormProps } from "types/types";

const InvoiceAddressForm: React.FC<InvoiceAddressFormProps> = ({
  nextStep,
}) => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<FormInvoiceData>();

  const onFormSubmit = (data: FormInvoiceData) => {
    dispatch(addDataInvoiceModal(data));
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className={s.formGroup}>
        <label>Company*</label>
        <input {...register("company", { required: true })} />
      </div>
      <div className={s.formGroup}>
        <label>Name*</label>
        <input {...register("name", { required: true })} />
      </div>
      <div className={s.formGroup}>
        <label>Additional</label>
        <input {...register("additional")} />
      </div>
      <div className={s.formGroup}>
        <label>Street</label>
        <input {...register("street")} />
      </div>
      <div className={s.formGroup}>
        <label>Postal Code</label>
        <input {...register("postalCode")} />
      </div>
      <div className={s.formGroup}>
        <label>Country</label>
        <select {...register("country")}>
          <option value="Ukraine">Ukraine</option>
          <option value="Germany">Germany</option>
          <option value="United Kindom">United Kindom</option>
          <option value="USA">USA</option>
        </select>
      </div>
      <button type="submit" className={s.activeButton}>
        Next
      </button>
    </form>
  );
};
export default InvoiceAddressForm;
