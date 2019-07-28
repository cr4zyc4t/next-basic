import { useCallback, useRef } from "react";
import NavLink from "./NavLink";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = styled.nav`
  border: none !important;
  margin-bottom: 0px !important;
`;

export default function Navbar() {
  const router = useRouter();
  const inputRef = useRef(null);

  const submitHandler = useCallback((e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value !== "") {
      router.push(`/search?key=${encodeURIComponent(value)}`);
      inputRef.current.value = "";
    }
  }, [router]);

  return (
    <Nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link href="/">
            <a className="navbar-brand">Basic React App</a>
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/counter">Counter</NavLink>
            <NavLink href="/memo-in-class">Memo In Class</NavLink>
            <NavLink href="/data-table">DataTable</NavLink>
          </ul>
          <form className="navbar-form navbar-left pull-right" onSubmit={submitHandler}>
            <div className="form-group">
              <input ref={inputRef} type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    </Nav>
  );
}