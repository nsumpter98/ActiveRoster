import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";

export default function Layout() {
  const { logout, isAuthenticated } = useAuth0();
  const location = useLocation();
  const [navigation, setNavigation] = useState([
    { name: "Dashboard", href: "/", current: false },
    { name: "Groups", href: "/groups", current: false },
    { name: "Roster", href: "/roster", current: false },
    { name: "Students", href: "/students", current: false },
    { name: "Users", href: "/users", current: false },
  ]);

  const userNavigation = [
    { name: "Your Profile", callback: () => {} },
    {
      name: "Sign out",
      callback: () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
      },
    },
  ];

  useEffect(() => {
    setNavigation((prevNavigation) =>
      prevNavigation.map((item) =>
        item.href === location.pathname
          ? { ...item, current: true }
          : { ...item, current: false }
      )
    );
  }, [location.pathname]);

  return (
    <div className="min-h-full">
      <Header navigation={navigation} userNavigation={userNavigation} />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {isAuthenticated ? (
            <Outlet />
          ) : (
            <>
              <h1 className="text-3xl font-bold text-gray-800 mb-10">
                Please sign in to view this page
              </h1>
              <LoginButton />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
