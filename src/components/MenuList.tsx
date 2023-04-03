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
  burger: Steak[];
  drink: Steak[];
}

export const MenuList = ({ steaks }: Props) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="text-neutral-200 pt-48 text-2xl font-codepro">
        <div>
          <div className="flex justify-center">
            <img
              src="menuItems/steak.jpg"
              className=" h-[19rem] object-cover rounded-xl -rotate-90"
              alt=""
            />
          </div>
          {steaks.map((item, index) => (
            <div key={index} className="pb-6">
              <div className="text-center">{item.name}</div>
              <div className="text-center text-sm italic text-neutral-400">
                {item.ingredients}
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        src="blackbackground.jpg"
        className="absolute z-[-1] top-0 left-0 object-fill h-full w-full brightness-[80%]"
        alt=""
      />
    </div>
  );
};
