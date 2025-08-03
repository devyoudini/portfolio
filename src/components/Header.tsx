import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        return;
      }
      setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? "drop-shadow-lg" : "drop-shadow-none"}>
      <div className="flex w-full max-w-[900px] items-center justify-between place-self-center px-5 py-4 md:px-8">
        <button className="text-accent text-2xl font-bold duration-500 hover:scale-115 hover:rotate-y-360">
          JL
        </button>
      </div>
    </header>
  );
}

export default Header;
