import React, { useState } from "react";

const AboutMe = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <section className="">
      <article className="bg-plateado-nebulosa w-[80%] m-auto rounded-xl md:w-[50%] md:p-10">
        <h3 className="text-black font-bold text-5xl text-center p-5">
          Sobre mi
        </h3>

        <p className="text-black text-3xl p-10 text-left leading-10">
          Hola, soy Adrián, un apasionado desarrollador front end. Me encanta la
          maquetación web, el diseño y, sobre todo, integrar funcionalidades que
          hacen que mis páginas web sean más dinámicas y atractivas.
          {isExpanded && (
            <>
              <span>
                Llevo 5 años inmerso en el estudio del desarrollo web y tengo
                aproximadamente 2 años de experiencia laboral en el área de
                Ecommerce. Mi aventura en la programación comenzó en la
                universidad, donde aprendí las bases y descubrí mi vocación.
                Desde entonces, me he especializado en el área front end, que
                siento que refleja mejor mi personalidad creativa y técnica.
                Afortunadamente, tuve el apoyo de mi hermano, quien me inspiró a
                adentrarme en este fascinante mundo. Hoy en día, estoy
                profundamente agradecido por su influencia. Con el tiempo, he
                mejorado mis habilidades tanto técnicas como blandas, lo cual me
                impulsa a buscar nuevos desafíos que me permitan crecer
                profesionalmente. Estoy emocionado por lo que el futuro me
                depara y ansioso por contribuir con mi experiencia y creatividad
                a nuevos proyectos.
              </span>
            </>
          )}
        </p>
        <a
          onClick={toggleReadMore}
          className=" text-yellow-800 font-bold text-2xl cursor-pointer p-10"
        >
          {isExpanded ? "Leer Menos" : "Leer Mas"}
        </a>
        <div className="flex justify-between items-center relative bg-red-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12 cursor-pointer "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
