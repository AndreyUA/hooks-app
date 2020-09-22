import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alerctContext";

export const Search = () => {
  const [value, setValue] = useState("");

  const { show } = useContext(AlertContext);

  const onSubmit = (e) => {
    if (e.key !== "Enter") {
      return;
    }

    if (value.trim()) {
      console.log("make request with: ", value);
    } else {
      show("Введите данные пользователя");
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
        onKeyPress={onSubmit}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
