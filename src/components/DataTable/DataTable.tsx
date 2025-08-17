import React, { useState } from "react";
import { DataTableProps, Column } from "./DataTable.types";

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'asc' | 'desc' } | null>(null);

  // Row selection (no duplicates)
  const handleRowClick = (row: T) => {
    if (!selectable) return;

    const isSelected = selectedRows.some(r => r.id === row.id);
    let updatedRows: T[] = [];

    if (isSelected) {
      updatedRows = selectedRows.filter(r => r.id !== row.id);
    } else {
      updatedRows = selectable ? [...selectedRows, row] : [row];
    }

    setSelectedRows(updatedRows);
    onRowSelect?.(updatedRows);
  };

  // Column sorting
  const handleSort = (column: Column<T>) => {
    if (!column.sortable) return;

    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig?.key === column.dataIndex && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    setSortConfig({ key: column.dataIndex, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    const { key, direction } = sortConfig;
    return [...data].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (valA == null) return 1;
      if (valB == null) return -1;
      if (valA === valB) return 0;

      return (valA > valB ? 1 : -1) * (direction === 'asc' ? 1 : -1);
    });
  }, [data, sortConfig]);

  if (loading)
    return (
      <div className="p-4 text-center text-gray-500" role="status" aria-live="polite">
        Loading data...
      </div>
    );

  if (data.length === 0)
    return (
      <div className="p-4 text-center text-gray-500" role="status" aria-live="polite">
        No data available.
      </div>
    );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200" role="table" aria-label="Data Table">
        <thead className="bg-gray-50">
          <tr role="row">
            {selectable && <th className="px-4 py-2" />}
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-2 text-left text-sm font-medium text-gray-700 cursor-pointer select-none"
                onClick={() => handleSort(col)}
                aria-sort={
                  sortConfig?.key === col.dataIndex
                    ? sortConfig.direction === 'asc'
                      ? 'ascending'
                      : 'descending'
                    : 'none'
                }
              >
                {col.title} {col.sortable && sortConfig?.key === col.dataIndex ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedData.map((row) => (
            <tr
              key={row.id}
              onClick={() => handleRowClick(row)}
              className={`cursor-pointer ${selectedRows.some(r => r.id === row.id) ? "bg-blue-100" : "hover:bg-gray-50"}`}
              role="row"
              aria-selected={selectedRows.some(r => r.id === row.id)}
            >
              {selectable && (
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.some(r => r.id === row.id)}
                    readOnly
                    aria-label={`Select row ${row.id}`}
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2 text-sm text-gray-700" role="cell">
                  {String(row[col.dataIndex] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
