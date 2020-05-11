import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push("/?counter=10", null, { shallow: true });
  }, []);

  useEffect(() => {
    console.log(router.query.counter);
  }, [router.query.counter]);
}
