import Swal from "sweetalert2";

export const areYouSureMessage = (
  accPrice: number,
  insertData: () => void
): void => {
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
};

export const errorMessage = () => {
  Swal.fire({
    title: "Error!",
    text: "Algo ha sortit malament, recarrega la pàgina i torna-ho a intentar",
    icon: "error",
  });
};

export const okMessage = () => {
  Swal.fire({
    title: "Llista enviada!",
    text: "Aviat rebràs un mail amb els regals que has de comprar, ens veiem el dia 6!",
    imageUrl:
      "https://cdn.dribbble.com/users/672278/screenshots/3188342/media/ff4524c97d06c6b3ed7af67768b8e0d8.gif",
    imageWidth: 300,
    imageHeight: 221,
    imageAlt: "Custom image",
  });
};
