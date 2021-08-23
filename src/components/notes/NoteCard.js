import React, { useState } from "react";
import styled from "styled-components";
import { getTimeDifferenceForNotes } from "../../helpers";

const NoteCardContainer = styled.div`
    width: 220px;
    height: 160px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border-radius: 12px;
    background-color: ${(p) => p.noteColor};
    -webkit-box-shadow: 0 2px 10px rgba(166, 173, 201, 0.4);
    box-shadow: 0 2px 10px rgba(166, 173, 201, 0.4);
`;

const NoteCardContent = styled.div`
    display: inline-block;
    height: 80%;
    p {
        margin-right: 5px;
        margin-left: 15px;
        font-weight: bold;
        font-size: 0.9em;
    }
    word-wrap: break-word;
`;

const NoteCardStatus = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 20%;
    p {
        border-top: 1px solid grey;
        padding: 2px 10px;
        color: rgba(0, 0, 0, 0.6);
        font-size: 0.7em;
    }
`;

function previewNote(str) {
    let nextLineIdx = str.indexOf("\n");
    if (nextLineIdx !== -1) str = str.substring(0, nextLineIdx);
    if (str.length === 0) str = "New Note";
    if (str.length <= 90) return str;
    else return str.substring(0, 90) + "...";
}

export function NoteCard({ note, setNoteInPreview }) {
    return (
        <>
            <NoteCardContainer noteColor={note.color} onClick={() => setNoteInPreview(note)}>
                <NoteCardContent>
                    <p>{previewNote(note.content)}</p>
                </NoteCardContent>

                <NoteCardStatus>
                    <p>
                        <i>
                            {(note.createdAt === note.updatedAt ? "created " : "updated ") +
                                getTimeDifferenceForNotes(new Date(note.updatedAt).getTime(), new Date().getTime())}
                        </i>
                    </p>
                </NoteCardStatus>
            </NoteCardContainer>
        </>
    );
}