import { useState } from "react";

interface Steak {
  name: string;
  ingredients: string;
  image: string;
}
interface Burger {
  name: string;
  ingredients: string;
  image: string;
}
interface Drink {
  name: string;
  ingredients: string;
  image: string;
}

interface Props {
  steaks: Steak[];
  burgers: Steak[];
  drinks: Steak[];
}

export const MenuList = ({ steaks, burgers, drinks }: Props) => {
  const [steakImage, setStakeImage] = useState<number>(10);
  const [burgerImage, setBurgerImage] = useState<number>(10);
  const [drinkImage, setDrinkImage] = useState<number>(10);
  const handleClick = (
    id: number,
    setImage: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setImage(id);
  };
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="text-neutral-200 pt-48 text-2xl font-codepro">
        <div className="mb-10 mx-12 md:mr-12 md:ml-20 flex flex-col md:flex-row pb-6 border-b-2 border-[#fc6203]">
          <div className="flex justify-center mb-4 h-[20rem] md:h-[30rem] md:mb-0">
            <img
              src={`menuItems/steakList/${steakImage}.jpg`}
              className="object-cover rounded-xl w-60 md:w-[45rem]"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center border-neutral-500 w-[100%]">
            {steaks.map((item, index) => (
              <div key={index} className="pb-6">
                <div
                  className={
                    steakImage === index
                      ? "text-center flex justify-center animate-colorChange"
                      : "text-center flex justify-center"
                  }
                >
                  <a
                    className="cursor-pointer text-2xl md:text-3xl lg:text-5xl"
                    onClick={() => handleClick(index, setStakeImage)}
                  >
                    {item.name}
                  </a>
                </div>

                <div className="text-center text-sm md:text-lg lg:text-xl italic text-neutral-400">
                  {item.ingredients}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-10 mx-12 md:mr-12 md:ml-20 flex flex-col md:flex-row-reverse pb-6 border-b-2 border-[#fc6203]">
          <div className="flex justify-center mb-4 h-[20rem] md:h-[30rem] md:mb-0">
            <img
              src={`menuItems/burgerList/${burgerImage}.jpg`}
              className="object-cover rounded-xl w-60 md:w-[45rem]"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center border-neutral-500 w-[100%]">
            {burgers.map((item, index) => (
              <div key={index} className="pb-6">
                <div
                  className={
                    burgerImage === index
                      ? "text-center flex justify-center animate-colorChange"
                      : "text-center flex justify-center"
                  }
                >
                  <a
                    className="cursor-pointer text-2xl md:text-3xl lg:text-5xl"
                    onClick={() => handleClick(index, setBurgerImage)}
                  >
                    {item.name}
                  </a>
                </div>

                <div className="text-center text-sm md:text-lg lg:text-xl italic text-neutral-400">
                  {item.ingredients}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-10 mx-12 md:mr-12 md:ml-20 flex flex-col md:flex-row pb-6 ">
          <div className="flex justify-center mb-4 h-[20rem] md:h-[30rem] md:mb-0">
            <img
              src={`menuItems/drinkList/${drinkImage}.jpg`}
              className="object-cover rounded-xl w-60 md:w-[45rem]"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center border-neutral-500 w-[100%] ">
            {drinks.map((item, index) => (
              <div key={index} className="pb-6">
                <div
                  className={
                    drinkImage === index
                      ? "text-center flex justify-center animate-colorChange"
                      : "text-center flex justify-center"
                  }
                >
                  <a
                    className="cursor-pointer text-2xl md:text-3xl lg:text-5xl"
                    onClick={() => handleClick(index, setDrinkImage)}
                  >
                    {item.name}
                  </a>
                </div>

                <div className="text-center text-sm md:text-lg lg:text-xl italic text-neutral-400">
                  {item.ingredients}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        src="backgrounds/cuisine.jpg"
        className="absolute z-[-1] top-0 left-0 object-fill h-full w-full brightness-[60%]"
        alt=""
      />
    </div>
  );
};
