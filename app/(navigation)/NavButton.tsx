export default function NavButton({
  link,
  value,
}: {
  link: string;
  value: string;
}) {
  return (
    <div
      onClick={() => (window.location.href = link)}
      className="p-4 text-lg font-black cursor-pointer transition-shadow duration-500 hover:shadow-2xl rounded-md"
    >
      {value}
    </div>
  );
}
