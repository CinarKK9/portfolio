import { Octokit } from "@octokit/rest";
import { Endpoints } from "@octokit/types";
import Image from "next/image";
import { Button } from "./ui/button";

const octokit = new Octokit();

type Repo = Endpoints["GET /repos/{owner}/{repo}"]["response"];

export default async function GithubProjects() {
  let repos: Repo["data"][] = [];
  let error = null;

  try {
    const { data } = await octokit.repos.listForUser({
      username: "CinarKK9", // Your GitHub username
      sort: "created", // Sort by stars for better presentation
      per_page: 100, // Fetch up to 100 repos
    });
    repos = data.filter((repo) => !repo.fork && repo.description);
  } catch (err) {
    error = "Error loading GitHub projects. Please try again later.";
    console.error("Error fetching repos:", err);
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-3 mt-4 ms-4 gap-5">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="flex flex-col justify-center gap-2 border p-2 rounded-md"
        >
          <div className="flex items-center gap-2 font-bold">
            <Image
              src={repo.owner.avatar_url}
              alt={`${repo.owner.login}'s avatar`}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>{repo.owner.login}</span>
          </div>
          <div>
            <span>{repo.name.replaceAll("-", " ")}</span>
          </div>
          <div>
            <span>{repo.description}</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400"
            >
              <Button>Visit</Button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
