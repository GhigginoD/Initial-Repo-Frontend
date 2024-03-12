"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  const { replace } = router;

  useEffect(() => {
    replace("/tema");
  }, [replace]);

  return <></>;
};

export default Home;
