export interface UseModalProps {
  hide: () => void;
  onSubmit?: (arg: Values) => void;
  children: React.ReactNode;
  title: string;
  resetStep: () => void;
}

export interface ContainerProps {
  children: React.ReactNode;
}

export interface GeneralPageProps {
  hide: () => void;
  data: any[];
  onDeleteline: (arg: number) => void;
}

export interface InvoiceAddressFormProps {
  nextStep: () => void;
}

export interface InvoiceAddressModalFormProps {
  nextStep: () => void;
  hide: () => void;
  resetStep: () => void;
}

export interface BankDataFormProps {
  nextStep: () => void;
  prevStep: () => void;
}

export interface BankDataFormModalProps {
  nextStep: () => void;
  prevStep: () => void;
  hide: () => void;
  resetStep: () => void;
}

export interface FormBankData {
  iban: string;
  bic: string;
  bankName: string;
}

export interface FormContactData {
  fax: string;
  email: string;
  birthday: string;
  homepage: string;
}

export interface FormInvoiceData {
  company: string;
  name: string;
  additional: string;
  street: string;
  postalCode: string;
  country: string;
}

export interface ContactFormProps {
  prevStep: () => void;
  hide: () => void;
  resetStep: () => void;
}

export interface ContactFormModalProps {
  prevStep: () => void;
  hide: () => void;
  resetStep: () => void;
}

export interface Values {
  dataInvoiceModal: Object;
  dataBankModal: Object;
  dataContactModal: Object;
  allData: {
    id: number;
    company?: string | "";
    name?: string | "";
    additional?: string | "";
    postalCode?: string | "";
    country?: string | "";
    iban?: string | "";
    bic?: string | "";
    bankName?: string | "";
    fax?: string | "";
    email?: string | "";
    birthday?: string | "";
    homapage?: string | "";
  }[];
}
