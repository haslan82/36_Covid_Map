import React from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Form = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    if (!text) {
      return toast.warn("Lütfen ülke ismi yazınız!", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "dark",
      });
    } else {
      navigate(`/detail?q=${text}`);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center border rounded">
      <input
        type="text"
        className="bg-transparent outline-none p-1 px-2 md:px-5"
        placeholder="ülke ara"
      />
      <button className="bg-green-500 p-[6px] text-xl w-full h-full rounded transition hover:bg-green-600">
        <CiSearch />
      </button>
    </form>
  );
};

export default Form;
