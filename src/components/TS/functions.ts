import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const toastOptions: any = {
  position: "top-right",
  autoClose: 8000,
  theme: "dark",
};
function editpage() {
  const textedit = document.getElementById("textedit") as HTMLElement;
    textedit.contentEditable = "true";
    toast.warn("Editing activated!", toastOptions);

    const pokemoninfo = document.getElementsByClassName(
      "pokemoninfo"
    ) as HTMLCollectionOf<HTMLDivElement>;
    pokemoninfo[0].style.width = "68%";
    for (let i = 0; i < pokemoninfo.length; i++) {
      pokemoninfo[i].style.backgroundColor = "#121212";
    }
}
function savepage() {
  const textedit = document.getElementById("textedit") as HTMLElement;
    textedit.contentEditable = "false";
    toast.success("Page saved!", toastOptions);

    const pokemoninfo = document.getElementsByClassName(
      "pokemoninfo"
    ) as HTMLCollectionOf<HTMLDivElement>;
    if (pokemoninfo) {
      pokemoninfo[0].style.width = "60%";
      for (let i = 0; i < pokemoninfo.length; i++) {
        pokemoninfo[i].style.backgroundColor = "#000000";
      }
    }
}
export { editpage, savepage };
