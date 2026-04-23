import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const SiteLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 lg:pl-16 pt-12">
        <Outlet />
      </main>
      <div className="lg:pl-16">
        <Footer />
      </div>
      <ScrollRestoration />
    </div>
  );
};
