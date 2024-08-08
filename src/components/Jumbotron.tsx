import Image from "next/image";

export default function Jumbotron({ content }: { content: React.ReactNode }) {
  return (
    <section className="wrapper flex min-h-screen flex-col-reverse items-center justify-between bg-main p-4 lg:flex-row lg:p-0 xl:min-h-[75vh]">
      {content}
    </section>
  );
}
