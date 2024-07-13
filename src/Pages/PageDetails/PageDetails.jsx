import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaLink,
} from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const PageDetails = () => {
  const datas = useLoaderData();
  console.log(datas);
  

  return (
    <div className="container mt-16 pt-20 mx-auto text-black p-4 bg-white">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 bg-white">
        <div className="rounded-lg bg-white">
          {/* Grid */}
          <div className="mb-4 text-sm bg-white">
            <a href="#" className="text-blue-500 hover:underline">
              {datas.category}
            </a>{" "}
            /
            <a href="#" className="text-blue-500 hover:underline">
              {" "}
              টালিউড
            </a>
            <div className="text-gray-500 mt-1">
              কালবেলা প্রতিবেদক | প্রকাশ : ০৪ জুন ২০২৪, ০৮:৫৫ পিএম | অনলাইন
              সংস্করণ
            </div>
          </div>
          {/* Article Section */}
          <article className="md:col-span-1 lg:col-span-1 bg-white">
            <h2 className="text-lg font-bold mb-2">এ সম্পর্কিত আরও খবর</h2>
            <div className="grid gap-2 mb-4 bg-white">
              <div className="border p-4 rounded bg-white">
                <a href="#" className="block hover:underline">
                  কঙ্গনাকে থাপ্পড় মারা নিরাপত্তারক্ষীর জন্য পুরস্কার ঘোষণা
                </a>
              </div>
              <div className="border p-4 rounded bg-white">
                <a href="#" className="block hover:underline">
                  মোদিই হলেন সংসদ নেতা, জোটের এমপিদের প্রস্তাব পাস
                </a>
              </div>
              <div className="border p-4 rounded bg-white">
                <a href="#" className="block hover:underline">
                  রাহুল গান্ধীকে রাজনীতি বিষয়ে যে পরামর্শ দেন শাহরুখ
                </a>
              </div>
              <div className="border p-4 rounded bg-white">
                <a href="#" className="block hover:underline">
                  আবারও সংসদ নেতা হচ্ছেন মোদি
                </a>
              </div>
            </div>
          </article>
        </div>

        <div className="rounded-lg lg:col-span-2 bg-white">
          <header className="mb-4 flex justify-between items-center md:col-span-2 lg:col-span-2 bg-white">
            <h1 className="text-2xl font-bold">{datas.title}</h1>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-blue-500 text-white rounded-full flex items-center">
                <FaFacebookF />
              </button>
              <button className="px-3 py-1 bg-blue-400 text-white rounded-full flex items-center">
                <FaTwitter />
              </button>
              <button className="px-3 py-1 bg-blue-700 text-white rounded-full flex items-center">
                <FaLinkedinIn />
              </button>
              <button className="px-3 py-1 bg-green-500 text-white rounded-full flex items-center">
                <FaWhatsapp />
              </button>
              <button className="px-3 py-1 bg-gray-500 text-white rounded-full flex items-center">
                <FaEnvelope />
              </button>
              <button className="px-3 py-1 bg-gray-700 text-white rounded-full flex items-center">
                <FaLink />
              </button>
            </div>
          </header>
          <img
            src={datas.photo}
            alt="Article"
            className="w-full h-auto mb-4 bg-white"
          />
         <p className="text-justify mb-4 bg-white" dangerouslySetInnerHTML={{ __html: datas.description }}></p>

        </div>

        <div className="rounded-lg bg-white">
          {/* Left Sidebar Section */}
          <aside className="md:col-span-1 lg:col-span-1 bg-white">
            <h2 className="text-lg font-bold mb-2 m-1 bg-white">
              ঘটনাপ্রবাহ: লোকসভা নির্বাচন ২০২৪
            </h2>
            <div className="grid gap-2 bg-white">
              <div className="border p-2 rounded bg-white">
                <a href="#" className="block hover:underline">
                  চা বিক্রেতা থেকে প্রধানমন্ত্রী হিসেবে হ্যাটট্রিক মোদির!
                </a>
                <span className="text-gray-500 text-xs">
                  ০৯ জুন, ২০২৪ ১১:৪৩ এএম
                </span>
              </div>
              <div className="border p-2 rounded bg-white">
                <a href="#" className="block hover:underline">
                  নীতিশকে যে টোপ দিয়েও ভাগাতে পারেনি ইন্ডিয়া জোট
                </a>
                <span className="text-gray-500 text-xs">
                  ০৯ জুন, ২০২৪ ১০:০০ এএম
                </span>
              </div>
              <div className="border p-2 rounded bg-white">
                <a href="#" className="block hover:underline">
                  মোদির শপথ অনুষ্ঠানে শেখ হাসিনাসহ থাকবেন যেসব রাষ্ট্রনায়ক
                </a>
                <span className="text-gray-500 text-xs">
                  ০৯ জুন, ২০২৪ ০৯:১৭ এএম
                </span>
              </div>
              <div className="border p-2 rounded bg-white">
                <a href="#" className="block hover:underline">
                  মোদির সঙ্গে জোট করে কী পেলেন নীতিশ-নাইডু
                </a>
                <span className="text-gray-500 text-xs">
                  ০৮ জুন, ২০২৪ ১০:৪৭ পিএম
                </span>
              </div>
              <div className="border p-2 rounded bg-white">
                <a href="#" className="block hover:underline">
                  জেলে বসে ওমর আব্দুল্লাহকে হারানো কে এই রশিদ
                </a>
                <span className="text-gray-500 text-xs">
                  ০৮ জুন, ২০২৪ ০৪:৫৩ পিএম
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid lg:grid-cols-5 md:grid-cols-5 gap-4 bg-white"></div>

      {/* Comments Section */}
      <section className="mt-8 bg-white">
        <h2 className="text-lg font-bold mb-4">মন্তব্য করুন</h2>
        <div className="bg-gray-100 p-4 rounded bg-white">
          <form>
            <textarea
              className="w-full p-2 border rounded mb-4"
              rows="4"
              placeholder="আপনার মন্তব্য লিখুন..."
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              মন্তব্য প্রকাশ করুন
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PageDetails;
