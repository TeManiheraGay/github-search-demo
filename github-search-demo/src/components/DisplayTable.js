import React from "react";
import "../App.css";

const DisplayTable = ({ data, repositories }) => {
  return (
    <table className="border-collapse border w-full">
      <thead className=" bg-gray-300 dark:bg-slate-600 border-b-6 border-gray-400">
        <tr>
          <th className="text-md px-6 py-3">Username</th>
          <th className="text-md px-6 py-3">Avatar</th>
          <th className="text-md px-6 py-3">Follower(count)</th>
          <th className="text-md px-6 py-3">Repository(count)</th>
          <th className="text-md px-6 py-3">(Top 4) Repositories</th>
        </tr>
      </thead>
      <tbody className="text-center text-cyan-500">
        <tr className="border-b-6 border-gray-200">
          <td className="border-collapse border text-sky-500 text-md px-6 py-3">
            <a href={data.html_url} className="header">
              {data.login}
            </a>
          </td>
          <td className="border-collapse border text-md px-6 py-3">
            {!data.avatar_url ? (
              " "
            ) : (
              <img
                className="ui small circular image"
                src={data.avatar_url}
                alt={data.avatar_url}
              />
            )}
          </td>
          <td className="border-collapse border text-md px-6 py-3">
            {data.followers}
          </td>
          <td className="border-collapse border text-md px-6 py-3">
            {data.public_repos}
          </td>
          <td className="border-collapse border px-6 py-3">
            {repositories.map((repo) => (
              <div className="ui relaxed divided list" key={repo.name}>
                <div className="item">
                  <i className="px-2 large github middle aligned icon"></i>
                  <div className="content">
                    <a href={repo.html_url} className="header" target="_blank">
                      {repo.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DisplayTable;
