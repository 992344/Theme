import React from "react";
import { Table,Button } from "components/ui";
import { useTable, useSortBy } from "react-table";
import { HiNewspaper, HiOutlinePencil, HiOutlineTrash, HiPlusCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProduct, toggleDeleteConfirmation } from "views/sales/ProductList/store/stateSlice";
const ActionColumn = ({row}) => {
	
	const dispatch = useDispatch()

	const navigate = useNavigate()

	const onEdit = () => {
		navigate(`/app/sales/product-edit/${row.id}`)
	}

	const onDelete = () => {
		dispatch(toggleDeleteConfirmation(true))
		dispatch(setSelectedProduct(row.id))
	}
	
	return (
		<div className="flex justify-end text-lg">
			<span className='cursor-pointer p-2 hover:text-blue-500' onClick={onEdit}>
				<HiOutlinePencil/>
			</span>
			<span className="cursor-pointer p-2 hover:text-red-500" onClick={onDelete}>
				<HiOutlineTrash />
			</span>
		</div>
	)
}

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
  
  {
    Header: '',
    id: 'action',
    accessor: (row) => row,
    Cell: props => <ActionColumn row={props.row.original} />
  },
];

const data = [
  {
    id: "1",
    Name: "Anders",
    Contact: 7770040256,
    Paddress: "Pimple Nilakh",
    city: "Pune",
    pin: "415414",
    Baddress:"Pune",
    status:"Active",
    subRows: undefined,
  },
  {
    id: "2",
    Name: "Chang",
    Contact: 9923441548,
    Paddress: "Aundh",
    city: "Pune",
    pin: "415414",
    Baddress:"Pune",
    status:"Active",
    subRows: undefined,
  },
  {
    id: "3",
    Name: "Mendel",
    Contact:9271401918,
    Paddress: "Dhanu",
    city: "Pune",
    pin: "415414",
    status:"Active",
    Baddress:"Pune",
    subRows: undefined,
  },
  {
    id: "4",
    Name: "Bennett",
    Contact: 9766447050,
    Paddress: "Hinjevadi",
    city: "Pune",
    pin: "415414",
    status:"Active",
    Baddress:"Pune",
    subRows: undefined,
  },
  {
    id: "5",
    Name: "Tannamuri",
    Contact: 7057976880,
    Paddress: "Pimpale Gurav",
    city: "Pune",
    pin: "415414",
    status:"Active",
    Baddress:"Pune",
    subRows: undefined,
  },
];

const { Tr, Th, Td, THead, TBody, Sorter } = Table;

const New = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <>
      <div className="inline-flex flex-wrap xl:flex gap-rend justify-between pb-3 ml-4 " >
             <span className="inline-flex justify-between gap-rend">
             <h4><HiNewspaper /></h4>
            <h5 className="ml-3"> Project Management</h5></span>
          

			<Button size="sm" variant="solid" >Add New</Button>
           
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
                    <Td {...cell.getCellProps()}>{cell.render("Cell")} </Td>
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
