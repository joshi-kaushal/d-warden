export default function Navbar() {
  return (
    <>
      <nav className="mt-16 flex w-full flex-row justify-around px-4 md:mt-0">
        <ul className="">
          <li>
            <h2 className="font-serif text-3xl font-medium text-white">
              D-Warden
            </h2>
          </li>
        </ul>
        <ul className="flex flex-row gap-3">
          <li className=" font-serif text-lg font-medium text-white">
            <a href="#" target="_blank" rel="noopener noreferrer"></a>
          </li>
          <li className=" font-serif text-lg font-medium text-white">
            <a href="#" target="_blank" rel="noopener noreferrer"></a>
          </li>
          <li className=" font-serif text-lg font-medium text-white">
            <button className="rounded-full border border-[hsl(280,100%,70%)] p-2 font-serif text-base font-bold tracking-wider text-white outline-none transition-all duration-300 hover:bg-[hsl(280,100%,70%)]">
              Connect Wallet
            </button>
            {/* <a href="#" target="_blank" rel="noopener noreferrer"></a> */}
          </li>
        </ul>
      </nav>
    </>
  );
}
