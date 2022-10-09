import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const StudentList = (props) => {
  //öğrencileri tutacağımız stateler.
  const [students, setStudents] = useState(null);
  //Burada öğrenci bilgileri çekilecektir.

  useEffect(() => {
    axios
      .get("http://localhost:3004/students")
      .then((resStudents) => {
        console.log("resStudents", resStudents);
      })
      .catch((err) => console.log("resStudents Err", err));
  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1
          style={{
            textTransform: "uppercase",
            letterSpacing: "10px",
            color: "red",
          }}
        >
          Student List
        </h1>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>School Number</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Class</th>
            <th>School</th>
            <th>Matematik</th>
            <th>Fizik</th>
            <th>Kimya</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default StudentList;
