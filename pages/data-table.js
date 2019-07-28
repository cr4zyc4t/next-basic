import Table from "../components/Table";
import { queryParser } from "../utils/common";
import { useRouter } from "next/router";

export default function DataTable() {
  const router = useRouter();
  const query = queryParser(router.asPath);
  const interval = (query.interval ? parseInt(query.interval) : 500) || 500;
  const length = (query.length ? parseInt(query.length) : 30) || 30;

  return <Table interval={interval} length={length} />;
}