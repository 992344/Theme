import React, { useMemo, useState } from 'react'
import { Table, Input, Button } from 'components/ui'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy } from 'react-table'
import  { matchSorter } from 'match-sorter'
import { SupplierManagementData } from '../data'
import {   HiSearch, HiTruck } from 'react-icons/hi'
import Sorter from 'components/ui/Table/Sorter'
import { Link } from 'react-router-dom'

const { Tr, Th, Td, THead, TBody } = Table

function FilterInput ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
	const count = preGlobalFilteredRows.length
	const [value, setValue] = useState(globalFilter)
	const onChange = useAsyncDebounce(value => {
		setGlobalFilter(value || undefined)
	}, 200)

	return (
		<div >
			<div className="flex items-center mb-5">
				<span className="mr-2  "><HiSearch size={35}/></span>
				<Input
					size="sm"
					value={value || ""}
					onChange={e => {
						setValue(e.target.value)
						onChange(e.target.value)
					}}
					style={{maxWidth: 250}}
					placeholder={`${count} records...`}
				/>
			</div>
		</div>
	)
}

function fuzzyTextFilterFn(rows, id, filterValue) {
	return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val

const ReactTable = ({ columns, data }) => {
	const filterTypes = useMemo(() => ({
		// Add a new fuzzyTextFilterFn filter type.
		fuzzyText: fuzzyTextFilterFn,
		// Or, override the default text filter to use
		// "startWith"
		text: (rows, id, filterValue) => {
			return rows.filter(row => {
				const rowValue = row.values[id]
				return rowValue !== undefined ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()) : true
			})
		},
	}),[])

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		preGlobalFilteredRows,
		setGlobalFilter,
			allColumns,
	} = useTable(
		{
			columns,
			data,
			// defaultColumn, // Be sure to pass the defaultColumn option
			filterTypes,
		},
		useFilters, // useFilters!
		useGlobalFilter, // useGlobalFilter!
        useSortBy,
	)
	// We don't want to render all of the rows for this example, so cap
	// it for this use case
	const firstPageRows = rows.slice(0, 10)

	return (
		<>
        <div className="inline-flex flex-wrap xl:flex gap-rend justify-between  ml-4 " >
             <div className='inline-flex justify-between gap-rend' >          
             <h4><HiTruck /></h4>
            <h5 className="ml-3"> Supplier Management</h5>
            </div>
            <div className='inline-flex justify-between gap-rend'>
            <FilterInput
				preGlobalFilteredRows={preGlobalFilteredRows}
				globalFilter={state.globalFilter}
				setGlobalFilter={setGlobalFilter}
			/>
            <span className='ml-5'>
              <Link to="/SupplierManagement/AddNew" >
            <Button size="sm" variant="solid" >Add New</Button>
            </Link>
            </span>
           </div>
        </div>
			

			<Table {...getTableProps()}>
				<THead>
					{headerGroups.map(headerGroup => (
						<Tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<Th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                <span>
									<Sorter sort={column.isSortedDesc}/>
								</span>
                                </Th>
							))}
						</Tr>
					))}
				</THead>
				<TBody {...getTableBodyProps()}>
					{firstPageRows.map((row, i) => {
						prepareRow(row)
						return (
						<Tr {...row.getRowProps()}>
							{row.cells.map(cell => {
							return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
							})}
						</Tr>
						)
					})}
					{firstPageRows.length === 0 && (
						<Tr>
							<Td className="text-center" colspan={allColumns.length}>No data found!</Td>
						</Tr>
					)}
				</TBody>
			</Table>
		</>
	)
}

function Suppliertable() {
	const columns = useMemo(() => [
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
    
        
	], [])

	return (
		<div>
			<ReactTable columns={columns} data={SupplierManagementData} />
		</div>
	)
}

export default Suppliertable;
