import React, { useContext, useEffect, useState } from "react";
import { User } from "./user.component";
import { Presents } from "./presents.component";
import { Context as AppContext } from "../../context/app.context";

const FormComponent: React.FC = () => {
  const [warning, setWarning] = useState<string>("");
  const { updateAccPrice, formData, updateFormData } = useContext(AppContext);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newList = [...formData.list];
    newList[index] = { ...newList[index], [name]: value };

    updateFormData({ ...formData, list: newList });
  };

  useEffect(() => {
    const getTotalPrice = (): number => {
      return formData.list.reduce(
        (sum, row) => sum + (row.value ? Number(row.value) : 0),
        0
      );
    };

    updateAccPrice(getTotalPrice());
  }, [formData.list, updateAccPrice]);

  useEffect(() => {
    if (warning || formData.list.length > 1) {
      window.document.querySelector(".form-container")?.scroll({
        top: document.body.offsetHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [warning, formData.list]);

  const handleNameEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ ...formData, [name]: value });
  };

  const handleAddRow = () => {
    const lastRow = formData.list[formData.list.length - 1];

    if (lastRow && lastRow.name && lastRow.value) {
      const sumOfValues = formData.list.reduce(
        (sum, row) => sum + (row.value ? Number(row.value) : 0),
        0
      );

      if (sumOfValues <= 65) {
        updateFormData({
          ...formData,
          list: [...formData.list, { name: "", value: NaN, link: "" }],
        });
        setWarning("");
      } else {
        setWarning("La suma del preu dels regals no pot excedir els 65 €");
      }
    } else {
      setWarning("Introdueix els detalls del regal abans d'afegir-ne un altre");
    }
  };

  const handleRemoveRow = (index: number) => {
    const newList = [...formData.list];
    newList.splice(index, 1);
    updateFormData({ ...formData, list: newList });
    setWarning("");
  };

  return (
    <div className="px-5 text-gray-900 dark:text-white">
      <div className="flex-row">
        <h1 className="mb-2">Dades del/la participant:</h1>
        <User handleInputChange={handleNameEmailChange} formData={formData} />
      </div>
      <div className="flex-row">
        <h1 className="mb-2">Llistat de regals:</h1>
        {formData.list.map((row, index) => (
          <Presents
            key={index}
            index={index}
            row={row}
            handleInputChange={handleInputChange}
            handleRemoveRow={handleRemoveRow}
          />
        ))}
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
          onClick={handleAddRow}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            + Afegir regal
          </span>
        </button>
      </div>
      {warning && <div className="text-red-600">{warning}</div>}
    </div>
  );
};

export default FormComponent;
