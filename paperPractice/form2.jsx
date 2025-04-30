import React, { PureComponent, useEffect, useState } from "react";
function FeedBackForm() {
  const [options, setoptions] = useState(["CSE", "PHARMA", "NURSING"]);//options
  const [data, setdata] = useState({
    name: "",
    deptt: "",
    feedback: "",
    rating: "",
  });                                                  // data object
  const [list, setlist] = useState([]);
  function handler(e) {
    const { name, value } = e.target;
    setdata((prevData) => ({ ...prevData, [name]: value }));
  }
  const [error, seterror] = useState("");
  function handleSubmitt(e) {
    e.preventDefault();
    if (!data.name || !data.deptt || !data.feedback || !data.rating) {
      seterror("TYPE SOMETHING MOTHERFU**ER");
      return ;
    }
    setlist((prev) => [...prev, data]);
    seterror("");
    setdata({ name: "", deptt: "", feedback: "", rating: "" });
  }

  return (
    <>
      <form onSubmit={handleSubmitt}>
        {error && <h1 color="red">{error}</h1>}
        Name:{" "}
        <input type="text" value={data.name} name="name" onChange={handler} />
        <br></br>
        Department:{" "}
        <select onChange={handler} name="deptt" value={data.deptt}>
        <option value="" disabled>Select Department</option>
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <br />
        <textarea onChange={handler} value={data.feedback} name="feedback"></textarea>
        <br />
        rating:
        <input
          type="radio"
          value={1}
          name="rating"
          checked={data.rating === "1"}
          onChange={handler}
        />
        1
        <input
          type="radio"
          value={2}
          name="rating"
          checked={data.rating === "2"}
          onChange={handler}
        />
        2
        <input
          type="radio"
          value={3}
          name="rating"
          checked={data.rating === "3"}
          onChange={handler}
        />
        3
        <input
          type="radio"
          value={4}
          name="rating"
          checked={data.rating === "4"}
          onChange={handler}
        />
        4
        <input
          type="radio"
          value={5}
          name="rating"
          checked={data.rating === "5"}
          onChange={handler}
        />
        5<button type="submit">submit</button>
      </form>
      <table border={1} cellSpacing={0} cellPadding={15}>
        <thead>
          <th>Name</th>
          <th>Deptt</th>
          <th>FeedBack</th>
          <th>Rating</th>
        </thead>
        <tbody>
          {list.map((obj) => (
            <tr>
              <td>{obj.name}</td>
              <td>{obj.deptt}</td>
              <td>{obj.feedback}</td>
              <td>{obj.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default FeedBackForm;
