import { ChangeEvent, FC } from "react";
import { Row } from "./form.interface";

type ExtendedChangeEventHandler<T = Element> = (
  event: ChangeEvent<T>,
  index: number
) => void;

interface Props {
  index: number;
  row: Row;
  handleInputChange: ExtendedChangeEventHandler<HTMLInputElement>;
  handleRemoveRow: (index: number) => void;
}

export const Presents: FC<Props> = ({
  index,
  row,
  handleInputChange,
  handleRemoveRow,
}) => {
  const { name, value, link } = row;
  return (
    <div
      key={index}
      className="bg-slate-300 dark:bg-gray-800 mb-2 border-solid border-2 dark:border-slate-700 border-slate-300 rounded-xl"
    >
      <div className="flex gap-2 mt-2 px-2">
        <div className="relative flex-1">
          <input
            type="text"
            name="name"
            value={name}
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-center text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Escriu aquí el regal que vols"
            onChange={(e) => handleInputChange(e, index)}
          />
        </div>
        <div className="relative mb-2 w-24">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              viewBox="1 8 20 16"
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="3"
              aria-hidden="true"
              fill="currentColor"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>tag</title>{" "}
                <path d="M0 5.219h8.344l11.844 11.844c1.375 1.375 0 2.781 0 2.781s-4.188 4.156-5.563 5.563c-1.406 1.375-2.781 0-2.781 0l-11.844-11.844v-8.344zM5.719 10.938c0.688-0.719 0.688-1.781 0-2.469s-1.781-0.688-2.469 0-0.688 1.781 0 2.469 1.781 0.688 2.469 0z"></path>{" "}
              </g>
            </svg>
          </div>
          <input
            type="number"
            name="value"
            value={value || ""}
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Preu"
            onChange={(e) => handleInputChange(e, index)}
          />
        </div>
        {index !== 0 && (
          <button className=" text-red-700" onClick={() => handleRemoveRow(index)}>Esborrar</button>
        )}
      </div>
      <div className="relative mb-2 px-2">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            viewBox="-10 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="3"
            aria-hidden="true"
            fill="currentColor"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>link</title>{" "}
              <path d="M10.406 13.406l2.5-2.531c0.219-0.219 0.469-0.5 0.719-0.813 0.25-0.281 0.531-0.531 0.813-0.75 0.531-0.469 1.156-0.875 1.938-0.875 0.688 0 1.281 0.313 1.719 0.719s0.688 1 0.688 1.688c0 0.281-0.031 0.594-0.125 0.813-0.219 0.438-0.406 0.75-0.594 1-0.094 0.125-0.188 0.25-0.188 0.375 0 0.094 0 0.188 0.063 0.219 0.344 0.844 0.594 1.563 0.75 2.438 0.094 0.344 0.281 0.5 0.594 0.5 0.125 0 0.25-0.031 0.375-0.125 0.25-0.156 0.469-0.406 0.688-0.656 0.125-0.125 0.219-0.25 0.281-0.313 1.125-1.094 1.781-2.656 1.781-4.25 0-1.688-0.688-3.188-1.781-4.281-1.094-1.063-2.625-1.781-4.25-1.781s-3.188 0.656-4.281 1.813l-4.281 4.25c-1.125 1.156-1.75 2.656-1.75 4.25 0 0.469 0.188 1.438 0.5 2.344 0.313 0.875 0.719 1.656 1.25 1.656 0.281 0 0.875-0.469 1.375-1s1-1.125 1-1.344c0-0.156-0.125-0.344-0.25-0.625-0.156-0.281-0.219-0.625-0.219-1.031 0-0.625 0.25-1.25 0.688-1.688zM10.313 25.406l4.281-4.25c1.125-1.094 1.75-2.688 1.75-4.281 0-0.469-0.188-1.406-0.5-2.313-0.281-0.875-0.719-1.688-1.25-1.688-0.219 0-0.875 0.5-1.344 1.031-0.531 0.531-1.031 1.094-1.031 1.313 0 0.156 0.094 0.406 0.25 0.656 0.156 0.281 0.281 0.594 0.281 1-0.031 0.625-0.281 1.25-0.719 1.75l-2.531 2.5c-0.219 0.25-0.469 0.5-0.719 0.781l-0.781 0.781c-0.531 0.5-1.188 0.844-1.969 0.844-1.313 0-2.375-1.031-2.375-2.375 0-0.313 0.063-0.594 0.156-0.813 0.188-0.438 0.375-0.75 0.594-1 0.094-0.125 0.125-0.25 0.125-0.344 0-0.063-0.031-0.125-0.063-0.25-0.375-0.844-0.594-1.563-0.75-2.438-0.063-0.156-0.094-0.281-0.188-0.344-0.094-0.125-0.25-0.156-0.406-0.156-0.125 0-0.219 0.031-0.344 0.125-0.25 0.156-0.5 0.406-0.719 0.656-0.094 0.125-0.219 0.219-0.281 0.281-1.125 1.125-1.781 2.688-1.781 4.281 0 1.656 0.656 3.188 1.781 4.281 1.094 1.094 2.594 1.75 4.25 1.75 1.625 0 3.188-0.625 4.281-1.781z"></path>{" "}
            </g>
          </svg>
        </div>
        <input
          type="text"
          name="link"
          value={link || ""}
          id="input-group-1"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Link"
          onChange={(e) => handleInputChange(e, index)}
        />
      </div>
    </div>
  );
};
