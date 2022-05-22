import { GeneralPageProps } from "types/types";
import s from "../style/Style.module.css";
import IconDelete from "components/Icons/IconDelete";

const generalPage: React.FC<GeneralPageProps> = ({
  hide,
  data,
  onDeleteline,
}) => {
  return (
    <div>
      <button className={s.buttonAdd} type="button" onClick={hide}>
        Add
      </button>
      <table>
        <thead>
          <tr className={s.tableTitle}>
            <th></th>
            <th>Company</th>
            <th>Name</th>
            <th>Additional</th>
            <th>Street</th>
            <th>Postal Code</th>
            <th>Country</th>
            <th>IBAN</th>
            <th>BIC</th>
            <th>Bank name</th>
            <th>Fax</th>
            <th>E-mail</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({
              id,
              company,
              name,
              additional,
              street,
              postalCode,
              country,
              iban,
              bic,
              bankName,
              fax,
              email,
              birthday,
            }) => (
              <tr key={id}>
                <td>
                  <button type="button" onClick={() => onDeleteline(id)}>
                    <IconDelete />
                  </button>
                </td>
                <td>{company}</td>
                <td>{name}</td>
                <td>{additional}</td>
                <td>{street}</td>
                <td>{postalCode}</td>
                <td>{country}</td>
                <td>{iban}</td>
                <td>{bic}</td>
                <td>{bankName}</td>
                <td>{fax}</td>
                <td>{email}</td>
                <td>{birthday}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
export default generalPage;
