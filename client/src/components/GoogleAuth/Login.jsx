// import React from "react";
// import { auth, provider } from "../../firebase";
// import { signInWithPopup, signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setUser } from "../../redux/usersSlice"; // Import your action to set user

// import { useAuth } from "../../context/AuthProvide";
// // ...

// const Login = () => {
//   const [authUser, setAuthUser] = useAuth();
//   const navigate = useNavigate();

//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       const email = user.email;
//       const domain = email.split("@")[1];

//       if (domain !== "bitmesra.ac.in") {
//         alert("❌ Access denied. Use your BIT Mesra email.");
//         await signOut(auth);
//         return;
//       }

//       const token = await user.getIdToken();

//       const response = await fetch("/api/v1/forum/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({}),
//       });

//       const data = await response.json();
// console.log("Login response data:", data);

//       if (response.ok) {
//         console.log("forumUser to be stored:", data.forumUser);
//         localStorage.setItem("Users", JSON.stringify(data.forumUser));
//         console.log("forumUser ID:", JSON.parse(localStorage.getItem("Users"))._id);
//         localStorage.setItem("BuySellUser", JSON.stringify(data.buySellUser));
//         setAuthUser(data.forumUser); // ✅ context update
//         document.getElementById("my_modal_5").close();
//         alert(`✅ Welcome, ${user.displayName}`);
//         navigate("/");
//       } else {
//         alert("❌ Server rejected access");
//         await signOut(auth);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("❌ Something went wrong.");
//     }
//   };

//   return (
//     <div className="dark:bg-slate-900 dark:text-black">
//       <dialog
//         id="my_modal_5"
//         className="modal modal-bottom sm:modal-middle md:ml-2"
//       >
//         <div className="modal-box">
//           <button
//             type="button"
//             onClick={() => document.getElementById("my_modal_5").close()}
//             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//           >
//             ✕
//           </button>

//           <h3 className="font-bold text-2xl text-center">
//             Welcome to <span className="text-pink-500">BiTKiT</span>
//           </h3>
//           <h5 className="py-2 text-center">
//             Sign in with your BIT Mesra Google Account{" "}
//             <i className="fa-solid fa-circle-info fa-xl"></i>
//           </h5>

//           <div className="flex flex-col items-center mt-6">
//             <button
//               onClick={handleGoogleLogin}
//               className="bg-pink-500 text-white rounded-md px-6 py-2 hover:bg-pink-700 duration-200 shadow-md"
//             >
//               <i className="fa-brands fa-google mr-2"></i> Sign in with Google
//             </button>

//             <p className="text-sm text-gray-600 mt-4 text-center">
//               Only{" "}
//               <span className="font-semibold text-blue-600">
//                 bitmesra.ac.in
//               </span>{" "}
//               emails are allowed.
//             </p>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setForumUser, setBuySellUser } from "../../redux/usersSlice";
// 👇 Force account selection every time
    provider.setCustomParameters({
      prompt: "select_account"
    });
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const email = user.email;
      const domain = email.split("@")[1];

      if (domain !== "bitmesra.ac.in") {
        alert("❌ Access denied. Use your BIT Mesra email.");
        await signOut(auth);
        return;
      }

      const token = await user.getIdToken();


      // Use full backend URL in production, proxy path in development
      const apiBaseUrl =
        process.env.NODE_ENV === "production"
          ? "https://bitkit-server.onrender.com/api/v1"
          : "/api/v1";
      const response = await fetch(`${apiBaseUrl}/forum/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      });

      const data = await response.json();
      console.log("Login response data:", data);

      if (response.ok) {
        // Persist in localStorage (optional)
        localStorage.setItem("Users", JSON.stringify(data.forumUser));
        localStorage.setItem("BuySellUser", JSON.stringify(data.buySellUser));

        // Update Redux store
        dispatch(setForumUser(data.forumUser));
        dispatch(setBuySellUser(data.buySellUser));

        document.getElementById("my_modal_5").close();
        alert(`✅ Welcome, ${user.displayName}`);
        navigate("/");
      } else {
        alert("❌ Server rejected access");
        await signOut(auth);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("❌ Something went wrong.");
    }
  };

  return (
    <div className="dark:bg-slate-900 dark:text-black">
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle md:ml-2"
      >
        <div className="modal-box">
          <button
            type="button"
            onClick={() => document.getElementById("my_modal_5").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <h3 className="font-bold text-2xl text-center">
            Welcome to <span className="text-pink-500">BiTKiT</span>
          </h3>
          <h5 className="py-2 text-center">
            Sign in with your BIT Mesra Google Account{" "}
            <i className="fa-solid fa-circle-info fa-xl"></i>
          </h5>

          <div className="flex flex-col items-center mt-6">
            <button
              onClick={handleGoogleLogin}
              className="bg-pink-500 text-white rounded-md px-6 py-2 hover:bg-pink-700 duration-200 shadow-md"
            >
              <i className="fa-brands fa-google mr-2"></i> Sign in with Google
            </button>

            <p className="text-sm text-gray-600 mt-4 text-center">
              Only{" "}
              <span className="font-semibold text-blue-600">
                bitmesra.ac.in
              </span>{" "}
              emails are allowed.
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
