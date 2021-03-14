import React, { useEffect, useRef } from "react";
import styled from "styled-components";

type Props = {
  open: boolean;
};

export const SettingsModal = ({ open }: Props) => {
  const focusRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (focusRef.current && open) {
      focusRef.current.focus();
    }
    if (!open) {
      document.body.focus();
    }
  }, [open, focusRef]);
  return (
    <StyledSettingsModal open={open} ref={focusRef}>
      <h4>Markdown style</h4>
      <label>
        <input type="radio" name="markdown_style" /> Traditional
      </label>
      <label>
        <input type="radio" name="markdown_style" /> Github flavored
      </label>
      <label>
        <input type="radio" name="markdown_style" /> Jira flavored
      </label>
      <h4>Font-size</h4>
      <label>
        <input type="number" value={16} />
      </label>
    </StyledSettingsModal>
  );
};

const StyledSettingsModal = styled.div<Props>`
  h4 {
    margin: 1rem 0 0.6rem;
    &:first-child {
      margin-top: 0;
    }
  }
  position: fixed;
  bottom: 4rem;
  right: 3.5rem;
  background: #c4c1d8;
  border-radius: 5px;
  border-bottom-right-radius: 0px;
  padding: 1rem;
  transition: all 0.15s cubic-bezier(0.65, 0.05, 0.36, 1);
  display: flex;
  flex-direction: column;
  ${(props) =>
    !props.open &&
    `
    opacity:0;
    transform:translate(0.6rem, 0.6rem);
  `}
`;

export default SettingsModal;
