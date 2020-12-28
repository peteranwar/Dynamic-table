import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Alert,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import {
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
const Rows = ({ columnsEl }) => {
  return <tr>{columnsEl}</tr>;
};

const Columns = () => {
  return <td>-</td>;
};

function App() {
  const [rows, setRows] = useState(4);
  const [columns, setColumns] = useState(4);

  const rowsEl = [];
  const columnsEl = [];

  const rowsFunc = () => {
    for (let i = 0; i < rows; i++) {
      if (rows > i) {
        rowsEl.push(<Rows key={i} columnsEl={columnsEl} />);
      }
    }
  };

  const columnsFunc = () => {
    for (let i = 0; i < columns; i++) {
      if (columns > i) {
        columnsEl.push(<Columns key={i} />);
      }
    }
  };

  columnsFunc();
  rowsFunc();

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  No. Columns
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="number"
                value={columns}
                onChange={(e) => setColumns(e.target.value)}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
              {columns == 0 || columns < 0 ? (
                <Container>
                  <Alert className="mt-3 " variant="warning">
                    ⚠ You Should add at least one column.{" "}
                  </Alert>
                </Container>
              ) : null}
            </InputGroup>
          </Col>
          <Col>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  No. Rows
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                min="1"
                type="number"
                value={rows}
                onChange={(e) => setRows(e.target.value)}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {/* <Col sm={2} className="text-center" style={{fontSize: '25px'}}>
            <FaArrowUp className="up" />
            <FaArrowLeft className="left" /> <FaArrowRight className="right" />
            <FaArrowDown className="down" />
          </Col> */}
          <Col>
            <Table
              className="text-center"
              bordered
              striped
              responsive
              size="sm"
            >
              <tbody>{rowsEl}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
