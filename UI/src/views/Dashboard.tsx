import Header from "../components/Header";
import { useAuth0 } from "@auth0/auth0-react";

export default function Dashboard() {
  const { logout } = useAuth0();
  const navigation = [
    { name: "Dashboard", href: "#", current: true },
    {
      name: "Groups",
      href: "#",
      current: false,
    },
    {
      name: "Roster",
      href: "#",
      current: false,
    },
    {
      name: "Users",
      href: "#",
      current: false,
    },
  ];
  const userNavigation = [
    { name: "Your Profile", callback: () => {} },
    {
      name: "Sign out",
      callback: () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
      },
    },
  ];

  return (
    <>
      <div className="min-h-full">
        <Header navigation={navigation} userNavigation={userNavigation} />

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>

        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {/* Your content */}
          </div>
        </main>
      </div>
    </>
  );
}
