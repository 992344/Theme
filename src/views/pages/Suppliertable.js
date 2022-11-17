import React from "react";
import { Table,Button } from "components/ui";
import { useTable, useSortBy } from "react-table";
import { HiPlusCircle, HiTruck } from "react-icons/hi";
import { Link } from "react-router-dom";

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
    Header: "Grade",
    accessor: "grade",
  },
  {
    Header: "Mobile No",
    accessor: "mobileNo",
  },
  {
    Header: "Address  ",
    accessor: "address",
  },
  {
    Header: "City",
    accessor: "city",
  },
  {
    Header: "Pin Code",
    accessor: "pin",
  },
  {
    Header: "Location",
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
    grade:"A",
    mobileNo: 7770040256,
    address: "Pimple Nilakh",
    city: "Pune",
    pin: "415414",
    Baddress:"Pune",
    status:"Approved",
    subRows: undefined,
  },
  {
    id: "2",
    Name: "Chang",
    grade:"B",
    mobileNo: 9923441548,
    address: "Aundh",
    city: "Pune",
    pin: "415414",
    Baddress:"Pune",
    status:"Reject",
    subRows: undefined,
  },
  {
    id: "3",
    Name: "Mendel",
    grade:"C",
    mobileNo:9271401918,
    address: "Dhanu",
    city: "Pune",
    pin: "415414",
    status:"Pending",
    Baddress:"Pune",
    subRows: undefined,
  },
  {
    id: "4",
    Name: "Bennett",
    grade:"A",
    mobileNo: 9766447050,
    address: "Hinjevadi",
    city: "Pune",
    pin: "415414",
    status:"Approved",
    Baddress:"Pune",
    subRows: undefined,
  },
  {
    id: "5",
    Name: "Tannamuri",
    grade:"B",
    mobileNo: 7057976880,
    address: "Pimpale Gurav",
    city: "Pune",
    pin: "415414",
    status:"Reject",
    Baddress:"Pune",
    subRows: undefined,
  },
];

const { Tr, Th, Td, THead, TBody, Sorter } = Table;

const Suppliertable = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <>
      <div className="inline-flex flex-wrap xl:flex gap-rend justify-between pb-3 ml-4 " >
      <span className="inline-flex justify-between gap-rend">
             <h4><HiTruck /></h4>
            <h5 className="ml-3"> Supplier Management</h5></span>
            <Link 
				className="block lg:inline-block md:mb-0 mb-4"
			 	to="/SupplierManagement/AddNew" 
			>
				<Button
					block
					variant="solid"
					size="sm" 
					icon={<HiPlusCircle />}
				>
					Add Product
				</Button>
			</Link>
			{/* <Button size="sm" variant="solid" >Add New</Button> */}
           
		</div>
      <Table {...getTableProps()}>
        <THead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th  {...column.getHeaderProps(column.getSortByToggleProps())}>
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

export default Suppliertable;
