const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="z-10 flex justify-center items-center mb-4 sm:mb-6 md:mb-10 px-4 w-full font-normal text-xs sm:text-sm md:text-base text-white text-center leading-relaxed">
      &copy; {year} Conceptual Life. All Rights Reserved.
    </footer>
  );
};

export default Footer;
