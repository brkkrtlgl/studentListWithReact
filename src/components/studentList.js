import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { SpinnerDiamond } from "spinners-react";

const StudentList = (props) => {
  //öğrencileri tutacağımız stateler.
  const [students, setStudents] = useState(null);

  //Burada öğrenci bilgileri çekilecektir.
  useEffect(() => {
    axios
      .get("http://localhost:3004/students")
      .then((resStudents) => {
        setTimeout(() => {
          setStudents(resStudents.data);
        }, 5000);
        console.log("resStudents", resStudents);
      })
      .catch((err) => console.log("resStudents Err", err));
  }, []);

  if (students === null) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "grid",
          placeItems: "center",
          backgroundColor: "gray",
        }}
      >
        <SpinnerDiamond />;
      </div>
    );
  }
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
            marginTop: "5px",
            textTransform: "uppercase",
            letterSpacing: "10px",
            color: "red",
          }}
        >
          Student List
        </h1>
      </div>
      <Table style={{ marginTop: "5px" }} striped bordered hover variant="dark">
        <thead>
          <tr></tr>
          <tr>
            <th>Row Number</th>
            <th>School Number</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Class</th>
            <th>School</th>
            <th>Mathematics</th>
            <th>Physics</th>
            <th>Chemistry </th>
          </tr>
        </thead>
        <tbody>
          {students.map((students) => {
            return (
              <tr key={students.studentNumber}>
                <td>{}</td>
                <td>{students.studentNumber}</td>
                <td>{students.name}</td>
                <td>{students.surname}</td>
                <td>{students.class}</td>
                <td>{students.school}</td>
                <td>{students.matematik}</td>
                <td>{students.fizik}</td>
                <td>{students.kimya}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentList;
