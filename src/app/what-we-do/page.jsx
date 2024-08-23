"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaAmbulance, FaHandHoldingMedical, FaHeart } from "react-icons/fa";
import { IoPawSharp } from "react-icons/io5";
import { SiNike } from "react-icons/si";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const [value, setValue] = useState("community");

  const help = [
    {
      home: FaAmbulance,
      tit: "Rescue",
      des: "Sympathy with the animal to be rescued is the main driving force behind all that we do. We have tried to imbibe the values of kindness even in our rescue process and practices. One example of this is that we do not use a net to catch animals. As far as possible, we try to avoid tools and approach the suffering animal with love and gentleness",
      but: "Learn more",
      img: "https://images.unsplash.com/photo-1536862542715-bba7273d6cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZyUyMHNoZWx0ZXJ8ZW58MHx8MHx8fDA%3D",
      link: "/rescue",
    },
    {
      home: FaHandHoldingMedical,
      tit: "Treatment",
      des: "Medical treatment is one of the most important areas where animals need our help. We cannot share the animal’s pain or feel the distress she is feeling, but we try our best to reduce her suffering as far as possible. Our treatment protocols are designed with only one purpose in mind: giving every fighting chance to the struggling animal so her precious life is saved, even if that looks difficult at the time of rescue",
      but: "Learn more",
      img: "https://images.unsplash.com/photo-1692951350082-3eb03155bf12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nJTIwc2hlbHRlcnxlbnwwfHwwfHx8MA%3D%3D",
      link: "/treatment",
    },
    {
      home: IoPawSharp,
      tit: "Rehabilitation",
      des: "It takes time and patience to win the trust of the gentle beings we pick for rescue from the streets. The abuse, neglect and indifference they have endured on the streets make Rehabilitation a long and ongoing process. All recovered dogs who are healthy to survive on their own are released back to their original locations (refer to the release part of this section to read more)",
      but: "Learn more",
      img: "https://images.unsplash.com/photo-1583786693544-e352f898888d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZyUyMHNoZWx0ZXJ8ZW58MHx8MHx8fDA%3D",
      link: "/rehabilitation", // Add the link to the Rehabilitation page here
    },
    {
      home: FaHeart,
      tit: "Release",
      des: "All animals deserve to spend their life peacefully and undisrupted in their own locality. An animal rescue shelter may appear safe, comfortable and convenient for healthy animals but in reality, shelters are hotspots for several life-threatening and contagious infections brought in by different animals rescued for so many different issues",
      but: "Learn more",
      img: "https://images.unsplash.com/photo-1710530911048-dd0acc539612?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvZyUyMHNoZWx0ZXJ8ZW58MHx8MHx8fDA%3D",
      link: "/releasee",
    },
  ];

  const handleLearnMore = (link) => {
    router.push(link);
  };

  return (
    <div className="">
      <div className="whatwedo h-[400px] flex justify-center items-center text-center">
        <h1 className="text-6xl text-white font-bold">AREA OF ACTION</h1>
      </div>
      <div>
        <h1 className="text-center text-3xl font-medium py-10">How we Help</h1>
        <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {help.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col bg-white rounded-lg shadow-md"
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.tit}
                  className="w-full h-[200px] object-cover rounded-t-lg bg-center"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-t-lg">
                  <item.home
                    size={70}
                    className="text-4xl  text-black p-4 rounded-full mb-2 bg-slate-100/65"
                  />
                  <h2 className="text-2xl text-white font-semibold">
                    {item.tit}
                  </h2>
                </div>
              </div>
              <div className="p-4 flex-grow ">
                <p className=" tracking-tighter">{item.des}</p>
              </div>
              <button
                onClick={() => handleLearnMore(item.link)}
                className="bg-green-500 hover:bg-yellow-400 rounded-b-lg px-5 py-2 self-start m-4"
              >
                {item.but}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* banner for call */}
      <div className="w-[100%] lg:px-5 xl:w-[90%] 2xl:w-[70%] rescue lg:mx-auto h-auto  flex flex-col lg:flex-row lg:justify-between gap-4  py-10 items-center px-5 rounded-2xl mt-16 shadow-2xl ">
        <h1 className="text-4xl font-bold tracking-tighter">
          Report a Rescue!
        </h1>
        <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-4 items-center">
          <p className="text-4xl tracking-tighter font-bold">1800 102 8032</p>
          <button className="bg-green-500 tracking-tighter hover:bg-yellow-400 rounded-lg px-5 py-2 lg:self-start m-4">
            Call Now
          </button>
        </div>
      </div>
      {/* doctor section of the page */}
      <div className="w-[80%] mx-auto mt-10 grid lg:grid-cols-2 gap-10">
        <div>
          <img
            src="https://sarvoham.org/wp-content/uploads/2021/12/Spay-and-Neuter.jpg"
            alt=""
            className="rounded-3xl h-full  "
          />
        </div>
        <div className="flex  xl:mt-20 flex-col gap-5 text-start">
          <h1 className="text-4xl font-medium text-start tracking-tighter xl:tracking-wider">
            Spay/Neuter & Vaccinate
          </h1>
          <p className=" xl:tracking-wider tracking-tighter ">
            Sarvoham spays/neuters and vaccinates against rabies, all the dogs
            we rescue. Spaying/neutering helps in avoiding human-animal conflict
            arising due to rabies and overpopulation. Humans tend to be more
            sympathetic and caring towards spayed/ neutered animals in the
            absence of the fear of overpopulation. Once a mother is free from
            the incessant cycles of pregnancy, her own health begins to improve.
            Puppies that don’t come to this world already escape cruel death on
            streets due to starvation, accidents and diseases.{" "}
          </p>
          <div>
            <h1 className="flex gap-2 items-center tracking-wider">
              {" "}
              <span>
                <SiNike className=" text-green-500" />
              </span>
              Reduces homelessness
            </h1>
            <h1 className="flex gap-2 items-center tracking-wider">
              {" "}
              <span>
                <SiNike className=" text-green-500" />
              </span>
              Reduces territorial conflicts
            </h1>
            <h1 className="flex gap-2 items-center tracking-wider">
              {" "}
              <span>
                <SiNike className=" text-green-500" />
              </span>
              Eliminates many health problems
            </h1>
          </div>
        </div>
      </div>
      {/* last part of the page */}
      <div className="w-[80%] mx-auto mt-24 grid  lg:grid-cols-2  mb-10  gap-10 ">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3 h-9  ">
            <div
              className=" cursor-pointer text-center "
              onClick={() => setValue("community")}
            >
              <h1 className=" tracking-wider text-lg hover:text-green-500 font-bold">
                Community Partnership
              </h1>
              <hr className="border-2  border-green-500" />
            </div>
            <div
              className="cursor-pointer text-center"
              onClick={() => setValue("Education")}
            >
              <h1 className=" tracking-wider text-lg hover:text-green-500 font-bold">
                Education and Outreach
              </h1>
              <hr className="border-2 border-green-500" />
            </div>
            <div
              className="cursor-pointer text-center mt-4 col-span-2 xl:ml-20 flex flex-col items-center "
              onClick={() => setValue("Adoption")}
            >
              <h1 className=" tracking-wider text-lg hover:text-green-500 font-bold">
                Adoption Campaigns
              </h1>
              <hr className="border-2 border-green-500 w-[80%] xl:w-[50%]" />
            </div>
          </div>
          <div className="mt-20 tracking-tighter">
            {value === "community" && (
              <p className="text-center">
                We offer assistance to the local community in animal-related
                matters in many ways. From providing veterinary advice for
                addressing minor medical issues, to arranging street water bowls
                in summer, we frequently undertake projects to ensure a
                connection with the local community for better care and
                treatment of street animals.
              </p>
            )}
            {value === "Education" && (
              <p className="text-center">
                Sarvoham offers education and outreach programs to help animals
                and their owners understand the importance of conservation and
                protecting wildlife. We work with local schools, community
                centers, and organizations to provide educational resources and
                foster a sense of community and respect for wildlife in our
                community.
              </p>
            )}
            {value === "Adoption" && (
              <p className="text-center">
                We actively advocate against the objectifying practice of
                breeding and buying pets. By frequently organizing adoption
                campaigns and encouraging people to adopt rescued animals, we
                encourage the practice of “Adopt, don’t shop”.
              </p>
            )}
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-center font-medium text-3xl">
              Want to Volunteer with us?
            </h1>

            <Link href="/Getinvolved">
              <button className="bg-green-500 hover:bg-yellow-400 rounded-lg  px-5 py-2  m-4">
                Click Here
              </button>
            </Link>
          </div>
        </div>
        <div className=" order-first lg:order-last">
          <img
            src="https://sarvoham.org/wp-content/uploads/2021/10/joshua-anand-IQHK7MLc6RU-unsplash-scaled.jpg"
            alt=""
            className=" rounded-2xl h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
