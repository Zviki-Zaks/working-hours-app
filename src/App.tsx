import { Suspense, useEffect, useState } from "react";
import ErrorBoundary from "./routing/ErrorBoundary";
import LoadingPage from "./components/common/LoadingPage";
import { Navigate, Route, Routes } from "react-router-dom";
import RequireAuthRoute from "./routing/RequireAuthRoute";
import MainLayout from "./routing/MainLayout";
import { mainRoutes, publicRoutes } from "./routing/routes";
import EmptyLayout from "./routing/EmptyLayout";
import PublicRoute from "./routing/PublicRoute";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <ErrorBoundary>
      {loading ? (
        <LoadingPage />
      ) : (
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route
              element={
                <RequireAuthRoute>
                  <MainLayout />
                </RequireAuthRoute>
              }
            >
              {mainRoutes}
            </Route>
            <Route
              element={
                <PublicRoute>
                  <EmptyLayout />
                </PublicRoute>
              }
            >
              {publicRoutes}
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      )}
    </ErrorBoundary>
  );
}

export default App;
