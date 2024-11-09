import Link from "next/link";
import { Locale } from "../../../i18n-config";

interface PageParams {
  lang: Locale;
}

const InnerPage = ({ params }: { params: PageParams }): JSX.Element => {
  const { lang } = params;

  return (
    <div>
      <h1>inner page</h1>
      <p>some inner page text that we must translate</p>
      <Link href={`/${lang}`}>to main page</Link>
    </div>
  );
};

export default InnerPage;
