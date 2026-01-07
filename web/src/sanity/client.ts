import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "wfl3i8fx",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});