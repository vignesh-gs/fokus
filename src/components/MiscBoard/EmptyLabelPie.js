import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { ImPieChart } from "react-icons/im";
import styled from "styled-components";

const EmptyLabelPieDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    svg {
        color: #fff;
        font-size: 6em;
    }
`;

export function EmptyLabelPie() {
    return (
        <EmptyLabelPieDiv data-tip="" data-for="EmptyLabelPie">
            <ImPieChart />
            <ReactTooltip id="EmptyLabelPie" getContent={() => "Tasks/Labels Pie"} />
        </EmptyLabelPieDiv>
    );
}