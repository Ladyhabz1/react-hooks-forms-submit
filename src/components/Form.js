import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (firstName.length > 0) {
      setSubmittedData([...submittedData, { firstName, lastName }]);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["First name is required!"]);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
        <button type="submit">Submit</button>
      </form>

      {/* Display error messages */}
      {errors.length > 0 && errors.map((error, index) => (
        <p key={index} style={{ color: "red" }}>{error}</p>
      ))}

      <h3>Submissions</h3>
      {submittedData.map((data, index) => (
        <div key={index}>{data.firstName} {data.lastName}</div>
      ))}
    </div>
  );
}

export default Form;
