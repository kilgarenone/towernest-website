import React from "react";
import Img from "gatsby-image";
import { css } from "react-emotion";
import Section from "../Section";
import Container from "../Container";
import GridParent from "../GridParent";
import GridItem from "../GridItem";
import Heading from "../Heading";
import BetaSignup from "../BetaSignup";
import InputButtonGroup from "../InputButtonGroup";
import spacing from "../../css/spacing";

function JoinUsAction({ joinUsActionImg }) {
  return (
    <Section>
      <Container>
        <GridParent>
          <GridItem width="60%">
            <Heading
              className={css`
                margin-bottom: ${spacing.space3};
              `}
              isSerifFont
              tag="h3"
            >
              Own your finances. <br />
              Take action now.
            </Heading>
            <BetaSignup>
              {({
                handleSubmit,
                inputValue,
                handleInputChange,
                isSubmitting,
                submissionSuccess
              }) => (
                <InputButtonGroup
                  handleSubmit={handleSubmit}
                  inputValue={inputValue}
                  handleInputChange={handleInputChange}
                  isSubmitting={isSubmitting}
                  submissionSuccess={submissionSuccess}
                />
              )}
            </BetaSignup>
          </GridItem>
          <GridItem
            className={css`
              position: relative;
            `}
            width="25%"
          >
            <Img
              title="Ornament image for headline section"
              alt="Reconcile the time-tested philosophy with modern technology"
              fluid={joinUsActionImg}
            />
          </GridItem>
        </GridParent>
      </Container>
    </Section>
  );
}

export default JoinUsAction;
