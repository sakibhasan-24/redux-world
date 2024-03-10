import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../redux/customer/customerSlice";

export default function Customer() {
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();
  const handleSubmitFormData = (e) => {
    e.preventDefault();
    // form submission logic here
    dispatch(createAccount(formData.fullName, formData.email, formData.phone));
  };

  //   console.log(formData);
  return (
    <div>
      <h1 className="text-center my-6 font-semibold text-slate-700 text-3xl">
        Customer Information
      </h1>
      <div>
        <form
          onSubmit={handleSubmitFormData}
          className="w-full p-4 sm:max-w-xl mx-auto bg-blue-100 shadow-lg shadow-sky-200 sm:p-12"
        >
          <div className="mb-6 flex flex-col gap-2">
            <label className="text-slate-600 font-bold">FullName:</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="fullName"
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="w-full p-2 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-300"
            />
          </div>
          <div className="mb-6 flex flex-col gap-2">
            <label className="text-slate-600 font-bold">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="w-full p-2 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-300"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-6 flex flex-col gap-2">
            <label className="text-slate-600 font-bold">phone:</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="phone"
              className="w-full p-2 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-300"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <input
            type="submit"
            value="create"
            className="cursor-pointer p-3 bg-blue-950 text-white w-full rounded-md hover:bg-blue-800"
          />
        </form>
      </div>
    </div>
  );
}
