import React, { useState } from "react";
import TempData from "./../config/Data";
import NoteColors from "./../config/NoteColors";
import ReminderData from "../config/ReminderData";
const NoteStore = () => {
  const [notes, setNotes] = useState(TempData);
  const [reminders, setReminders] = useState(ReminderData);
  const [remindertitle, setReminderTitle] = useState("");
  const [searchNote, setSearchNote] = useState('')
  const [color, setColor] = useState(NoteColors[0]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const addNote = () => {
    setNotes([...notes, { color, title }]);
  };

  const addReminder = () => {
    setReminders([...reminders, { color, remindertitle }]);
  };

  const deleteNote = (id) => {
    const filteredNote = notes.filter((item) => item.id !== id);
    setNotes(filteredNote);
  };

  return {
    notes,
    addNote,
    color,
    setColor,
    deleteNote,
    setTitle,
    modalVisible,
    setModalVisible,
    showInput,
    setShowInput,
    addReminder,
    reminders,
    remindertitle,
    setReminderTitle,
    searchNote,
    setSearchNote,
  };
};

export default NoteStore;
