import { TypeKeys } from "../constants/index";

export interface IDeleteLaneAction {
    id: string;
    type: TypeKeys.DELETE_LANE;
}

export interface ICreateLaneAction {
    lane: ILane;
    type: TypeKeys.CREATE_LANE;
}

export interface IUpdateLaneAction {
    id: string;
    type: TypeKeys.UPDATE_LANE;
}
export interface IAttachToLaneAction {
    laneId: string;
    noteId: string;
    type: TypeKeys.ATTACH_TO_LANE;
}
export interface IDetachFromLaneAction {
    laneId: string;
    noteId: string;
    type: TypeKeys.DETACH_FROM_LANE;
}

export interface IMoveAction {
    sourceId: string;
    targetId: string;
    type: TypeKeys.MOVE;
}



export interface IDeleteNoteAction {
    id: string;
    type: TypeKeys.DELETE_NOTE;
}

export interface ICreateNoteAction {
    note: INote;
    type: TypeKeys.CREATE_NOTE;
}

export interface IUpdateNoteAction {
    id: string;
    type: TypeKeys.UPDATE_NOTE;

}
