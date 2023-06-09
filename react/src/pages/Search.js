import { useContext, useState } from "react";
import { JobContext } from "../context/JobContext";

function Search() {
  const { searchJob } = useContext(JobContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    searchJob();

      const response = fetch(`http://127.0.0.1:9292/jobs/search?term=${searchTerm}`);
      const data = response.json();
      setSearchResults(data);

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
