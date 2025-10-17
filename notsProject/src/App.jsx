import React, { useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const formSubmitHandel = (e) => {
    e.preventDefault();

    if (!title.trim() || !details.trim()) return;

    const copyTask = [...task];
    copyTask.push({ id: Date.now(), title: title.trim(), details: details.trim() });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (id) => {
    const updatedNotes = task.filter((note) => note.id !== id);
    setTask(updatedNotes);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 flex flex-col items-center justify-start py-10 px-4">
      <form
        onSubmit={formSubmitHandel}
        className="w-full max-w-4xl bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 flex flex-col md:flex-row justify-between items-center gap-10"
      >
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-gray-800">📝 Create a Note</h1>

          <input
            className="outline-none px-5 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-400 transition w-full"
            type="text"
            placeholder="Enter Note Heading"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="px-5 py-3 border-2 border-gray-300 rounded-xl h-28 outline-none focus:border-blue-400 transition w-full resize-none"
            placeholder="Enter details"
            value={details}
            required
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition text-white font-medium px-6 py-3 rounded-xl shadow-md"
          >
            <FiPlus /> Add Note
          </button>
        </div>

        <div className="hidden md:block">
          <img
            className="h-52 w-auto animate-bounce"
            src="https://clipart-library.com/img1/800452.png"
            alt="Note Illustration"
          />
        </div>
      </form>

      <div className="w-full max-w-5xl mt-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">📚 Your Notes</h2>

        {task.length === 0 ? (
          <p className="text-gray-500 text-center">No notes yet. Add one above!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {task.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.details}</p>
                  </div>

                  <button
                    onClick={() => deleteNote(item.id)}
                    className="ml-2 mt-1 bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg shadow transition"
                    aria-label="Delete note"
                    title="Delete"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
