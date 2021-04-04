import styled from "styled-components";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-markdown";
import "prismjs/themes/prism-okaidia.css";

type Props = {
  onChange: (e: string) => void;
  value: string;
};

export const CodeEditor = ({ onChange, value }: Props) => {
  return (
    <Container>
      <StyledCodeEditor
        highlight={(code) =>
          Prism.highlight(code, Prism.languages.markdown, "markdown")
        }
        onValueChange={(code) => onChange(code)}
        value={value}
      />
    </Container>
  );
};

const Container = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  width: 100%;
`;

const StyledCodeEditor = styled(Editor)`
  color: #f9f9f9;
  min-height: 100vh;
  background: #001514;
  width: 100%;
  padding: var(--padding) !important;
  font-family: "IBM Plex Mono", monospace;
  .token.regex,
  .token.important {
    color: #ffbd00 !important;
  }
  .token.url {
    color: #a6b1e1;
  }
  textarea {
    font-family: "IBM Plex Mono", monospace;
    min-height: 100vh;
    padding: var(--padding) !important;
  }
`;

export default CodeEditor;
