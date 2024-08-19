import useFetch from "@/src/hooks/useFetch";
import React from "react";

const Page = () => {
  const { data, error, loading } = useFetch("http://localhost:1337/closings");

  return <div>page</div>;
};

export default Page;
