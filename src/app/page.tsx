import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex">
      <div className="flex flex-col m-auto gap-6 max-w-2xl">
        <div className="flex gap-6 flex-wrap items-center">
          <hgroup>
            <h1 className="text-5xl">Seb Lee</h1>
            <p className="text-2xl">Software Developer</p>
          </hgroup>
          <Image alt="" src={"/face.png"} width={100} height={100} />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          expedita libero accusamus sunt laborum fugiat exercitationem fuga
          harum, officiis voluptatibus ab, dignissimos voluptatem odit at
          laudantium. Voluptatem itaque perferendis cumque.
        </p>
      </div>
    </div>
  );
}
