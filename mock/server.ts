import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Set up a Mock Service Worker server with the provided request handlers
export const server = setupServer(...handlers);