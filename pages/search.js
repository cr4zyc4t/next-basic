import styled from "styled-components";
import { useRouter } from "next/router";

const JSONContainer = styled.div`
  white-space: pre;
  overflow: auto;
`;

export default function SearchResult() {
  const router = useRouter();
  return (
    <JSONContainer>
      {router.asPath}
      <br />
      {JSON.stringify(router.query, null, 2)}
    </JSONContainer>
  );
}