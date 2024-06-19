import React, { useState } from 'react';
import './NoteCard.scss';
import NoteCardHeader from './NoteCardHeader/NoteCardHeader';
import { useDispatch } from 'react-redux';
import { movedNotes } from '../../redux/notes';
import { Note } from '../../redux/notes/interfaces';

interface NoteCardProps {
  data: Note;
}

export default function NoteCard({ data }: NoteCardProps) {
  const [isElemLive, setIsElemLive] = useState(false);
  const [isElemOver, setIsElemOver] = useState(false);
  const dispatch = useDispatch();

  const dragStartHandler = (e: React.DragEvent<HTMLLIElement>) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("noteId", data.id);
    setIsElemLive(true);
  };

  const dragEndHandler = () => {
    setIsElemLive(false);
  };

  const dragOverHandler = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    setIsElemOver(true);
  };

  const dropHandler = (e: React.DragEvent<HTMLLIElement>) => {
    const dragId: string = e.dataTransfer.getData('noteId');
    dispatch(movedNotes({ from: dragId, to: data.id }));
    setIsElemOver(false);
  };

  const dragLeaveHandler = () => {
    setIsElemOver(false);
  };

  return (
    <li
      className={`noteCard ${data.color} ${isElemLive ? 'cardLive' : ''} ${isElemOver ? 'isElemOver' : ''}`}
      onDragStart={(e: React.DragEvent<HTMLLIElement>) => dragStartHandler(e)}
      onDragLeave={dragLeaveHandler}
      onDragEnd={dragEndHandler}
      onDragOver={(e: React.DragEvent<HTMLLIElement>) => dragOverHandler(e)}
      onDrop={(e: React.DragEvent<HTMLLIElement>) => dropHandler(e)}
      draggable
    >
      <NoteCardHeader data={data}></NoteCardHeader>
      <p className="noteCard__text">{data.text.length < 360 ? data.text : data.text.slice(0, 357) + '...'}</p>
    </li>
  );
}
