import React, { useState } from "react";
import "./index.css";
import InputField from "./components/InputField";
import { DataTable } from "./components/DataTable/DataTable";
import { Column } from "./components/DataTable/DataTable.types";

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  // Sample columns and data for DataTable
  const columns: Column<User>[] = [
    { key: "id", title: "ID", dataIndex: "id", sortable: true },
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "email", title: "Email", dataIndex: "email", sortable: true },
  ];

  const data: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-6 p-6">
      <h1 className="text-3xl font-bold text-gray-800">InputField Demo</h1>

      {/* InputField Examples */}
      <div className="w-80">
        <InputField
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          helperText="This will be your display name"
          clearable
          variant="outlined"
          size="md"
        />
      </div>

      <div className="w-80">
        <InputField
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          invalid={email.length > 0 && !email.includes("@")}
          errorMessage="Please enter a valid email"
          clearable
          variant="filled"
          size="md"
        />
      </div>

      <div className="w-80">
        <InputField
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          helperText="At least 8 characters"
          variant="outlined"
          size="md"
        />
      </div>

      <div className="w-80">
        <InputField
          label="Disabled Field"
          placeholder="Can't type here"
          disabled
          variant="ghost"
          size="md"
        />
      </div>

      {/* DataTable Example */}
      <h1 className="text-3xl font-bold text-gray-800 mt-8">DataTable Demo</h1>
      <div className="w-full max-w-3xl">
        <DataTable
          data={data}
          columns={columns}
          selectable
          onRowSelect={(rows: User[]) => setSelectedUsers(rows)}
        />
        <p className="mt-2 text-gray-700">
          Selected Users: {selectedUsers
            .slice()
            .sort((a, b) => a.id - b.id)
            .map((u) => u.name)
            .join(", ") || "None"}
        </p>
      </div>
    </div>
  );
}

export default App;
