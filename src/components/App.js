import React from "react";
import { Octokit } from "octokit";
import "../styles/App.css";
import { useEffect } from "react";

export const octokit = new Octokit({});
const App = () => {
  useEffect(() => {
    octokit.request("GET /gists/public", {}).then((res) => {
    });
  }, []);

  const showgists = () => {
    octokit
      .request("GET /users/{username}/gists", {
        username: user,
      })
      .then((res) => {
      });
  };

  return (
    <div className="App">
      <div className="header">
        <div> Gist Viewer </div>
      </div>
      <h2>Gist creator</h2>
      <input data-tag='input'/>
      <button onClick={showgists}> Show gists </button>
      <div className="cards">
        {/* Initailly show public gists here */}

       {/*  if searched using username, gists from that user */}
      
      
      </div>
    </div>
  );
};

export default App;

function GistCard({ gist }) {
  const showgist = () => {
      // on open the Gist  page on click 
  };

  return (
    <div className="gistCard" data-tag='gistCard'>
      <div onClick={showgist} className="gist-card">
        {/* show json dat like this  */}
      {/* comments : 0 */}
{/* comments_url : https://api.github.com/gists/c42a351fe99d168b808ece645cdeee96/comments */}
{/* commits_url : https://api.github.com/gists/c42a351fe99d168b808ece645cdeee96/commits */}
{/* created_at : 2022-05-21T12:05:25Z */}
{/* description: note_0.html */}
{/* forks_url : https://api.github.com/gists/c42a351fe99d168b808ece645cdeee96/forks */}
{/* git_pull_url : https://gist.github.com/c42a351fe99d168b808ece645cdeee96.git */}
{/* git_push_url : https://gist.github.com/c42a351fe99d168b808ece645cdeee96.git */}
{/* html_url : https://gist.github.com/c42a351fe99d168b808ece645cdeee96 */}
{/* id : c42a351fe99d168b808ece645cdeee96 */}
{/* truncated : */}
{/* updated_at : 2022-05-21T12:05:41Z */}
{/* url : https://api.github.com/gists/c42a351fe99d168b808ece645cdeee96 */}
      </div>
    </div>
  );
}
