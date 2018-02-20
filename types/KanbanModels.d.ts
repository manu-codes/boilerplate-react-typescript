/** model definitions **/

declare interface INote {
    id?: string;
    text?: string;
    completed?: boolean;
}

declare interface ILane {
    id?: string;
    text?: string;
    notes?: any[]
}









declare interface IGenericProps {
    className?: string
}

//   declare type FilterType = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

declare type NoteStoreState = INote[];
declare type LaneStoreState = ILane[];
