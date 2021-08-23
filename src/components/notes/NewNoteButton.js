import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { colorOptions, create, setNoteUnderCreation } from "../../containers/notes/notesSlice";

const NewNoteButtonContainer = styled.div`
    width: 220px;
    height: 160px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border-radius: 12px;
    border: 2px dashed black;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 10px rgba(166, 173, 201, 0.4);
    box-shadow: 0 2px 10px rgba(166, 173, 201, 0.4);
`;

const AddIcon = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    svg {
        color: black;
        font-size: 2em;
        font-weight: bolder;
    }
`;

export function NewNoteButton({ setNoteInPreview }) {
    let dispatch = useDispatch();
    const meta = useSelector((state) => state.notes.meta);

    const handleNewNoteAction = () => {
        // if (!meta.isNewNoteUnderCreation) {
        let newNote = {
            id: Math.floor(Math.random() * 10000),
            globalKey: meta.globalKey,
            content: "",
            color: colorOptions.white,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        dispatch(create(newNote));
        setNoteInPreview(newNote);
        // dispatch(setNoteUnderCreation(true));
        // }
    };
    return (
        <>
            <NewNoteButtonContainer onClick={() => handleNewNoteAction()}>
                <AddIcon>
                    <AiOutlinePlus />
                </AddIcon>
            </NewNoteButtonContainer>
        </>
    );
}