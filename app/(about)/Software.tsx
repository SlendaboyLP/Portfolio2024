const softwares: { [key: string]: string } = {
  Photoshop: "/icons/photoshop.png",
  Illustrator: "/icons/illustrator.png",
  Indesign: "/icons/indesign.png",
  Figma: "/icons/figma.png",
  Wordpress: "/icons/wordpress.png",
};

export default function S() {
  return (
    <div className="flex flex-wrap gap-4">
      {Object.keys(softwares).map((software) => {
        return (
          <div className="w-[23.773%] bg-slate-200 p-2 rounded-md">
            <div className="flex justify-center">
              <img
                key={software}
                src={softwares[software]}
                alt={software}
                className="w-16 h-16"
              />
            </div>

            <h2 className="font-bold font-serif text-3xl text-center">
              {software}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
