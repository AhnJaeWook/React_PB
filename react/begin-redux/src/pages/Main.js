//노트들이 리스트되어 나타날 페이지
import React from "react";
import MainStructure from "components/structure/Header";
import NoteContainer from "containers/NoteContainer";

const Main = () =>{
    return (
        <MainStructure>
            <NoteContainer />
        </MainStructure>
    );
};

export default Main;