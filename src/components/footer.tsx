export default function Footer() {
  return (
    <footer className="text-md mt-8 flex w-10/12 flex-col justify-around gap-2 text-white md:flex-row">
      <p>
        An official <span className="font-serif  italic">#ETHForAll</span> entry
        by Kaushal and Aman.
      </p>

      <p>
        Check out on{" "}
        <a
          href="https://github.com/joshi-kaushal/D-Wardern"
          className="font-bold transition-all duration-300 hover:underline"
        >
          GitHub
        </a>
        !
      </p>
    </footer>
  );
}
