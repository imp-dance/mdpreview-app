import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{
  fontSize?: Number;
}>`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,400&display=swap');
    body, html {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size:${(props) => `${props.fontSize}px` ?? "16px"};
        padding:0;
        margin:0;
    }
`;

export const StyledApp = styled.div`
  background: #001514;
  --padding: 2rem;

  .Resizer {
    background: #000;
    opacity: 0.2;
    z-index: 1;
    box-sizing: border-box;
    background-clip: padding-box;
  }

  .Resizer:hover {
    transition: all 2s ease;
  }

  .Resizer.horizontal {
    height: 11px;
    margin: -5px 0;
    border-top: 5px solid rgba(255, 255, 255, 0);
    border-bottom: 5px solid rgba(255, 255, 255, 0);
    cursor: row-resize;
  }

  .Resizer.horizontal:hover,
  .Resizer.horizontal.resizing {
    border-top: 5px solid rgba(0, 0, 0, 0.5);
    border-bottom: 5px solid rgba(0, 0, 0, 0.5);
  }

  .Resizer.vertical {
    width: 11px;
    margin: 0 -5px;
    border-left: 5px solid rgba(255, 255, 255, 0);
    border-right: 5px solid rgba(255, 255, 255, 0);
    cursor: col-resize;
  }

  .Resizer.vertical:hover,
  .Resizer.vertical.resizing {
    border-left: 5px solid rgba(0, 0, 0, 0.5);
    border-right: 5px solid rgba(0, 0, 0, 0.5);
  }

  .DragLayer {
    z-index: 1;
    pointer-events: none;
  }

  .DragLayer.resizing {
    pointer-events: auto;
  }

  .DragLayer.horizontal {
    cursor: row-resize;
  }

  .DragLayer.vertical {
    cursor: col-resize;
  }
`;

export const SettingsButton = styled.button`
  appearance: none;
  border: none;
  border-radius: 50%;
  font-size: 16px;
  width: 2.2em;
  height: 2.2em;
  position: fixed;
  bottom: 1em;
  right: 1em;
  cursor: pointer;
  background: url("/settings.png") no-repeat center center;
  background-size: 1.1em;
  background-color: rgba(0, 0, 0, 0.1);
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
