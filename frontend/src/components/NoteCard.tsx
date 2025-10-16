import React from "react";
import "../NoteCard.css";

interface NoteCardProps {
  note: { id: string; title: string; content: string };
  onDelete: (id: string) => void;
  onEdit: (note: { id: string; title: string; content: string }) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete, onEdit }) => {
  return (
     <div className="note-card">
      <h4>{note.title}</h4>
      <p>{note.content}</p>
      <div className="note-card-buttons">
        <button className="edit-btn" onClick={() => onEdit(note)}>Edit</button>
        <button className="delete-btn" onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </div>
  );
};

export default NoteCard;
