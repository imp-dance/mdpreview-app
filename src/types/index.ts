export type Settings = {
  fontSize: number;
  markdownStyle: "traditional" | "github" | "jira";
};

export type SettingsOnChange = {
  setSettings: (newSettings: Partial<Settings>) => void;
};
