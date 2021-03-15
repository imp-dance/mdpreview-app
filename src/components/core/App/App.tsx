import React, { createContext, useState } from "react";
import { SplitPane } from "react-multi-split-pane";
import { GlobalStyle, SettingsButton, StyledApp } from "./styles";
import { CodeEditor } from "../../common/CodeEditor/CodeEditor";
import { Preview } from "../../common/Preview/Preview";
import { SettingsModal } from "../SettingsModal/SettingsModal";
import { Settings, SettingsOnChange } from "../../../types";

export const SettingsContext = createContext<Settings & SettingsOnChange>({
  fontSize: 16,
  markdownStyle: "traditional",
  setSettings: () => {},
});

function App() {
  const [markdown, setMarkdown] = useState("# mdpreview.app\n---");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>({
    fontSize: 16,
    markdownStyle: "traditional",
  });
  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        setSettings: (newSettings) =>
          setSettings({ ...settings, ...newSettings }),
      }}
    >
      <GlobalStyle fontSize={settings.fontSize} />
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
        <SettingsModal
          open={settingsOpen}
          onChange={(newSettings: Partial<Settings>) =>
            setSettings({ ...settings, ...newSettings })
          }
        />
      </StyledApp>
    </SettingsContext.Provider>
  );
}

export default App;
