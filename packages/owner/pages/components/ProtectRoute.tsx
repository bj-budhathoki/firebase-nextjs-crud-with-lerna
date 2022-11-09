import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

export function withPublic(Component: any) {
  return function WithPublic(props: any) {
    const { currentUser } = useAuth();

    const router = useRouter();

    if (currentUser) {
      router.replace("/");
      return <h1>Loading...</h1>;
    }
    return <Component auth={currentUser} {...props} />;
  };
}

export function withProtected(Component: any) {
  return function WithProtected(props: any) {
    const { currentUser, loading } = useAuth();
    const router = useRouter();
    console.log("loading", loading);
    useEffect(() => {
      if (!loading) {
        if (!currentUser) {
          router.replace("/login");
          return;
        }
      }
    }, [currentUser, loading]);
    if (loading) return <h1>loading</h1>;
    return <Component auth={currentUser} {...props} />;
  };
}
