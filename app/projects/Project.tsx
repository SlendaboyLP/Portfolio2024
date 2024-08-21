//add the info as props temporarily, will be fetched from the backend later
export default function Project({
  description,
  name,
  image,
}: {
  description: string;
  name: string;
  image: string;
}) {
  return (
    <div className=" w-[49.425%] cursor-pointer hover:shadow-2xl p-4 rounded-md" >
      <div className="h-[24rem]  bg-slate-200 rounded-md flex p-8">
        <img src={image} alt="" className="" />
      </div>
      <div className="flex flex-col mt-4">
        <h1 className="font-bold font-serif text-3xl">{name}</h1>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </div>
  );
}
