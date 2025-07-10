import { Octokit } from "@octokit/rest";
import Image from "next/image";
import { Button } from "./ui/button";
import { CardSpotlight } from "./ui/card-spotlight";
import { Star } from "lucide-react";

const octokit = new Octokit();

export default async function GithubProjects() {
  let repos: any[] = [];
  let error = null;

  try {
    const { data } = await octokit.repos.listForUser({
      username: "cinarkk9",
      sort: "created",
      per_page: 20,
    });
    repos = data.filter((repo) => !repo.fork);
  } catch (err) {
    error = "Error loading GitHub projects. Please try again later.";
    console.error("Error fetching repos:", err);
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid mt-4 mx-4 gap-5 md:grid-cols-3">
      {repos.map((repo) => (
        <CardSpotlight
          key={repo.id}
          className="flex flex-col justify-center gap-2 border p-3 rounded-md backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 font-bold z-10">
            <Image
              src={repo.owner.avatar_url}
              alt={`${repo.owner.login}'s avatar`}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>{repo.owner.login}</span>
          </div>
          <div className="z-10">
            <span>{repo.name.replaceAll("-", " ")}</span>
          </div>
          <div className="z-10">
            <span className="text-muted-foreground text-sm">
              {repo.description || "No description"}
            </span>
          </div>
          <div className="flex justify-between z-10">
            <div className="flex items-baseline-last justify-between gap-1 h-full">
              <Star size={16} color="yellow" />
              <span>{repo.stargazers_count}</span>
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400"
            >
              <Button className="rounded">Visit</Button>
            </a>
          </div>
        </CardSpotlight>
      ))}
    </div>
  );
}
