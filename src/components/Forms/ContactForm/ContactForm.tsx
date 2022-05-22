import { useForm } from "react-hook-form";
import s from "../../style/Style.module.css";
import { useDispatch } from "react-redux";
import { addDataContactModal } from "redux/dataSlice";
import { ContactFormProps, FormContactData } from "types/types";

const ContactForm: React.FC<ContactFormProps> = ({
  prevStep,
  hide,
  resetStep,
}) => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<FormContactData>();

  const onFormSubmit = (data: FormContactData) => {
    dispatch(addDataContactModal(data));
    hide();
    resetStep();
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className={s.formGroup}>
        <label>FAX</label>
        <input {...register("fax")} />
      </div>
      <div className={s.formGroup}>
        <label>E-mail</label>
        <input type="email" {...register("email")} />
      </div>
      <div className={s.formGroup}>
        <label>Birthday</label>
        <input type="date" {...register("birthday")} />
      </div>
      <div className={s.formGroup}>
        <label>Homepage</label>
        <input {...register("homepage")} />
      </div>
      <button type="submit" className={s.activeButton}>
        Save
      </button>
      <button type="button" className={s.buttonPrevious} onClick={prevStep}>
        Previous
      </button>
    </form>
  );
};
export default ContactForm;
