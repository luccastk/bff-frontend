import React from 'react'
import DropdownUser from './DropdownUser'

export default function Sidebar() {
  return (
    <div className="d-flex me-4">
        <div className="bg-dark text-white p-3 d-flex flex-column" style={{ width: "250px" }}>
            <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <a href="#" className="mt-2 text-start nav-link text-white btn btn-outline-primary active" aria-current="page">
                <i className="bi bi-house me-2"></i>
                Home
                </a>
            </li>
            <li>
                <a href="#" className="mt-2 text-start nav-link text-white btn btn-outline-primary">
                <i className="bi bi-speedometer2 me-2"></i>
                Dashboard
                </a>
            </li>
            <li>
                <a href="#" className="mt-2 text-start nav-link text-white btn btn-outline-primary">
                <i className="bi bi-currency-dollar me-2"></i>
                Venda
                </a>
            </li>
            <li>
                <a href="#" className="mt-2 text-start nav-link text-white btn btn-outline-primary">
                <i className="bi bi-box-seam me-2"></i>
                Estoque
                </a>
            </li>
            <li>
                <a href="#" className="mt-2 text-start nav-link text-white btn btn-outline-primary">
                <i className="bi bi-graph-up me-2"></i>
                Relatório
                </a>
            </li>
            </ul>
            <div className="mt-auto">
                <DropdownUser />
            </div>
        </div>
      </div>
  )
}
