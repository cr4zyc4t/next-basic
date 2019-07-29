import React, { useEffect, memo } from "react";
import { connect } from "react-redux";
import { tableDataRequestStop, tableDataRequestStart } from "../store/actions/table";
import moment from "moment";
import styled from "styled-components";

const Cell = styled.td`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 1px;
`;

const TableHeader = memo(() => {
  return (
    <thead>
      <tr>
        <th style={{ width: "15%" }}>First Name</th>
        <th style={{ width: "15%" }}>Last Name</th>
        <th style={{ width: "15%" }}>Birthday</th>
        <th style={{ width: "20%" }}>Email</th>
        <th style={{ width: "15%" }}>Job</th>
        <th style={{ width: "20%" }}>Data</th>
      </tr>
    </thead>
  );
});

const TableRow = memo(({ rowData }) => (
  <tr key={rowData.id}>
    <Cell>{rowData["first_name"]}</Cell>
    <Cell>{rowData["last_name"]}</Cell>
    <Cell>{moment(rowData["birthday"]).format("YYYY/MM/DD")}</Cell>
    <Cell>{rowData["email"]}</Cell>
    <Cell>{rowData["job"]}</Cell>
    <Cell>{rowData["data1"]}</Cell>
  </tr>
));

function Table({ data, requestData, stopRequestData, interval, length }) {
  useEffect(() => {
    requestData(length, interval);
    return () => {
      stopRequestData();
    };
  }, [interval, length, requestData, stopRequestData]);

  return (
    <table className="table table-striped">
      <TableHeader />
      <tbody>
        {
          data.map((rowData) => <TableRow key={rowData.id} rowData={rowData} />)
        }
      </tbody>
    </table>
  );
}

export default connect(
  (state) => ({
    data: state.table.data,
  }),
  {
    requestData: tableDataRequestStart,
    stopRequestData: tableDataRequestStop,
  }
)(Table);