import { combineReducers, Reducer } from "redux";
import lanes from "./lanes";
import notes from "./notes";


export interface IRootState {
  lanes: LaneStoreState;
  notes: NoteStoreState;
}
export default combineReducers<IRootState>({
  lanes,
  notes,
});
