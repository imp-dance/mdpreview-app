import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

type Props = {
  markdown: string;
};

export const Preview = ({ markdown }: Props) => {
  return (
    <PreviewContainer allowDangerousHtml={true}>{markdown}</PreviewContainer>
  );
};

const PreviewContainer = styled(ReactMarkdown)`
  background: #f1f0f8;
  width: 100%;
  padding: var(--padding);
  overflow-y: auto;
  > *:first-child {
    margin-top: 0 !important;
  }
  code {
    color: #333;
  }
  pre {
    background: #f9f9f9;
    padding: 1rem;
  }
`;

export default Preview;
