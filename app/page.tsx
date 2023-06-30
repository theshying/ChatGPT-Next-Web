import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";
import { AuthPage } from "./components/auth";

const serverConfig = getServerSideConfig();

export default async function App() {
  return (
    <>
      <Home />
    </>
  );
}
