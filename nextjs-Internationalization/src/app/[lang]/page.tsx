import Link from "next/link";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import LocaleSwitcher from "./components/locale-switcher";

interface PageParams {
  lang: Locale;
}

export default async function Home({ params }: { params: PageParams }) {
  const { lang } = await params;

  const dict = await getDictionary(lang);

  return (
    <div>
      <h1>{dict.homepage.title}</h1>
      <p>{dict.homepage.content}</p>
      <Link href={`/inner-page`}>{dict.homepage.linkText}</Link>

      <LocaleSwitcher />
    </div>
  );
}
