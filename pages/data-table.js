import Table from "../components/Table";
import { useState, useCallback } from "react";
import { queryParser } from "../utils/common";

export default function DataTable(props) {
  const [interval, setInterval] = useState(props.interval || 500);
  const [length, setLength] = useState(props.length || 20);

  const handleIntervalChange = useCallback((e) => setInterval(e.target.value), []);
  const handleLengthChange = useCallback((e) => setLength(e.target.value), []);

  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Interval</label>
            <select className="form-control" value={interval} onChange={handleIntervalChange}>
              <option value={500}>500ms</option>
              <option value={1000}>1s</option>
              <option value={2000}>2s</option>
              <option value={5000}>5s</option>
              <option value={10000}>10s</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Row Limit</label>
            <select className="form-control" value={length} onChange={handleLengthChange}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>
      <Table interval={interval} length={length} />
    </div>
  );
}

DataTable.getInitialProps = ({ asPath }) => {
  const query = queryParser(asPath);
  const interval = (query.interval ? parseInt(query.interval) : 500) || 500;
  const length = (query.length ? parseInt(query.length) : 20) || 20;
  return {
    interval,
    length,
  };
};