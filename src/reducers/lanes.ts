

import {
  IAttachToLaneAction,
  ICreateLaneAction,
  IDeleteLaneAction,
  IDetachFromLaneAction,
  IMoveAction,
  IUpdateLaneAction,
} from "../actions/ActionTypes";
import { TypeKeys } from "../constants/index";

const initialState: ILane[] = [];
export type LaneActionTypes =
  | IDeleteLaneAction
  | IUpdateLaneAction
  | ICreateLaneAction
  | IAttachToLaneAction
  | IDetachFromLaneAction
  | IMoveAction;
import update = require("react-addons-update");

export default function lanes(state: ILane[] = initialState, action: LaneActionTypes): any[] {
  switch (action.type) {
    case TypeKeys.CREATE_LANE:
      return [...state, action.lane];
    case TypeKeys.UPDATE_LANE:
      return state.map((lane) => {
        if (lane.id === action.id) {
          const { type, ...updatedLane } = action;
          return { ...lane, ...updatedLane };
        }
        return lane;
      });

    case TypeKeys.DELETE_LANE:
      return state.filter((lane) => lane.id !== action.id);

    case TypeKeys.ATTACH_TO_LANE:
      const laneId = action.laneId;
      const noteId = action.noteId;

      return state.map((lane) => {
        const index = lane.notes.indexOf(noteId);

        if (index >= 0) {
          // return Object.assign({}, lane, {
          //   notes:
          //     lane.notes.length > 1
          //       ? lane.notes.slice(0, index).concat(lane.notes.slice(index + 1))
          //       : []
          // });
          return {
            ...lane,
            notes: lane.notes.length > 1
              ? lane.notes.slice(0, index).concat(lane.notes.slice(index + 1))
              : [],
          };

        }
        if (lane.id === laneId) {
          // return Object.assign({}, lane, {
          //   notes: [...lane.notes, noteId]
          // });
          return { ...lane, notes: [...lane.notes, noteId] };
        }
        return lane;
      });

    case TypeKeys.DETACH_FROM_LANE:
      return state.map((lane) => {
        if (lane.id === action.laneId) {
          // return Object.assign({}, lane, {
          //   notes: lane.notes.filter(id => id !== action.noteId)
          // });
          return { ...lane, notes: lane.notes.filter((id) => id !== action.noteId) };
        }

        return lane;
      });

    case TypeKeys.MOVE:
      const sourceId = action.sourceId;
      const targetId = action.targetId;
      const sourceLane = state.filter((lane) => {
        return lane.notes.indexOf(sourceId) >= 0;
      })[0];
      const targetLane = state.filter((lane) => {
        return lane.notes.indexOf(targetId) >= 0;
      })[0];
      const sourceNoteIndex = sourceLane.notes.indexOf(sourceId);
      const targetNoteIndex = targetLane.notes.indexOf(targetId);

      if (sourceLane === targetLane) {
        return state.map((lane) => {
          return lane.id === sourceLane.id
            // ? Object.assign({}, lane, {
            //   notes: update(sourceLane.notes, {
            //     $splice: [
            //       [sourceNoteIndex, 1],
            //       [targetNoteIndex, 0, sourceId]
            //     ]
            //   })
            // })

            ? {
              ...lane, notes: update(sourceLane.notes, {
                $splice: [
                  [sourceNoteIndex, 1],
                  [targetNoteIndex, 0, sourceId],
                ],
              }),
            }
            : lane;
        });
      } else {
        return state.map((lane) => {
          if (lane === sourceLane) {
            // get rid of the source note
            // return Object.assign({}, lane, {
            //   notes:
            //     lane.notes.length > 1
            //       ? lane.notes
            //         .slice(0, sourceNoteIndex)
            //         .concat(lane.notes.slice(sourceNoteIndex + 1))
            //       : []
            // });
            return {
              ...lane, notes:
                lane.notes.length > 1
                  ? lane.notes
                    .slice(0, sourceNoteIndex)
                    .concat(lane.notes.slice(sourceNoteIndex + 1))
                  : [],
            };

          }

          if (lane === targetLane) {
            // and move it to target
            // return Object.assign({}, lane, {
            //   notes: lane.notes
            //     .slice(0, targetNoteIndex)
            //     .concat([sourceId])
            //     .concat(lane.notes.slice(targetNoteIndex))
            // });
            return {
              ...lane, notes: lane.notes
                .slice(0, targetNoteIndex)
                .concat([sourceId])
                .concat(lane.notes.slice(targetNoteIndex)),
            };
          }

          return lane;
        });
      }



    default:
      return state;
  }
}
