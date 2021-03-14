import React, { useState } from "react";
import { SplitPane } from "react-multi-split-pane";
import { GlobalStyle, SettingsButton, StyledApp } from "./styles";
import { CodeEditor } from "../../common/CodeEditor/CodeEditor";
import { Preview } from "../../common/Preview/Preview";

function App() {
  const [markdown, setMarkdown] = useState("mdpreview.app\n---");
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <SplitPane split="vertical" minSize={50}>
          <CodeEditor onChange={(code) => setMarkdown(code)} value={markdown} />
          <Preview markdown={markdown} />
        </SplitPane>
        <SettingsButton aria-label="Open settings" />
      </StyledApp>
    </>
  );
}

export default App;
