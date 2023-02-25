import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const loader = async ({ params }: LoaderArgs) => {
  const { jokeId } = params;
  const joke = await db.joke.findUnique({
    where: { id: jokeId },
  });
  return json(joke)
};

export default function JokeRoute() {
  const data = useLoaderData<typeof loader>();
  const { content } = data;
  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{content}</p>
    </div>
  );
}