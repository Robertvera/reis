import { FC, useContext, useEffect, useState } from "react";
import { Context as AppContext } from "../../context/app.context";
import { SupabaseClient } from "@supabase/supabase-js";
import Swal from "sweetalert2";

interface Props {
  supabaseInstance: SupabaseClient;
}

export const Drawer: FC<Props> = ({ supabaseInstance }) => {
  const [isTooMuch, setIsTooMuch] = useState<boolean>(false);
  const { accPrice, formData } = useContext(AppContext);

  useEffect(() => {
    if (accPrice > 65 * 1.05) {
      setIsTooMuch(true);
    } else {
      setIsTooMuch(false);
    }
  }, [accPrice, isTooMuch]);

  const handleClick = () => {
    if (accPrice < 65) {
      Swal.fire({
        title: `Encara et queden ${
          65 - accPrice
        } €, estàs segur que vols enviar la llista?`,
        showCancelButton: true,
        confirmButtonText: "Si!",
        cancelButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          insertData();
        }
      });
    } else {
      insertData();
    }
  };

  const insertData = async () => {
    const { name, email, list } = formData;
    const { data, error } = await supabaseInstance
      .from("Users")
      .insert([{ name, email, regals: list }])
      .select();

    if (error) {
      Swal.fire({
        title: "Error!",
        text: "Algo ha sortit malament, recarrega la pàgina i torna-ho a intentar",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Llista enviada!",
        text: "Aviat rebràs un mail amb els regals que has de comprar, ens veiem el dia 6!",
        imageUrl:
          "https://cdn.dribbble.com/users/672278/screenshots/3188342/media/ff4524c97d06c6b3ed7af67768b8e0d8.gif",
        imageWidth: 300,
        imageHeight: 221,
        imageAlt: "Custom image",
      });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full h-20 bg-slate-400 flex items-center justify-between border-gray-300">
      <span className="px-5 text-3xl text-yellow-200">
        {isTooMuch
          ? `T'has passat, recorda que el pressupost és de 65 €`
          : `${accPrice} €`}
      </span>
      {isTooMuch ? null : (
        <button
          type="button"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-sm shadow-green-500/50 dark:shadow-sm dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleClick}
        >
          Enviar llista
        </button>
      )}
    </div>
  );
};
