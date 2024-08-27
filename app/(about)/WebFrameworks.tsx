const webFrameworks: { [key: string]: string } = {
  React: "/icons/react.png",
};
export default function WF() {
  return (
    <div className="flex flex-wrap gap-4">
      {Object.keys(webFrameworks).map((framework) => {
        return (
          <div className="w-[23.773%] bg-slate-200 p-2 rounded-md">
            <div className="flex justify-center">
              <img
                key={framework}
                src={webFrameworks[framework]}
                alt={framework}
                className="w-16 h-16"
              />
            </div>

            <h2 className="font-bold font-serif text-3xl text-center">
              {framework}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
