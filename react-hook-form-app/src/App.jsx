import React from "react";
import { useForm } from "react-hook-form";

function App() {
  // Initialize the form
  const { register, handleSubmit, watch } = useForm();

  // Submit handler
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert(JSON.stringify(data));
  };

  // Optional: watch all fields
  const allValues = watch();
  console.log("Live form values:", allValues);

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>React Hook Form Example</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="First Name"
          {...register("fName", { required: true })}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <input
          placeholder="Last Name"
          {...register("lName", { required: true })}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <input
          placeholder="Nickname"
          {...register("nickname")}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <button type="submit" style={{ padding: "10px 20px" }}>
          Submit
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h4>Live Values:</h4>
        <pre>{JSON.stringify(allValues, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
