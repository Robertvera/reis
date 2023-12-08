export const Subtitle = () => {
  return (
    <div className="text-gray-900 dark:text-white px-5 pb-3 ">
      <div className=" text-lg bg-slate-300 dark:bg-gray-800 border-solid border-2 dark:border-slate-700 border-slate-300 rounded-xl">
        <p className="p-2">
          Benvinguts als Reis 2023! aquest any farem servir aquest formulari per
          introduïr els nostres desitjos.
        </p>
        <p className="p-2">
          Com veieu, podeu introduïr el nom del desig, el preu i l'enllaç per
          facilitar als reis d'orient la compra del regal. Els camps de nom i
          preu del regal s'han d'omplir obligatòriament, en canvi el de l'enllaç
          és opcional. Un cop hagueu omplert els camps d'un regal, en podeu
          afegir un altre fent clic al botó + Afegir regal. A la part baixa de
          la pantalla podeu veure la suma dels preus dels regals que aneu
          introduïnt, teniu en compte que el màxim fixat per aquest any és de
          <b> 65 €</b>, si us passeu d'aquest import, no us deixarà afegir un
          nou regal.
        </p>
        <p className="p-2">
          Un cop omplert tots els desitjos, podeu fer clic al botó 'Enviar carta
          als reis'. Quan els reis hagin rebut totes les cartes, es farà un
          sorteig entre tots els participants. Rebreu desitjos de participants a
          l'atzar i no sabreu a qui van dirigits, això ho haureu de endevinar!
        </p>
        <p className="p-2">
          És possible que us toqui fer 4 regals però no tots a la mateixa
          persona, per exemple: un per la tieta, un pel nebot, un per la neboda
          i l'altre per la filla!
        </p>
      </div>
    </div>
  );
};
