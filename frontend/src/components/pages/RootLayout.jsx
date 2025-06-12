import { Outlet, useMatches } from "react-router-dom";
import { Template } from "../layout";
export const RootLayout = () => {
  const matches = useMatches();
  const slug = matches.find((m) => m.params?.slug)?.params.slug;

  return (
    <Template hasSlug={!!slug}>
      <Outlet />
    </Template>
  );
};
