import React from "react";

interface TableProps {
  columns: string[];
  data: Array<{
    id: string;
    data: {
      [key: string]: any;
    };
  }>;
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div
      className="overflow-y-auto scrollbar-hide"
      style={{ height: "calc(75vh)" }}
    >
      <table className="w-full border-separate border-spacing-y-1">
        <thead className="text-left">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-4 py-2 bg-secondary sticky top-0 z-10 shadow-sm"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="rounded-md overflow-hidden shadow-sm bg-primary-foreground border"
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-4 py-1 border-y ${
                    colIndex === 0
                      ? "border-l rounded-l-md"
                      : colIndex === columns.length - 1
                      ? "border-r rounded-r-md"
                      : ""
                  } border-foreground`}
                >
                  {row.data[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
