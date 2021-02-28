import React from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { SummaryCardTick } from "./../customIcons";

const ProgressCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    width: 90%;
    height: 45%;
    border-radius: 10px;
    border-left: 5px solid #77dd77;
    /* -webkit-box-shadow: 0 2px 10px rgba(166, 173, 201, 0.4);
    box-shadow: 0 2px 10px rgba(166, 173, 201, 0.4); */
    background-color: #f0fff0;
`;

const ProgressCardText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 85%;
    height: 45%;
    /* background-color: #d1effa; */
    font-weight: bold;
    p {
        font-size: 1.2em;
        margin: 0;
    }
    span {
        color: #4a4b46;
        font-size: 0.5em;
    }
`;

const absoluteIconStyles = css`
    position: absolute;
    top: 5px;
    right: 5px;
`;

const TickIconDiv = styled.div`
    width: ${(p) => (p.noTasks ? "45%" : "20px")};
    ${(p) => (p.noTasks ? "" : absoluteIconStyles)}
    svg {
        color: #77dd77;
        opacity: ${(p) => (p.noTasks ? "0.7" : 1)};
    }
`;

export function TaskProgressCard() {
    const completedTasksCount = useSelector((s) => s.tasks.meta.completedTasksCount);
    const totalTasksCount = useSelector((s) => s.tasks.taskArray.length);

    return (
        <ProgressCard>
            {totalTasksCount !== 0 && (
                <>
                    <ProgressCardText>
                        <p>{completedTasksCount}</p>
                        <span>done tasks</span>
                    </ProgressCardText>
                    <ProgressCardText>
                        <p>{totalTasksCount}</p>
                        <span>total tasks</span>
                    </ProgressCardText>
                </>
            )}

            <TickIconDiv noTasks={totalTasksCount === 0}>
                <SummaryCardTick />
            </TickIconDiv>
        </ProgressCard>
    );
}
