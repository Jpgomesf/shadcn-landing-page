import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-none place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Next-Gen
            </span>{" "}
            CRMs
          </h1>{" "}
          for {" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Modern
            </span>{" "}
            Companies
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Equip your business with cutting-edge CRM tools designed to streamline
          operations, enhance customer relationships, and drive success.
        </p>
      </div>

      {/* Hero cards sections */}
      <div className="z-10 w-full">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      {/* <div className="shadow"></div> */}
    </section>
  );
};
