import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import commentsAPI from "./commentsAPI";
export default function Axios() {
  const [todos, setTodos] = useState([]);

  const data = {
    duck: {
      userId: 1,
      id: 201,
      title: "duck",
    },
    pig: {
      userId: 1,
      id: 202,
      title: "pig",
    },
  };

  // Cách 1

  // get data
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: {
            userId: 1,
            id: 201,
          },
        }
      );
      setTodos(res.data);
    }
    getData();
  }, []);

  // post data
  async function postData(data) {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      useId: data.userId,
      id: data.duck.id,
      title: data.title,
    });
    return res.data;
  }

  // delete data
  async function deleteData(data) {
    const res = await axios.delete(
      "https://jsonplaceholder.typicode.com/todos",
      {
        params: {
          id: data.pig.id,
        },
      }
    );
  }

  // Cách 2
  //   const axios = require("axios");
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/comments", {
  //       params: {
  //         postId: 1,
  //       },
  //     })
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  // Cách 3

  //   useEffect(() => {
  //     const getData = async () => {
  //       const params = {
  //         postId: [1,2],
  //       };
  //       const response = await commentsAPI.getAll(params);
  //       setTodos(response);
  //     };
  //     getData();
  //   }, []);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <p>{todo.title}</p>
          </div>
        );
      })}
      <Button variant="outlined">Get data button</Button>
      <Button variant="outlined" onClick={() => postData(data)}>
        Post button
      </Button>
      <Button variant="outlined" onClick={() => deleteData(data)}>
        Delete button
      </Button>
    </div>
  );
}
