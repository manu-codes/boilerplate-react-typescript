import { v4 } from "uuid";
import { TypeKeys } from "../constants/index";
import {
  ICreateNoteAction,
  IDeleteNoteAction,
  IUpdateNoteAction,
} from "../actions/ActionTypes";


export function createNote(note): ICreateNoteAction {
  return {
    note: {
      id: v4(),
      ...note,
    },
    type: TypeKeys.CREATE_NOTE,
  };
}

export function updateNote(updatedNote): IUpdateNoteAction {
  return {
    type: TypeKeys.UPDATE_NOTE,
    ...updatedNote,
  };
}

export function deleteNote(id): IDeleteNoteAction {
  return {
    id,
    type: TypeKeys.DELETE_NOTE,
  };
}
