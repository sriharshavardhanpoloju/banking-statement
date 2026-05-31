import { useState } from "react";
import api from "../services/api";

function AccountForm() {

  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [balance, setBalance] = useState("");

  const submit = async () => {

    try {

      const response = await api.post("/accounts/", {
        name: name,
        account_number: accountNumber,
        balance: balance
      });

      console.log("Success:", response.data);

      alert("Account Created Successfully");

      setName("");
      setAccountNumber("");
      setBalance("");

    } catch (error) {

      console.error("Full Error:", error);

      if (error.response) {

        console.log("Response Data:", error.response.data);
        console.log("Status:", error.response.status);

        alert(
          `Error ${error.response.status}\n${JSON.stringify(error.response.data)}`
        );

      } else if (error.request) {

        alert(
          "Backend server is not responding.\nCheck if Django server is running."
        );

      } else {

        alert(error.message);

      }
    }
  };

  return (
    <div>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />

      <input
        type="number"
        placeholder="Balance"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
      />

      <button onClick={submit}>
        Create
      </button>

    </div>
  );
}

export default AccountForm;