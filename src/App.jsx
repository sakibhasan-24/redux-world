// import { useState, useRef, useEffect } from "react";

// export default function App() {
//   const [formData, setFormData] = useState({});
//   const [values, setValues] = useState([]);
//   const formRef = useRef(null);
//   useEffect(() => {
//     if (formRef.current) {
//       formRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
//     }
//   }, [values]);
//   const handleFormData = (e) => {
//     e.preventDefault();
//     setValues([...values, formData]);
//     // formRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
//     setTimeout(() => {
//       formRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
//     }, 1000);
//   };
//   // console.log(values);
//   const handleDelete = (id) => {
//     // console.log(id);
//     setValues(values.filter((_, index) => index !== id));
//   };

//   return (
//     <div className="max-w-6xl mx-auto sm:p-28">
//       <div>
//         <h1 className="text-4xl font-bold">Welcome to my app!</h1>
//         <p className="my-4 text-gray-500">This is a simple React app.</p>
//         <div>
//           {values &&
//             values.length > 0 &&
//             values.map((value, index) => (
//               <ul key={index}>
//                 <div className="max-w-xl bg-amber-600 my-10 mx-auto border-2 shadow-xl shadow-orange-700 p-6">
//                   <li>email:{value.email}</li>
//                   <li>name:{value.name}</li>
//                   <button
//                     onClick={() => handleDelete(index)}
//                     className="bg-red-800 p-6 rounded-lg"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </ul>
//             ))}
//         </div>
//       </div>
//       <form
//         onSubmit={handleFormData}
//         className="max-w-xl mx-auto flex flex-col gap-6"
//       >
//         <input
//           className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500"
//           type="email"
//           name="email"
//           id="email"
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           placeholder="email"
//         />
//         <input
//           className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500"
//           type="text"
//           name="name"
//           id="name"
//           placeholder="name"
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         />
//         <input
//           ref={formRef}
//           className="w-full cursor-pointer bg-slate-800 px-2 py-2 rounded-lg text-white"
//           type="submit"
//           value={"submit"}
//         />
//       </form>
//     </div>
//   );
// }

import React from "react";
import Customer from "./component/Customer";
import Accounts from "./component/Accounts";
import { useSelector } from "react-redux";

export default function App() {
  const email = useSelector((state) => state.customer.email);
  console.log(email);
  return (
    <div className="w-full p-4 sm:max-w-4xl mx-auto sm:p-20">
      {/* {email && <Accounts />}
      {!email && <Customer />} */}
      {/* <Customer />
      <Accounts /> */}
      {email ? <Accounts /> : <Customer />}
    </div>
  );
}
