import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-6 flex-wrap justify-center items-center m-auto">
      <Image alt="" src={"/face.png"} width={75} height={75} />
      <hgroup className="text-center">
        <h1>Seb Lee</h1>
        <p>Software Developer</p>
      </hgroup>
    </div>
  );
}
