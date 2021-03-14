import React, { useState } from "react";
import { SplitPane } from "react-multi-split-pane";
import { GlobalStyle, SettingsButton, StyledApp } from "./styles";
import { CodeEditor } from "../../common/CodeEditor/CodeEditor";
import { Preview } from "../../common/Preview/Preview";
import { SettingsModal } from "../SettingsModal/SettingsModal";

function App() {
  const [markdown, setMarkdown] = useState("# mdpreview.app\n---");
  const [settingsOpen, setSettingsOpen] = useState(false);
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <SplitPane split="vertical" minSize={50}>
          <CodeEditor onChange={(code) => setMarkdown(code)} value={markdown} />
          <Preview markdown={markdown} />
        </SplitPane>
        <SettingsButton
          aria-label="Open settings"
          aria-pressed={settingsOpen}
          onClick={() => setSettingsOpen(!settingsOpen)}
        />
        <SettingsModal open={settingsOpen} />
      </StyledApp>
    </>
  );
}

export default App;
