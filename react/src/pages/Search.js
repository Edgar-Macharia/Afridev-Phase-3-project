import { useState } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:9292/myjobs?term=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for Talent or Jobs"
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
      <div className="row mt-3">
        <div className="col">
          <img
            src="https://charityvillage.com/wp-content/uploads/2020/06/job_search_feature.png"
            alt="search"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
