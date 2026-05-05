import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { name } = req.query;

  const response = await fetch(
    `https://api.api-ninjas.com/v1/planets?name=${name}`,
    {
      headers: {
        "X-Api-Key": process.env.VITE_NINJA_PLANETS_API_KEY ?? "",
      },
    },
  );

  const data = await response.json();
  res.status(response.status).json(data);
}
