import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "15q5it6k",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skJSJb4sPT3S36XCcPesC0TF69gc39US5vvIrxayravnTogJh7q7ruGZR4TCVJPt0r4UTAehkB8ewQfYmmEB2ClH9qLMWfhGNWxKtOFCkxgDtYz5KBbAAlJjN7UjUnfV2cveTKp0ZaceVZvUDpUzFznrTQSdfHlLhdKGbdHAmjy5bfJSjrT2",
  useCdn: false,
});
