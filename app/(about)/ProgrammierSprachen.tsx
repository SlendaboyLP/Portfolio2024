const programmingLanguages: { [key: string]: string } = {
  "C Sharp": "/icons/cis.png",
  Java: "/icons/java.png",
  JavaScript: "/icons/js.png",
  
};

export default function PS() {
  return (
    <div className="flex flex-wrap gap-4">
      {Object.keys(programmingLanguages).map((lang) => {
        return (
          <div className="w-[23.773%] bg-slate-200 p-2 rounded-md">
            <div className="flex justify-center">
              <img
                src={programmingLanguages[lang]}
                alt={lang}
                className="w-16 h-16"
              />
            </div>

            <h2 className="font-bold font-serif text-3xl text-center">
              {lang}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
