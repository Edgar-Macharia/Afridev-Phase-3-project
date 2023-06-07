import { useState } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    
    const results = [
      "Result 1",
      "Result 2",
      "Result 3",
    ];

    setSearchResults(results);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3 vh-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="btn btn-success"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        {searchResults.length > 0 && (
          <div className="row mt-3">
            <div className="col-lg-6">
              <ul className="list-group">
                {searchResults.map((result, index) => (
                  <li className="list-group-item" key={index}>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
