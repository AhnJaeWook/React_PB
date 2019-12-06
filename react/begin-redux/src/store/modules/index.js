// 모든 모듈들을 불러와서 합치는 작업이 이뤄짐
import { notes, notesEpics } from "./notes";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

export const rootReducers = combineReducers({ notes });
export const rootEpics = combineEpics(
    notesEpics.addNoteEpic, 
    notesEpics.getNotesEpic,
    notesEpics.updateNoteEpic,
    notesEpics.deleteNoteEpic
    );