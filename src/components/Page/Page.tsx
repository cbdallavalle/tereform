import styled from 'styled-components'

const DivViewPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  min-height: 600px;
`

type ViewPage = {
  children: React.ReactNode;
};

function ViewPage({children}: ViewPage) {
  return (
    <DivViewPage>
      {children}
    </DivViewPage>
  );
}

export default ViewPage;