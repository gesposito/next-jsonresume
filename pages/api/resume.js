// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const RESUME_URL =
  "https://gist.githubusercontent.com/thomasdavis/c9dcfa1b37dec07fb2ee7f36d7278105/raw/42222fecd748c7b9d8c15fd84d677cebd5fdda3a/resume.json";

export default async (req, res) => {
  try {
    const url = req.query.url ? decodeURI(req.query.url) : RESUME_URL;
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (e) {
    res.status(400);
  }
};
