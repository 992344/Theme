import React from "react";
import { Table,Button } from "components/ui";
import { useTable, useSortBy } from "react-table";

const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "Name",
  },
  {
    Header: "Contact No",
    accessor: "Contact",
  },
  {
    Header: "Plant Address  ",
    accessor: "Paddress",
  },
  {
    Header: "City",
    accessor: "city",
  },
  {
    Header: "Pin",
    accessor: "pin",
  },
  {
    Header: "Billing Address",
    accessor: "Baddress",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const data = [
  {
    id: "1",
    Name: "Anders",
    Contact: 7770040256,
    Paddress: 28,
    city: 56,
    pin: "415414",
    Baddress:"Pune",
    status:"Active",
    subRows: undefined,
  },
  {
    id: "2",
    Name: "Chang",
    Contact: 9,
    Paddress: 90,
    city: 77,
    pin: "single",
    subRows: undefined,
  },
  {
    id: "3",
    Name: "Mendel",
    Contact: 1,
    Paddress: 16,
    city: 56,
    pin: "single",
    subRows: undefined,
  },
  {
    id: "4",
    Name: "Bennett",
    Contact: 43,
    Paddress: 94,
    city: 53,
    pin: "single",
    subRows: undefined,
  },
  {
    id: "5",
    Name: "Tannamuri",
    Contact: 37,
    Paddress: 85,
    city: 28,
    pin: "single",

    subRows: undefined,
  },
];

const { Tr, Th, Td, THead, TBody, Sorter } = Table;

const New = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <>
      <div className="inline-flex flex-wrap xl:flex gap-rend justify-between pb-4 " >
            <h5>Project Management</h5>
			<Button variant="solid" >Add New</Button>
           
		</div>
      <Table {...getTableProps()}>
        <THead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    <Sorter sort={column.isSortedDesc} />
                  </span>
                </Th>
              ))}
            </Tr>
          ))}
        </THead>
        <TBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  );
                })}
              </Tr>
            );
          })}
        </TBody>
      </Table>
    </>
  );
};

export default New;
