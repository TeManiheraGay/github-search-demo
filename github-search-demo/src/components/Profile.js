import React, { useState } from "react";
import DisplayTable from "./DisplayTable";
import "../App.css";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(
      `https://api.github.com/users/${username}`
    ).catch((err) => {
      console.log(err.message);
    });
    const profileJson = await profile.json();
    console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    const sortedRepoJson = repoJson
      .sort(
        (b, a) =>
          a.forks_count +
          a.stargazers_count -
          (b.forks_count + b.stargazers_count)
      )
      .slice(0, 4);
    //console.log(sortedRepoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(sortedRepoJson);
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-800" style={{ padding: 20 }}>
        <div className="flex" style={{ paddingBottom: 20 }}>
          <div className="flex w-96 rounded bg-white">
            <input
              className="px-3 py-2 font-semibold placeholder-gray-500 text-sky-500 rounded-2xl border-none ring-2 ring-gray-300 focus:ring-2"
              type="text"
              placeholder="search username here..."
              value={username}
              onChange={onChangeHandler}
            />
          </div>

          <button
            className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={submitHandler}
          >
            <i className="github icon"></i>
            Search
          </button>
          <i className="fas fa-toggle-on"></i>
        </div>
        <DisplayTable data={data} repositories={repositories} />
      </div>
    </>
  );
};
export default Profile;
