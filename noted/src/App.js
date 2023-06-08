import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import { PageProvider } from "./context/Page";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

// import { Container } from "react-bootstrap";

function App() {
  const [data, loading] = useFetch("http://localhost:3000/pages");
  const [pages, setPages] = useState(data);
  const [activePage, setActivePage] = useState(data);

  useEffect(() => {
    if (data) {
      console.log(data);
      setPages(data);
      setActivePage(data[0]);
    }
  }, [data]);

  if (loading || !data) {
    return <div>loading...</div>;
  }

  const context = {
    sidebar: [pages, setPages],
    page: [activePage, setActivePage],
  };

  return (
    <PageProvider value={context}>
      {/* <Container>
        <Row>
          <Col className="col-md-3">
            <Sidebar />
          </Col>
          <Col className="col-md-9">
            <div>{activePage && <Page />}</div>
          </Col>
        </Row>
      </Container> */}
      <Sidebar />
      {activePage && <Page />}
    </PageProvider>
  );
}

export default App;
