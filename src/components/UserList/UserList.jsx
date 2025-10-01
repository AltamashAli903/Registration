import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {

  // Updating Data Through API
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });
  const [userData, setUserData] = useState([]);

  const openModal = (user) => {
    setIsModalOpen(true);
    setEditData(user);
  };

  const closeModal = () => setIsModalOpen(false);

  const changeData = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };
  
  const updateData = async () => {
    try {
      const res = await axios.put("https://proxstream.online/public/update", editData);
      alert(res.data);
      closeModal();
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  // Deleting Data Through API

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://proxstream.online/public/deletebyid?id=${id}`);
      alert("Data Deleted Successfully");
      getData();
    } catch (error) {
      console.error(error);
    }
  };
  

  // Getting Data Through API
    const getData = async () => {
      try {
        const res = await axios.get("https://proxstream.online/public/getalluser");
        setUserData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-teal-50 to-teal-100 p-8 font-sans">
      <h1 className="text-4xl font-extrabold text-teal-900 mb-8 text-center drop-shadow-lg">
        User Management
      </h1>

      <div className="overflow-x-auto rounded-xl shadow-xl bg-white ring-1 ring-teal-300">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-teal-100 text-teal-800 uppercase text-xs tracking-wide">
            <tr>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Password</th>
              <th className="px-10 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item) => (
              <tr
                key={item.id}
                className="border-b border-teal-200 hover:bg-teal-50 transition-colors duration-200 cursor-pointer"
              >
                <td className="px-6 py-4 font-medium text-teal-900">{item.email}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4 capitalize">{item.role}</td>
                <td className="px-6 py-4 font-mono tracking-wide">{item.password}</td>
                <td className="px-6 py-4 space-x-3">
                  <button
                    onClick={() => openModal(item)}
                    className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-4 py-1 shadow-md transition transform hover:scale-105"
                    aria-label="Edit user"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-full px-4 py-1 shadow-md transition transform hover:scale-105"
                    aria-label="Delete user"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {userData.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-10 text-teal-700 font-semibold">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-2xl w-96 p-8 relative animate-fadeIn">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 text-center drop-shadow-md">
              Edit User Data
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateData();
              }}
              className="space-y-5"
            >
              {[
                { label: "Name", name: "name", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Phone", name: "phone", type: "tel" },
                { label: "Role", name: "role", type: "text" },
              ].map(({ label, name, type }) => (
                <div key={name} className="flex flex-col">
                  <label
                    htmlFor={name}
                    className="text-teal-700 font-semibold mb-1 select-none"
                  >
                    {label}:
                  </label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    value={editData[name]}
                    onChange={changeData}
                    required
                    className="border border-teal-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                  />
                </div>
              ))}

              <div className="flex justify-between mt-8">
                <button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full px-6 py-2 shadow-lg transition transform hover:scale-105"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-full px-6 py-2 shadow-lg transition transform hover:scale-105"
                >
                  Cancel
                </button>
              </div>
            </form>

            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-teal-600 hover:text-teal-900 transition text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Tailwind Animations */}
      <style>{`
        @keyframes fadeIn {
          from {opacity: 0; transform: translateY(-10px);}
          to {opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default UserList;
