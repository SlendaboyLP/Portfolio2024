import Project from "./Project";

export default function Projects() {
  return (
    <main className="mt-20 w-full h-auto  flex flex-col p-8">
      <div className="text-center">
        <h1 className="font-bold font-serif text-5xl  headline"> Projekte</h1>
      </div>
      <div className="flex flex-wrap gap-4 mt-12">
        <Project
          name="WOA"
          description="ITP Projekt aus der 4ten HTL"
          image=""
        ></Project>
        <Project
          name="WOA"
          description="ITP Projekt aus der 4ten HTL"
          image=""
        ></Project>
        <Project
          name="WOA"
          description="ITP Projekt aus der 4ten HTL"
          image=""
        ></Project>
        <Project
          name="WOA"
          description="ITP Projekt aus der 4ten HTL"
          image=""
        ></Project>
      </div>
    </main>
  );
}
