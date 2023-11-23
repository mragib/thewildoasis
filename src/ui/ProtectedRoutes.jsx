import styled from "styled-components";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Fullpage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  // 1. Load current user
  const { isAuthenticated, isLoading } = useUser();

  // 2. If user is NOT authenticated redirect to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) return navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. Load spinner while loading
  if (isLoading)
    return (
      <Fullpage>
        <Spinner />
      </Fullpage>
    );

  // 4.Return authecated user only
  if (isAuthenticated) return children;
}

export default ProtectedRoutes;
