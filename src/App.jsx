import image from "./images/illustration-hero.svg";
import music from "./images/icon-music.svg";

function App() {
  return (
    <main className="h-screen flex items-center justify-center ">
      <section className="w-[340px] bg-white rounded-3xl">
        <img src={image} alt="image" className="rounded-t-3xl" />
        <div className="items-center flex flex-col justify-center text-center">
          <div className="px-12">
            <h2 className="items-center mt-8 font-bold text-2xl text-darkBlue ">
              Order Summary
            </h2>
            <p className="text-desaturatedBlue mt-5 text-sm font-semibold">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </div>

          <div className="flex flex-row gap-7 mt-6 bg-PaleCustom rounded-xl p-4 px-3">
            <img src={music} alt="music" className="" />
            <div>
              <p className="text-darkBlue font-bold">Annual Plan</p>
              <p className="text-desaturatedBlue">$59.99/year</p>
            </div>
            <button className="text-brighBlue underline items-baseline text-sm font-bold pl-3 hover:text-purpleLow hover:no-underline">Change</button>
          </div>
          <div className="mt-6">
            <button className="bg-brighBlue text-white font-bold rounded-xl px-5 p-3 w-full hover:bg-purpleLow">
              Proceed to Payment
            </button>
            <button className=" mt-6 mb-8 text-desaturatedBlue font-bold hover:text-darkBlue">
              Cancel Order
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
