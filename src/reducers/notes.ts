import { TypeKeys } from "../constants/index";
import {
  ICreateNoteAction,
  IDeleteNoteAction,
  IUpdateNoteAction,
} from "../actions/ActionTypes";


export type NoteActionTypes =
  | IDeleteNoteAction
  | IUpdateNoteAction
  | ICreateNoteAction;


const initialState = [];

export default function notes(state: NoteStoreState = initialState, action: NoteActionTypes) {
  switch (action.type) {
    case TypeKeys.CREATE_NOTE:
      return [...state, action.note];

    case TypeKeys.UPDATE_NOTE:
      return state.map((note) => {
        if (note.id === action.id) {
          const { type, ...updatedNote } = action;
          // return Object.assign({}, note, updatedNote);
          return { ...note, ...updatedNote };
        }

        return note;
      });

    case TypeKeys.DELETE_NOTE:
      return state.filter((note) => note.id !== action.id);

    default:
      return state;
  }
}
