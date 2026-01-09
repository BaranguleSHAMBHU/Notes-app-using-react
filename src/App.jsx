import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);

  // ✅ DELETE FUNCTION (TOP LEVEL)
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newNote = {
      title,
      details,
    };

    setNotes([...notes, newNote]);

    setTitle("");
    setDetails("");
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-8 lg:px-16 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-12">

        {/* LEFT */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8">
            Add Details
          </h1>

          <form className="flex flex-col gap-6" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Enter Notes Heading"
              className="bg-transparent border-2 border-white rounded-lg px-4 py-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Write Details"
              rows="6"
              className="bg-transparent border-2 border-white rounded-lg px-4 py-3"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />

            <button
              type="submit"
              className="bg-white text-black font-semibold py-3 rounded-lg"
            >
              Add Note
            </button>
          </form>
        </div>

        {/* DIVIDER */}
        <div className="hidden lg:block w-[2px] bg-white opacity-70"></div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8">
            Recent Notes
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {notes.map((elem, idx) => (
              <div
                key={idx}
                className="note-bg bg-white h-60 rounded-2xl p-4 pt-14 text-black flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-lg mb-1 truncate">
                    {elem.title}
                  </h3>
                  <p className="text-sm leading-5 line-clamp-4">
                    {elem.details}
                  </p>
                </div>

                <button
                  onClick={() => deleteNote(idx)}
                  className="mt-3 bg-red-600 text-white text-sm py-1 rounded-md hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
