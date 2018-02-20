import { v4 } from "uuid";
import {
  IAttachToLaneAction,
  ICreateLaneAction,
  IDeleteLaneAction,
  IDetachFromLaneAction,
  IMoveAction,
  IUpdateLaneAction,
} from "../actions/ActionTypes";
import { TypeKeys } from "../constants/index";


export function createLane(lane: ILane): ICreateLaneAction {
  return {
    lane: {
      id: v4(),
      notes: lane.notes || [],
      ...lane,
    },
    type: TypeKeys.CREATE_LANE,
  };
}

export function updateLane(updatedLane: any): IUpdateLaneAction {
  return {
    type: TypeKeys.UPDATE_LANE,
    ...updatedLane,
  };
}

export function deleteLane(id): IDeleteLaneAction {
  return {
    id,
    type: TypeKeys.DELETE_LANE,
  };
}

export function attachToLane(laneId, noteId): IAttachToLaneAction {
  return {
    laneId,
    noteId,
    type: TypeKeys.ATTACH_TO_LANE,
  };
}

export function detachFromLane(laneId, noteId): IDetachFromLaneAction {
  return {
    laneId,
    noteId,
    type: TypeKeys.DETACH_FROM_LANE,
  };
}

export function move({ sourceId, targetId }): IMoveAction {
  return {
    sourceId,
    targetId,
    type: TypeKeys.MOVE,
  };
}
