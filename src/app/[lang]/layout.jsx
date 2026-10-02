export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export default async function LangLayout({ children, params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";

  return children;
}
