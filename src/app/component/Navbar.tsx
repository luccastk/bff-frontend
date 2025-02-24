import React, { useState } from "react";

export default function Navbar() {
  const [entriesPerPage, setEntriesPerPage] = useState(10); // Padrão: 10 entradas por página
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Número total de páginas (pode vir da API)

  // Função para mudar a página
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <nav className="navbar bg-body-tertiary p-2">
    <div className="container-fluid row">
        <a className="navbar-brand mb-2">Manage</a>
        <div className="container d-flex justify-content-between">
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className="d-flex align-items-center">
                <span className="me-2">Mostrar</span>
                <select 
                    className="form-select w-auto"
                    value={entriesPerPage}
                    onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                >
                    {[10, 20, 30, 50, 100].map((num) => (
                    <option key={num} value={num}>{num}</option>
                    ))}
                </select>
                <span className="ms-2">entradas</span>
            </div>
        </div>
    </div>
    </nav>
  );
}
