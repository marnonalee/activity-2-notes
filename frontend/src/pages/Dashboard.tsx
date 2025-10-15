import React, { useState, useEffect, useContext } from "react";
import axios from "../api";
import NoteCard from "../components/NoteCard";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../dashboard.css";

interface Note {
  id: string;
  title: string;
  content: string;
}

const Dashboard = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchNotes = async () => {
    try {
      const res = await axios.get("/notes");
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addOrUpdateNote = async () => {
    try {
      if (editingNote) {
        const res = await axios.put(`/notes/${editingNote.id}`, { title, content });
        setNotes(notes.map((n) => (n.id === editingNote.id ? res.data.note : n)));
        setEditingNote(null);
      } else {
        const res = await axios.post("/notes", { title, content });
        setNotes([...notes, res.data]);
      }
      setTitle("");
      setContent("");
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNote = async (id: string) => {
    try {
      await axios.delete(`/notes/${id}`);
      setNotes(notes.filter((note) => note.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const startEditing = (note: Note) => {
    setEditingNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleLogout = () => {
    auth?.logout();
    navigate("/login");
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>📒 Notes Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        <div className="note-form">
          <h3>{editingNote ? "Edit Note" : "Add a New Note"}</h3>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={addOrUpdateNote}>
            {editingNote ? "Save Changes" : "Add Note"}
          </button>
          {editingNote && (
            <button
              style={{
                marginTop: "0.5rem",
                background: "#94a3b8",
                color: "white",
              }}
              onClick={() => {
                setEditingNote(null);
                setTitle("");
                setContent("");
              }}
            >
              Cancel
            </button>
          )}
        </div>

        <div className="notes-grid">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={deleteNote}
              onEdit={startEditing}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
