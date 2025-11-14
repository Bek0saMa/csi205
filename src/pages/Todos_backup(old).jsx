import { useEffect, useState } from "react";
import { Form, Table, Badge, Button } from "react-bootstrap";
import fetchTodos from "../data/todos";

const Todos = () => {
  const [todosRaw, setTodosRaw] = useState([]);
  const [todos, setTodos] = useState([]);
  const [onlyWaiting, setOnlyWaiting] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [curPage, setCurPage] = useState(1)
  const [numPages, setNumPages] = useState(3)

  useEffect(() => {
    setTodosRaw(fetchTodos());
  }, []);

  useEffect(() => {
    setTodos(todosRaw);
  }, [todosRaw]);

  useEffect(() => {
    console.log("onlyWaiting : " + onlyWaiting);
  }, [onlyWaiting]);

  useEffect(() => {
    console.log("itemsPerPage : " + itemsPerPage);
  }, [itemsPerPage]);

  return (
    <>
      {/* Filters */}
      <div className="d-flex align-items-center justify-content-between">
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Show only waiting"
          onChange={(e) => setOnlyWaiting(e.target.checked)}
        />

        <Form.Select
          aria-label="Default select example"
          className="w-50"
          onClick={(e) => setItemsPerPage(e.target.value)}
        >
          <option value={5}>5 items per page</option>
          <option value={10}>10 items per page</option>
          <option value={50}>50 items per pages</option>
          <option value={100}>100 items per pages</option>
        </Form.Select>
      </div>

      {/* Table */}
      <div>
        <Table striped hover>
          <thead className="table-dark">
            <tr>
              <th style={{ width: "4rem" }}>ID</th>
              <th>Title</th>
              <th className="text-end" style={{ width: "12rem" }}>
                Completed &nbsp;<Button><i className="bi bi-plus"></i></Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr> */}

            {todos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td className="text-center">
                    <Badge bg="secondary">{todo.id}</Badge>
                  </td>
                  <td>{todo.title}</td>
                  <td className="text-end">
                    {todo.completed ? (
                      <Badge bg="success">
                        Done <i className="bi bi-check"></i>
                      </Badge>
                    ) : (
                      <Button variant="warning">
                        Waiting <i className="bi bi-clock"></i>
                      </Button>
                    )}
                    &nbsp;
                    <Button variant="danger"><i className="bi bi-trash"></i></Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      {/* Page Control */}
      <div className="gap-2">
        <Button variant="outline-primary" onClick={() => setCurPage(1)}  disabled={ curPage === 1 }>First</Button>&nbsp;
        <Button variant="outline-primary" onClick={() => curPage > 1 && setCurPage((p) => p - 1)} disabled={ curPage === 1 }>Previous</Button>&nbsp;
        <span>{curPage}&nbsp;/&nbsp;{numPages}</span>&nbsp;
        <Button variant="outline-primary" onClick={() => curPage < numPages && setCurPage((p) => p + 1)} disabled={ curPage === numPages }>Next</Button>&nbsp;
        <Button variant="outline-primary" onClick={() => setCurPage(numPages)} disabled={ curPage === numPages }>Last</Button>
      </div>
    </>
  );
};

export default Todos;
