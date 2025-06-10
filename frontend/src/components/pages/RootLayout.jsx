import { Outlet, useMatches } from "react-router-dom";
import { Template } from "../layout";
export const RootLayout = () => {
  const matches = useMatches();
  console.log(matches);
  const slug = matches.find((m) => m.params?.slug)?.params.slug;

  console.log("slug", slug);
  return (
    <Template hasSlug={!!slug}>
      <Outlet />
    </Template>
  );
};
