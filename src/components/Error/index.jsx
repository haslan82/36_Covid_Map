import { IoWarning } from "react-icons/io5";

const Error = ({ info, retry }) => {
  return (
    <div className="col-span-3 w-full flex flex-col gap-6">
      <div className="bg-red-500 p-5 rounded-lg flex items-center gap-6">
        <IoWarning className="text-4xl" />
        <div>
          <h2>Üzgünüz bir hata oluştu!</h2>
          <p>{info}</p>
        </div>
      </div>
      <button
        onClick={retry}
        className="text-gray-600 border transition hover:bg-gray-100 p-2 rounded-md"
      >
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;