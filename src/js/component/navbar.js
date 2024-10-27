import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDelete = (e, name) => {
    e.stopPropagation();
    actions.removeLike(name);
  };

  return (
    <div className="container-fluid" style={{ background: "#eee" }}>
      <div className="container p-1">
        <nav className="navbar d-flex justify-content-between mb-3 py-0 mt-2">
          <Link to="/">
            <img src={Logo} style={{ width: "6rem" }} alt="Starwars" />
          </Link>
          <div className="ml-auto">
            <div className={`dropdown ${isDropdownOpen ? "show" : ""}`}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  className="col btn btn-primary dropdown-toggle btn-lg"
                  style={{
                    width: "9rem",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    fontSize: "18px",
                  }}
                  type="button"
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                >
                  <span>Favorites</span>
                  <div
                    style={{
                      background: "#666",
                      color: "white",
                      width: "30px",
                      height: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "10px",
                    }}
                  >
                    {store.likedCharacters.length}
                  </div>
                </button>
              </div>
              <ul
                className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                aria-labelledby="dropdownMenuButton"
                onClick={(e) => e.stopPropagation()}
              >
                {store.likedCharacters.length > 0 ? (
                  store.likedCharacters.map((character, index) => (
                    <li
                      className="d-flex justify-content-between align-items-center px-3"
                      key={index}
                    >
                      <span>{character.name}</span>
                      <button
                        className="btn btn-sm ms-2"
                        onClick={(e) => handleDelete(e, character.name)}
                      >
                        <i className="fa-solid fa-trash text-dark border-0"></i>
                      </button>
                    </li>
                  ))
                ) : (
                  <li className="px-3">
                    <span className="text-muted">No favorites yet :-)</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
