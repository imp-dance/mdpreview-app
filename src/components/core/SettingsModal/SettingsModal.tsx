import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { Settings } from "../../../types";
import { SettingsContext } from "../App/App";

type Props = {
  open: boolean;
  onChange: (newSettings: Partial<Settings>) => void;
};

export const SettingsModal = ({ open, onChange }: Props) => {
  const focusRef = useRef<HTMLDivElement>(null);
  const { setSettings, fontSize } = useContext(SettingsContext);
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
      <h4>Font-size</h4>
      <label>
        <input
          type="number"
          value={fontSize}
          onChange={(e) =>
            setSettings({ fontSize: parseInt(e.target.value, 10) })
          }
        />
      </label>
    </StyledSettingsModal>
  );
};

const StyledSettingsModal = styled.div<Partial<Props>>`
  font-size: 16px;
  h4 {
    margin: 1em 0 0.6em;
    &:first-child {
      margin-top: 0;
    }
  }
  position: fixed;
  bottom: 4em;
  right: 1.2em;
  background: #c4c1d8;
  border-radius: 5px;
  border-bottom-right-radius: 0px;
  min-width: 200px;
  padding: 1em;
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
