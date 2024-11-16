import Link from "next/link";

const InnerPage = (): JSX.Element => {
  return (
    <div>
      <h1>inner page</h1>
      <p>some inner page text that we must translate</p>
      <Link href={`/`}>to main page</Link>
    </div>
  );
};

export default InnerPage;
