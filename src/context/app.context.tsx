import { useState, createContext, ReactNode } from "react";
import { DEFAULT_FORM_VALUE } from "../components/form/form.constants";
import { FormData } from "../components/form/form.interface";

interface ContextState {
  accPrice: number;
  updateAccPrice: (value: number) => void;
  formData: FormData;
  updateFormData: (data: FormData) => void;
}

const contextDefaultValues: ContextState = {
  accPrice: 0,
  updateAccPrice: () => {},
  formData: DEFAULT_FORM_VALUE,
  updateFormData: () => {},
};

export const Context = createContext<ContextState>(contextDefaultValues);

type AppContextProps = {
  children: ReactNode;
};

const AppContext = ({ children }: AppContextProps) => {
  const [accPrice, setAccPrice] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>(DEFAULT_FORM_VALUE);

  const updateAccPrice = (value: number) => {
    setAccPrice(value);
  };

  const updateFormData = (data: FormData) => {
    setFormData(data);
  };

  return (
    <Context.Provider
      value={{ accPrice, updateAccPrice, formData, updateFormData }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
