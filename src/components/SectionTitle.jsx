const SectionTitle = ({ children }) => {
    const [ref, show] = useScrollReveal();

    return (
        <h2
            ref={ref}
            className={`text-4xl md:text-5xl font-extrabold text-center mb-16
      transition-all duration-700 ease-out
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      bg-gradient-to-r from-white via-gray-300 to-gray-500
      bg-clip-text text-transparent`}
        >
            {children}
        </h2>
    );
};
