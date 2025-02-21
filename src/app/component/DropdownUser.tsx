'use client'

import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DropdownUser() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="btn-group dropup" ref={dropdownRef} style={{ position: "relative" }}>
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)} // Alterna o estado do dropdown
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Usuário
      </button>

      {isOpen && (
        <ul
          className="dropdown-menu show"
          style={{
            position: "absolute",
            bottom: "100%",
            left: 0,
            zIndex: 1000,
          }}
        >
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
