import { Modal } from "./modal";
import { Coluna } from "./auxiliares";
import { InputNumber } from "./InputNumber";

export const CodeConfirmationModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Coluna className=" max-w-2xl items-center p-24 text-center">
        <h1 className="font-montserrat text-3xl font-semibold text-a374151">
          Calma que já vai lembrar!
        </h1>
        <h2 className="mt-6 font-montserrat text-sm font-medium text-a606771">
          Mandamos um código para{" "}
          <b className="text-a111827">fulano@gmail.com</b>
        </h2>
        <InputNumber />
        <button className="mt-6 w-80 rounded-md bg-a606875 py-2 font-medium text-white">
          Entrar
        </button>
      </Coluna>
    </Modal>
  );
};
