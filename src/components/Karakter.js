import React from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import styled from "styled-components";
import Filmler from "./Filmler";

export default function Karakter(props) {
  const { id, character } = props;
  const styDiv = styled.div`
    font-size: 2rem;
  `;

  return (
    <div>
      <AccordionItem>
        <AccordionHeader targetId={id}>{character.name}</AccordionHeader>
        <AccordionBody accordionId={id}>
          <styDiv>Gender: {character.gender} </styDiv>
          <styDiv>Height: {character.height}</styDiv>
          <styDiv>Mass: {character.mass}</styDiv>
          <Filmler />
        </AccordionBody>
      </AccordionItem>
    </div>
  );
}
