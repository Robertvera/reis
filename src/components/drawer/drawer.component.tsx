import { FC, useContext, useEffect, useState } from "react";
import { Context as AppContext } from "../../context/app.context";
import { SupabaseClient } from "@supabase/supabase-js";
import {
  areYouSureMessage,
  errorMessage,
  okMessage,
} from "../../messages/messages";

interface Props {
  supabaseInstance: SupabaseClient;
}

export const Drawer: FC<Props> = ({ supabaseInstance }) => {
  const { accPrice, formData } = useContext(AppContext);

  const handleClick = () => {
    if (accPrice < 65) {
      areYouSureMessage(accPrice, insertData);
    } else {
      insertData();
    }
  };

  const insertData = async () => {
    const { name, email, list } = formData;
    const { error } = await supabaseInstance
      .from("Users")
      .insert([{ name, email, regals: list }])
      .select();

    if (error) {
      errorMessage();
    } else {
      okMessage();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full h-20 bg-slate-300 dark:bg-slate-900  border-solid border-t-2 border-green-700 flex items-center">
      <div className="container mx-auto flex items-center justify-between">
        <span className="px-5 text-3xl text-gray-900 dark:text-yellow-200">
          {`${accPrice} €`}
        </span>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-sm shadow-green-500/50 dark:shadow-sm dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleClick}
        >
          Enviar carta als reis
        </button>
      </div>
    </div>
  );
};
