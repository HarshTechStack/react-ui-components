import React from "react";
import { DataTable } from "./DataTable";
import { Column } from "./DataTable.types";

interface User {
  id: number;
  name: string;
  email: string;
}

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email", sortable: true },
];

const data: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

export default {
  title: "Components/DataTable",
  component: DataTable,
};

export const Default = () => <DataTable data={data} columns={columns} />;

export const Loading = () => <DataTable data={[]} columns={columns} loading />;

export const Empty = () => <DataTable data={[]} columns={columns} />;

export const Selectable = () => <DataTable data={data} columns={columns} selectable />;
