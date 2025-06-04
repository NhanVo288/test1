import { lazy, Suspense } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { LoadingScreen } from "src/components/loading-screen";
import MainLayout from "src/layouts/MainLayout";

// ----------------------------------------------------------------------

const HomePage = lazy(() => import("src/pages/HomePage"));
const LiquidityPage = lazy(() => import("src/pages/LiquidityPage"));
const FoundationPage = lazy(() => import("src/pages/FoundationPage"));
const TeamPage = lazy(() => import("src/pages/TeamPage"));

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <MainLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </MainLayout>
      ),
      children: [
        { element: <HomePage />, index: true },
        { path: "foundation", element: <FoundationPage /> },
        { path: "liquidity", element: <LiquidityPage /> },
        { path: "team", element: <TeamPage /> },
      ],
    },

    { path: "*", element: <Navigate to="/" replace /> },
  ]);
}
