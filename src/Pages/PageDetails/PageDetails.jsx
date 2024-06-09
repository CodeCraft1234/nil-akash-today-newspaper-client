// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaWhatsapp,
//   FaEnvelope,
//   FaLink,
// } from "react-icons/fa";

// const PageDetails = () => {
//   return (
//     <div className="container mx-auto p-4">
//       {/* Main Content Section */}
//       <div className="grid md:grid-cols-3 gap-4">
//         {/* Article Section */}
//         <article className="md:col-span-2">
//           <header className="mb-4">
//             <h1 className="text-2xl font-bold text-left">বিপুল ভোটে জিতলেন সায়নী</h1>
//             <div className="flex space-x-2 mt-2">
//               <button className="px-3 py-1 bg-blue-500 text-white rounded-full flex items-center">
//                 <FaFacebookF />
//               </button>
//               <button className="px-3 py-1 bg-blue-400 text-white rounded-full flex items-center">
//                 <FaTwitter />
//               </button>
//               <button className="px-3 py-1 bg-blue-700 text-white rounded-full flex items-center">
//                 <FaLinkedinIn />
//               </button>
//               <button className="px-3 py-1 bg-green-500 text-white rounded-full flex items-center">
//                 <FaWhatsapp />
//               </button>
//               <button className="px-3 py-1 bg-gray-500 text-white rounded-full flex items-center">
//                 <FaEnvelope />
//               </button>
//               <button className="px-3 py-1 bg-gray-700 text-white rounded-full flex items-center">
//                 <FaLink />
//               </button>
//             </div>
//           </header>
//           <img
//             src="https://i.ibb.co/g9grrG9/sayoni.webp"
//             alt="Article"
//             className="w-full h-auto mb-4"
//           />
//           <p className="text-justify mb-4">
//             ভারতের লোকসভা নির্বাচনে যাদবপুর থেকে তৃণমূল কংগ্রেস প্রার্থী ও
//             অভিনেত্রী সায়নী ঘোষ বিজয়ী হয়েছেন। নিকটতম প্রতিদ্বন্দ্বী, বিজেপির
//             জাতীয় পুরস্কার জয়ী অভিনেতা গজেন্দ্র চৌহান কে হারিয়ে বেশী ভোটের
//             ব্যবধানে তিনি বিজয়ী হয়েছেন।
//           </p>
//           <p className="text-justify mb-4">
//             মঙ্গলবার (৪ জুন) ভারতের নির্বাচন কমিশনের ওয়েবসাইট এ তথ্য জানা যায়।
//             কমিশনের ওয়েবসাইটে দেয়া তথ্যে জানা যায়, যাদবপুর থেকে তৃণমূল প্রার্থী
//             সায়নী পেয়েছেন ১ লাখ ১৭ হাজার ৩৬১ ভোট। আর বিজেপির গজেন্দ্র চৌহান
//             পেয়েছেন ৯৮ হাজার ৯৬৫ ভোট।
//           </p>
//           <p className="text-justify mb-4">
//             অতিরিক্ত ১৯ হাজার ৩৯৬ ভোট বেশি পেয়ে সায়নী জয়ী হয়েছেন। ২০২১ সালের
//             বিধানসভা নির্বাচনের প্রার্থীতায় অভিষেকের পর এবার তিনি প্রথমবারের মতো
//             লোকসভা নির্বাচনে জয়লাভ করলেন।
//           </p>
//         </article>

//         {/* Sidebar Section */}
//         <aside>
//           <h2 className="text-lg font-bold mb-2">সম্পর্কিত আরো খবর</h2>
//           <ul className="space-y-2">
//             <li className="border-b pb-2">
//               <a href="#" className="hover:underline">
//                 করোনার কারণে দারাজ বন্ধ
//               </a>
//             </li>
//             <li className="border-b pb-2">
//               <a href="#" className="hover:underline">
//                 শেয়ার বাজারে দরপতন
//               </a>
//             </li>
//             <li className="border-b pb-2">
//               <a href="#" className="hover:underline">
//                 অর্থনীতি পুনরুদ্ধার
//               </a>
//             </li>
//             <li className="border-b pb-2">
//               <a href="#" className="hover:underline">
//                 বিশ্ব স্বাস্থ্য সংস্থার প্রতিবেদন
//               </a>
//             </li>
//             <li className="border-b pb-2">
//               <a href="#" className="hover:underline">
//                 বাংলাদেশের উন্নয়ন
//               </a>
//             </li>
//           </ul>
//         </aside>
//       </div>

//       {/* Comments Section */}
//       <section className="mt-8">
//         <h2 className="text-lg font-bold mb-4">মন্তব্য করুন</h2>
//         <div className="bg-gray-100 p-4 rounded">
//           <form>
//             <textarea
//               className="w-full p-2 border rounded mb-4"
//               rows="4"
//               placeholder="আপনার মন্তব্য লিখুন..."
//             ></textarea>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//             >
//               মন্তব্য প্রকাশ করুন
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PageDetails;


// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaLink } from 'react-icons/fa';

// const PageDetails = () => {
//     return (
//         <div className="container mx-auto p-4">
//             {/* Main Content Section */}
//             <div className="grid md:grid-cols-3 gap-4">
//                 {/* Article Section */}
//                 <article className="md:col-span-2">
//                     <header className="mb-4 flex justify-between items-center">
//                         <h1 className="text-2xl font-bold">বিপুল ভোটে জিতলেন সায়নী</h1>
//                         <div className="flex space-x-2">
//                             <button className="px-3 py-1 bg-blue-500 text-white rounded-full flex items-center">
//                                 <FaFacebookF />
//                             </button>
//                             <button className="px-3 py-1 bg-blue-400 text-white rounded-full flex items-center">
//                                 <FaTwitter />
//                             </button>
//                             <button className="px-3 py-1 bg-blue-700 text-white rounded-full flex items-center">
//                                 <FaLinkedinIn />
//                             </button>
//                             <button className="px-3 py-1 bg-green-500 text-white rounded-full flex items-center">
//                                 <FaWhatsapp />
//                             </button>
//                             <button className="px-3 py-1 bg-gray-500 text-white rounded-full flex items-center">
//                                 <FaEnvelope />
//                             </button>
//                             <button className="px-3 py-1 bg-gray-700 text-white rounded-full flex items-center">
//                                 <FaLink />
//                             </button>
//                         </div>
//                     </header>
//                     <img 
//                         src="https://i.ibb.co/g9grrG9/sayoni.webp" 
//                         alt="Article" 
//                         className="w-full h-auto mb-4" 
//                     />
//                     <p className="text-justify mb-4">
//                         ভারতের লোকসভা নির্বাচনে যাদবপুর থেকে তৃণমূল কংগ্রেস প্রার্থী ও অভিনেত্রী সায়নী ঘোষ বিজয়ী হয়েছেন। 
//                         নিকটতম প্রতিদ্বন্দ্বী, বিজেপির জাতীয় পুরস্কার জয়ী অভিনেতা গজেন্দ্র চৌহান কে হারিয়ে বেশী ভোটের ব্যবধানে 
//                         তিনি বিজয়ী হয়েছেন।
//                     </p>
//                     <p className="text-justify mb-4">
//                         মঙ্গলবার (৪ জুন) ভারতের নির্বাচন কমিশনের ওয়েবসাইট এ তথ্য জানা যায়। 
//                         কমিশনের ওয়েবসাইটে দেয়া তথ্যে জানা যায়, যাদবপুর থেকে তৃণমূল প্রার্থী সায়নী পেয়েছেন ১ লাখ ১৭ 
//                         হাজার ৩৬১ ভোট। আর বিজেপির গজেন্দ্র চৌহান পেয়েছেন ৯৮ হাজার ৯৬৫ ভোট।
//                     </p>
//                     <p className="text-justify mb-4">
//                         অতিরিক্ত ১৯ হাজার ৩৯৬ ভোট বেশি পেয়ে সায়নী জয়ী হয়েছেন। ২০২১ সালের বিধানসভা নির্বাচনের প্রার্থীতায় 
//                         অভিষেকের পর এবার তিনি প্রথমবারের মতো লোকসভা নির্বাচনে জয়লাভ করলেন।
//                     </p>
//                 </article>

//                 {/* Sidebar Section */}
//                 <aside>
//                     <h2 className="text-lg font-bold mb-2">সম্পর্কিত আরো খবর</h2>
//                     <ul className="space-y-2">
//                         <li className="border-b pb-2">
//                             <a href="#" className="hover:underline">করোনার কারণে দারাজ বন্ধ</a>
//                         </li>
//                         <li className="border-b pb-2">
//                             <a href="#" className="hover:underline">শেয়ার বাজারে দরপতন</a>
//                         </li>
//                         <li className="border-b pb-2">
//                             <a href="#" className="hover:underline">অর্থনীতি পুনরুদ্ধার</a>
//                         </li>
//                         <li className="border-b pb-2">
//                             <a href="#" className="hover:underline">বিশ্ব স্বাস্থ্য সংস্থার প্রতিবেদন</a>
//                         </li>
//                         <li className="border-b pb-2">
//                             <a href="#" className="hover:underline">বাংলাদেশের উন্নয়ন</a>
//                         </li>
//                     </ul>
//                 </aside>
//             </div>

//             {/* Comments Section */}
//             <section className="mt-8">
//                 <h2 className="text-lg font-bold mb-4">মন্তব্য করুন</h2>
//                 <div className="bg-gray-100 p-4 rounded">
//                     <form>
//                         <textarea className="w-full p-2 border rounded mb-4" rows="4" placeholder="আপনার মন্তব্য লিখুন..."></textarea>
//                         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">মন্তব্য প্রকাশ করুন</button>
//                     </form>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default PageDetails;

// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaLink } from 'react-icons/fa';

// const PageDetails = () => {
//     return (
//         <div className="container mx-auto p-4">
//             {/* Breadcrumb and Article Details */}
//             <div className="mb-4 text-sm">
//                 <a href="#" className="text-blue-500 hover:underline">বিনোদন</a> / 
//                 <a href="#" className="text-blue-500 hover:underline"> টালিউড</a>
//                 <div className="text-gray-500 mt-1">
//                     কালবেলা প্রতিবেদক | প্রকাশ : ০৪ জুন ২০২৪, ০৮:৫৫ পিএম | অনলাইন সংস্করণ
//                 </div>
//             </div>

//             {/* Main Content Section */}
//             <div className="grid md:grid-cols-3 gap-4">
//                 {/* Article Section */}
//                 <article className="md:col-span-2">
//                     <header className="mb-4 flex justify-between items-center">
//                         <h1 className="text-2xl font-bold">বিপুল ভোটে জিতলেন সায়নী</h1>
//                         <div className="flex space-x-2">
//                             <button className="px-3 py-1 bg-blue-500 text-white rounded-full flex items-center">
//                                 <FaFacebookF />
//                             </button>
//                             <button className="px-3 py-1 bg-blue-400 text-white rounded-full flex items-center">
//                                 <FaTwitter />
//                             </button>
//                             <button className="px-3 py-1 bg-blue-700 text-white rounded-full flex items-center">
//                                 <FaLinkedinIn />
//                             </button>
//                             <button className="px-3 py-1 bg-green-500 text-white rounded-full flex items-center">
//                                 <FaWhatsapp />
//                             </button>
//                             <button className="px-3 py-1 bg-gray-500 text-white rounded-full flex items-center">
//                                 <FaEnvelope />
//                             </button>
//                             <button className="px-3 py-1 bg-gray-700 text-white rounded-full flex items-center">
//                                 <FaLink />
//                             </button>
//                         </div>
//                     </header>
//                     <img 
//                         src="https://i.ibb.co/g9grrG9/sayoni.webp" 
//                         alt="Article" 
//                         className="w-full h-auto mb-4" 
//                     />
//                     <p className="text-justify mb-4">
//                         ভারতের লোকসভা নির্বাচনে যাদবপুর থেকে তৃণমূল কংগ্রেস প্রার্থী ও অভিনেত্রী সায়নী ঘোষ বিজয়ী হয়েছেন। 
//                         নিকটতম প্রতিদ্বন্দ্বী, বিজেপির জাতীয় পুরস্কার জয়ী অভিনেতা গজেন্দ্র চৌহান কে হারিয়ে বেশী ভোটের ব্যবধানে 
//                         তিনি বিজয়ী হয়েছেন।
//                     </p>
//                     <p className="text-justify mb-4">
//                         মঙ্গলবার (৪ জুন) ভারতের নির্বাচন কমিশনের ওয়েবসাইট এ তথ্য জানা যায়। 
//                         কমিশনের ওয়েবসাইটে দেয়া তথ্যে জানা যায়, যাদবপুর থেকে তৃণমূল প্রার্থী সায়নী পেয়েছেন ১ লাখ ১৭ 
//                         হাজার ৩৬১ ভোট। আর বিজেপির গজেন্দ্র চৌহান পেয়েছেন ৯৮ হাজার ৯৬৫ ভোট।
//                     </p>
//                     <p className="text-justify mb-4">
//                         অতিরিক্ত ১৯ হাজার ৩৯৬ ভোট বেশি পেয়ে সায়নী জয়ী হয়েছেন। ২০২১ সালের বিধানসভা নির্বাচনের প্রার্থীতায় 
//                         অভিষেকের পর এবার তিনি প্রথমবারের মতো লোকসভা নির্বাচনে জয়লাভ করলেন।
//                     </p>
//                 </article>

//                 {/* Sidebar Section */}
//                 <aside>
//                     <h2 className="text-lg font-bold mb-2">এ সম্পর্কিত আরও খবর</h2>
//                     <div className="grid gap-2">
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 কঙ্গনাকে থাপ্পড় মারা নিরাপত্তারক্ষীর জন্য পুরস্কার ঘোষণা
//                             </a>
//                         </div>
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 মোদিই হলেন সংসদ নেতা, জোটের এমপিদের প্রস্তাব পাস
//                             </a>
//                         </div>
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 রাহুল গান্ধীকে রাজনীতি বিষয়ে যে পরামর্শ দেন শাহরুখ
//                             </a>
//                         </div>
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 আবারও সংসদ নেতা হচ্ছেন মোদি
//                             </a>
//                         </div>
//                     </div>
//                 </aside>
//             </div>

//             {/* Comments Section */}
//             <section className="mt-8">
//                 <h2 className="text-lg font-bold mb-4">মন্তব্য করুন</h2>
//                 <div className="bg-gray-100 p-4 rounded">
//                     <form>
//                         <textarea className="w-full p-2 border rounded mb-4" rows="4" placeholder="আপনার মন্তব্য লিখুন..."></textarea>
//                         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">মন্তব্য প্রকাশ করুন</button>
//                     </form>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default PageDetails;


// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaLink } from 'react-icons/fa';

// const PageDetails = () => {
//     return (
//         <div className="container mx-auto p-4">
//             {/* Breadcrumb and Article Details */}
//             <div className="mb-4 text-sm">
//                 <a href="#" className="text-blue-500 hover:underline">বিনোদন</a> / 
//                 <a href="#" className="text-blue-500 hover:underline"> টালিউড</a>
//                 <div className="text-gray-500 mt-1">
//                     কালবেলা প্রতিবেদক | প্রকাশ : ০৪ জুন ২০২৪, ০৮:৫৫ পিএম | অনলাইন সংস্করণ
//                 </div>
//             </div>

//             {/* Main Content Section */}
//             <div className="grid md:grid-cols-3 gap-4">
//                 {/* Sidebar Section */}
//                 <aside className="md:col-span-1 order-last md:order-first">
//                     <h2 className="text-lg font-bold mb-2">এ সম্পর্কিত আরও খবর</h2>
//                     <div className="grid gap-2">
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 কঙ্গনাকে থাপ্পড় মারা নিরাপত্তারক্ষীর জন্য পুরস্কার ঘোষণা
//                             </a>
//                         </div>
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 মোদিই হলেন সংসদ নেতা, জোটের এমপিদের প্রস্তাব পাস
//                             </a>
//                         </div>
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 রাহুল গান্ধীকে রাজনীতি বিষয়ে যে পরামর্শ দেন শাহরুখ
//                             </a>
//                         </div>
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 আবারও সংসদ নেতা হচ্ছেন মোদি
//                             </a>
//                         </div>
//                     </div>
//                 </aside>

//                 {/* Article Section */}
//                 <article className="md:col-span-2">
//                     <header className="mb-4 flex justify-between items-center">
//                         <h1 className="text-2xl font-bold">বিপুল ভোটে জিতলেন সায়নী</h1>
//                         <div className="flex space-x-2">
//                             <button className="px-3 py-1 bg-blue-500 text-white rounded-full flex items-center">
//                                 <FaFacebookF />
//                             </button>
//                             <button className="px-3 py-1 bg-blue-400 text-white rounded-full flex items-center">
//                                 <FaTwitter />
//                             </button>
//                             <button className="px-3 py-1 bg-blue-700 text-white rounded-full flex items-center">
//                                 <FaLinkedinIn />
//                             </button>
//                             <button className="px-3 py-1 bg-green-500 text-white rounded-full flex items-center">
//                                 <FaWhatsapp />
//                             </button>
//                             <button className="px-3 py-1 bg-gray-500 text-white rounded-full flex items-center">
//                                 <FaEnvelope />
//                             </button>
//                             <button className="px-3 py-1 bg-gray-700 text-white rounded-full flex items-center">
//                                 <FaLink />
//                             </button>
//                         </div>
//                     </header>
//                     <img 
//                         src="https://i.ibb.co/g9grrG9/sayoni.webp" 
//                         alt="Article" 
//                         className="w-full h-auto mb-4" 
//                     />
//                     <p className="text-justify mb-4">
//                         ভারতের লোকসভা নির্বাচনে যাদবপুর থেকে তৃণমূল কংগ্রেস প্রার্থী ও অভিনেত্রী সায়নী ঘোষ বিজয়ী হয়েছেন। 
//                         নিকটতম প্রতিদ্বন্দ্বী, বিজেপির জাতীয় পুরস্কার জয়ী অভিনেতা গজেন্দ্র চৌহান কে হারিয়ে বেশী ভোটের ব্যবধানে 
//                         তিনি বিজয়ী হয়েছেন।
//                     </p>
//                     <p className="text-justify mb-4">
//                         মঙ্গলবার (৪ জুন) ভারতের নির্বাচন কমিশনের ওয়েবসাইট এ তথ্য জানা যায়। 
//                         কমিশনের ওয়েবসাইটে দেয়া তথ্যে জানা যায়, যাদবপুর থেকে তৃণমূল প্রার্থী সায়নী পেয়েছেন ১ লাখ ১৭ 
//                         হাজার ৩৬১ ভোট। আর বিজেপির গজেন্দ্র চৌহান পেয়েছেন ৯৮ হাজার ৯৬৫ ভোট।
//                     </p>
//                     <p className="text-justify mb-4">
//                         অতিরিক্ত ১৯ হাজার ৩৯৬ ভোট বেশি পেয়ে সায়নী জয়ী হয়েছেন। ২০২১ সালের বিধানসভা নির্বাচনের প্রার্থীতায় 
//                         অভিষেকের পর এবার তিনি প্রথমবারের মতো লোকসভা নির্বাচনে জয়লাভ করলেন।
//                     </p>
//                 </article>
//             </div>

//             {/* Comments Section */}
//             <section className="mt-8">
//                 <h2 className="text-lg font-bold mb-4">মন্তব্য করুন</h2>
//                 <div className="bg-gray-100 p-4 rounded">
//                     <form>
//                         <textarea className="w-full p-2 border rounded mb-4" rows="4" placeholder="আপনার মন্তব্য লিখুন..."></textarea>
//                         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">মন্তব্য প্রকাশ করুন</button>
//                     </form>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default PageDetails;


// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaLink } from 'react-icons/fa';

// const PageDetails = () => {
//     return (
//         <div className="container mx-auto p-4">
//             {/* Breadcrumb and Article Details */}
//             <div className="mb-4 text-sm">
//                 <a href="#" className="text-blue-500 hover:underline">বিনোদন</a> / 
//                 <a href="#" className="text-blue-500 hover:underline"> টালিউড</a>
//                 <div className="text-gray-500 mt-1">
//                     কালবেলা প্রতিবেদক | প্রকাশ : ০৪ জুন ২০২৪, ০৮:৫৫ পিএম | অনলাইন সংস্করণ
//                 </div>
//             </div>

//             {/* Main Content Section */}
//             <div className="grid md:grid-cols-3 gap-4">
//                 {/* Left Sidebar Section */}
//                 <aside className="md:col-span-1 order-last md:order-first">
//                     <h2 className="text-lg font-bold mb-2">এ সম্পর্কিত আরও খবর</h2>
//                     <div className="grid gap-2">
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 কঙ্গনাকে থাপ্পড় মারা নিরাপত্তারক্ষীর জন্য পুরস্কার ঘোষণা
//                             </a>
//                         </div>
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 মোদিই হলেন সংসদ নেতা, জোটের এমপিদের প্রস্তাব পাস
//                             </a>
//                         </div>
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 রাহুল গান্ধীকে রাজনীতি বিষয়ে যে পরামর্শ দেন শাহরুখ
//                             </a>
//                         </div>
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 আবারও সংসদ নেতা হচ্ছেন মোদি
//                             </a>
//                         </div>
//                     </div>
//                 </aside>

//                 {/* Article Section */}
//                 <article className="md:col-span-2">
//                     <header className="mb-4 flex justify-between items-center">
//                         <h1 className="text-2xl font-bold">বিপুল ভোটে জিতলেন সায়নী</h1>
//                         <div className="flex space-x-2">
//                             <button className="px-3 py-1 bg-blue-500 text-white rounded-full flex items-center">
//                                 <FaFacebookF />
//                             </button>
//                             <button className="px-3 py-1 bg-blue-400 text-white rounded-full flex items-center">
//                                 <FaTwitter />
//                             </button>
//                             <button className="px-3 py-1 bg-blue-700 text-white rounded-full flex items-center">
//                                 <FaLinkedinIn />
//                             </button>
//                             <button className="px-3 py-1 bg-green-500 text-white rounded-full flex items-center">
//                                 <FaWhatsapp />
//                             </button>
//                             <button className="px-3 py-1 bg-gray-500 text-white rounded-full flex items-center">
//                                 <FaEnvelope />
//                             </button>
//                             <button className="px-3 py-1 bg-gray-700 text-white rounded-full flex items-center">
//                                 <FaLink />
//                             </button>
//                         </div>
//                     </header>
//                     <img 
//                         src="https://i.ibb.co/g9grrG9/sayoni.webp" 
//                         alt="Article" 
//                         className="w-full h-auto mb-4" 
//                     />
//                     <p className="text-justify mb-4">
//                         ভারতের লোকসভা নির্বাচনে যাদবপুর থেকে তৃণমূল কংগ্রেস প্রার্থী ও অভিনেত্রী সায়নী ঘোষ বিজয়ী হয়েছেন। 
//                         নিকটতম প্রতিদ্বন্দ্বী, বিজেপির জাতীয় পুরস্কার জয়ী অভিনেতা গজেন্দ্র চৌহান কে হারিয়ে বেশী ভোটের ব্যবধানে 
//                         তিনি বিজয়ী হয়েছেন।
//                     </p>
//                     <p className="text-justify mb-4">
//                         মঙ্গলবার (৪ জুন) ভারতের নির্বাচন কমিশনের ওয়েবসাইট এ তথ্য জানা যায়। 
//                         কমিশনের ওয়েবসাইটে দেয়া তথ্যে জানা যায়, যাদবপুর থেকে তৃণমূল প্রার্থী সায়নী পেয়েছেন ১ লাখ ১৭ 
//                         হাজার ৩৬১ ভোট। আর বিজেপির গজেন্দ্র চৌহান পেয়েছেন ৯৮ হাজার ৯৬৫ ভোট।
//                     </p>
//                     <p className="text-justify mb-4">
//                         অতিরিক্ত ১৯ হাজার ৩৯৬ ভোট বেশি পেয়ে সায়নী জয়ী হয়েছেন। ২০২১ সালের বিধানসভা নির্বাচনের প্রার্থীতায় 
//                         অভিষেকের পর এবার তিনি প্রথমবারের মতো লোকসভা নির্বাচনে জয়লাভ করলেন।
//                     </p>
//                 </article>

//                 {/* Right Sidebar Section */}
//                 <aside className="md:col-span-1">
//                     <h2 className="text-lg font-bold mb-2">ঘটনাপ্রবাহ: লোকসভা নির্বাচন ২০২৪</h2>
//                     <div className="grid gap-2">
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 চা বিক্রেতা থেকে প্রধানমন্ত্রী হিসেবে হ্যাটট্রিক মোদির!
//                             </a>
//                             <span className="text-gray-500 text-xs">০৯ জুন, ২০২৪ ১১:৪৩ এএম</span>
//                         </div>
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 নীতিশকে যে টোপ দিয়েও ভাগাতে পারেনি ইন্ডিয়া জোট
//                             </a>
//                             <span className="text-gray-500 text-xs">০৯ জুন, ২০২৪ ১০:০০ এএম</span>
//                         </div>
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 মোদির শপথ অনুষ্ঠানে শেখ হাসিনাসহ থাকবেন যেসব রাষ্ট্রনায়ক
//                             </a>
//                             <span className="text-gray-500 text-xs">০৯ জুন, ২০২৪ ০৯:১৭ এএম</span>
//                         </div>
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 মোদির সঙ্গে জোট করে কী পেলেন নীতিশ-নাইডু
//                             </a>
//                             <span className="text-gray-500 text-xs">০৮ জুন, ২০২৪ ১০:৪৭ পিএম</span>
//                         </div>
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 জেলে বসে ওমর আব্দুল্লাহকে হারানো কে এই রশিদ
//                             </a>
//                             <span className="text-gray-500 text-xs">০৮ জুন, ২০২৪ ০৪:৫৩ পিএম</span>
//                         </div>
//                     </div>
//                 </aside>
//             </div>

//             {/* Comments Section */}
//             <section className="mt-8">
//                 <h2 className="text-lg font-bold mb-4">মন্তব্য করুন</h2>
//                 <div className="bg-gray-100 p-4 rounded">
//                     <form>
//                         <textarea className="w-full p-2 border rounded mb-4" rows="4" placeholder="আপনার মন্তব্য লিখুন..."></textarea>
//                         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">মন্তব্য প্রকাশ করুন</button>
//                     </form>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default PageDetails;


// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaLink } from 'react-icons/fa';

// const PageDetails = () => {
//     return (
//         <div className="container mx-auto p-4">
//             {/* Breadcrumb and Article Details */}
//             <div className="mb-4 text-sm">
//                 <a href="#" className="text-blue-500 hover:underline">বিনোদন</a> / 
//                 <a href="#" className="text-blue-500 hover:underline"> টালিউড</a>
//                 <div className="text-gray-500 mt-1">
//                     কালবেলা প্রতিবেদক | প্রকাশ : ০৪ জুন ২০২৪, ০৮:৫৫ পিএম | অনলাইন সংস্করণ
//                 </div>
//             </div>

//             {/* Main Content Section */}
//             <div className="grid md:grid-cols-3 gap-4">
//                 {/* Article Section */}
//                 <article className="md:col-span-2">
//                     <header className="mb-4 flex justify-between items-center">
//                         <h1 className="text-2xl font-bold">বিপুল ভোটে জিতলেন সায়নী</h1>
//                         <div className="flex space-x-2">
//                             <button className="px-3 py-1 bg-blue-500 text-white rounded-full flex items-center">
//                                 <FaFacebookF />
//                             </button>
//                             <button className="px-3 py-1 bg-blue-400 text-white rounded-full flex items-center">
//                                 <FaTwitter />
//                             </button>
//                             <button className="px-3 py-1 bg-blue-700 text-white rounded-full flex items-center">
//                                 <FaLinkedinIn />
//                             </button>
//                             <button className="px-3 py-1 bg-green-500 text-white rounded-full flex items-center">
//                                 <FaWhatsapp />
//                             </button>
//                             <button className="px-3 py-1 bg-gray-500 text-white rounded-full flex items-center">
//                                 <FaEnvelope />
//                             </button>
//                             <button className="px-3 py-1 bg-gray-700 text-white rounded-full flex items-center">
//                                 <FaLink />
//                             </button>
//                         </div>
//                     </header>
//                     <img 
//                         src="https://i.ibb.co/g9grrG9/sayoni.webp" 
//                         alt="Article" 
//                         className="w-full h-auto mb-4" 
//                     />
//                     <p className="text-justify mb-4">
//                         ভারতের লোকসভা নির্বাচনে যাদবপুর থেকে তৃণমূল কংগ্রেস প্রার্থী ও অভিনেত্রী সায়নী ঘোষ বিজয়ী হয়েছেন। 
//                         নিকটতম প্রতিদ্বন্দ্বী, বিজেপির জাতীয় পুরস্কার জয়ী অভিনেতা গজেন্দ্র চৌহান কে হারিয়ে বেশী ভোটের ব্যবধানে 
//                         তিনি বিজয়ী হয়েছেন।
//                     </p>
//                     <p className="text-justify mb-4">
//                         মঙ্গলবার (৪ জুন) ভারতের নির্বাচন কমিশনের ওয়েবসাইট এ তথ্য জানা যায়। 
//                         কমিশনের ওয়েবসাইটে দেয়া তথ্যে জানা যায়, যাদবপুর থেকে তৃণমূল প্রার্থী সায়নী পেয়েছেন ১ লাখ ১৭ 
//                         হাজার ৩৬১ ভোট। আর বিজেপির গজেন্দ্র চৌহান পেয়েছেন ৯৮ হাজার ৯৬৫ ভোট।
//                     </p>
//                     <p className="text-justify mb-4">
//                         অতিরিক্ত ১৯ হাজার ৩৯৬ ভোট বেশি পেয়ে সায়নী জয়ী হয়েছেন। ২০২১ সালের বিধানসভা নির্বাচনের প্রার্থীতায় 
//                         অভিষেকের পর এবার তিনি প্রথমবারের মতো লোকসভা নির্বাচনে জয়লাভ করলেন।
//                     </p>
//                 </article>

//                 {/* Right Sidebar Section */}
//                 <aside className="md:col-span-1">
//                     <h2 className="text-lg font-bold mb-2">ঘটনাপ্রবাহ: লোকসভা নির্বাচন ২০২৪</h2>
//                     <div className="grid gap-2">
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 চা বিক্রেতা থেকে প্রধানমন্ত্রী হিসেবে হ্যাটট্রিক মোদির!
//                             </a>
//                             <span className="text-gray-500 text-xs">০৯ জুন, ২০২৪ ১১:৪৩ এএম</span>
//                         </div>
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 নীতিশকে যে টোপ দিয়েও ভাগাতে পারেনি ইন্ডিয়া জোট
//                             </a>
//                             <span className="text-gray-500 text-xs">০৯ জুন, ২০২৪ ১০:০০ এএম</span>
//                         </div>
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 মোদির শপথ অনুষ্ঠানে শেখ হাসিনাসহ থাকবেন যেসব রাষ্ট্রনায়ক
//                             </a>
//                             <span className="text-gray-500 text-xs">০৯ জুন, ২০২৪ ০৯:১৭ এএম</span>
//                         </div>
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 মোদির সঙ্গে জোট করে কী পেলেন নীতিশ-নাইডু
//                             </a>
//                             <span className="text-gray-500 text-xs">০৮ জুন, ২০২৪ ১০:৪৭ পিএম</span>
//                         </div>
//                         <div className="border p-2 rounded">
//                             <a href="#" className="block hover:underline">
//                                 জেলে বসে ওমর আব্দুল্লাহকে হারানো কে এই রশিদ
//                             </a>
//                             <span className="text-gray-500 text-xs">০৮ জুন, ২০২৪ ০৪:৫৩ পিএম</span>
//                         </div>
//                     </div>
//                 </aside>
//             </div>

//             {/* Related News Section */}
//             <section className="mt-8">
//                 <h2 className="text-lg font-bold mb-2">এ সম্পর্কিত আরও খবর</h2>
//                 <div className="grid md:grid-cols-2 gap-4">
//                     <div className="border p-4 rounded">
//                         <a href="#" className="block hover:underline">
//                             কঙ্গনাকে থাপ্পড় মারা নিরাপত্তারক্ষীর জন্য পুরস্কার ঘোষণা
//                         </a>
//                     </div>
//                     <div className="border p-4 rounded">
//                         <a href="#" className="block hover:underline">
//                             মোদিই হলেন সংসদ নেতা, জোটের এমপিদের প্রস্তাব পাস
//                         </a>
//                     </div>
//                     <div className="border p-4 rounded">
//                         <a href="#" className="block hover:underline">
//                             রাহুল গান্ধীকে রাজনীতি বিষয়ে যে পরামর্শ দেন শাহরুখ
//                         </a>
//                     </div>
//                     <div className="border p-4 rounded">
//                         <a href="#" className="block hover:underline">
//                             আবারও সংসদ নেতা হচ্ছেন মোদি
//                         </a>
//                     </div>
//                 </div>
//             </section>

//             {/* Comments Section */}
//             <section className="mt-8">
//                 <h2 className="text-lg font-bold mb-4">মন্তব্য করুন</h2>
//                 <div className="bg-gray-100 p-4 rounded">
//                     <form>
//                         <textarea className="w-full p-2 border rounded mb-4" rows="4" placeholder="আপনার মন্তব্য লিখুন..."></textarea>
//                         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">মন্তব্য প্রকাশ করুন</button>
//                     </form>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default PageDetails;

// final code

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaLink } from 'react-icons/fa';

const PageDetails = () => {
    return (
        <div className="container mx-auto p-4">
            {/* Breadcrumb and Article Details */}
            <div className="mb-4 text-sm">
                <a href="#" className="text-blue-500 hover:underline">বিনোদন</a> / 
                <a href="#" className="text-blue-500 hover:underline"> টালিউড</a>
                <div className="text-gray-500 mt-1">
                    কালবেলা প্রতিবেদক | প্রকাশ : ০৪ জুন ২০২৪, ০৮:৫৫ পিএম | অনলাইন সংস্করণ
                </div>
            </div>

            {/* Main Content Section */}
            <div className="grid md:grid-cols-3 gap-4">
                {/* Article Section */}
                <article className="md:col-span-2">
                     <h2 className="text-lg font-bold mb-2">এ সম্পর্কিত আরও খবর</h2>
                    <div className="grid gap-2 mb-4">
                        <div className="border p-4 rounded">
                            <a href="#" className="block hover:underline">
                                কঙ্গনাকে থাপ্পড় মারা নিরাপত্তারক্ষীর জন্য পুরস্কার ঘোষণা
                            </a>
                        </div>
                        <div className="border p-4 rounded">
                            <a href="#" className="block hover:underline">
                                মোদিই হলেন সংসদ নেতা, জোটের এমপিদের প্রস্তাব পাস
                            </a>
                        </div>
                        <div className="border p-4 rounded">
                            <a href="#" className="block hover:underline">
                                রাহুল গান্ধীকে রাজনীতি বিষয়ে যে পরামর্শ দেন শাহরুখ
                            </a>
                        </div>
                        <div className="border p-4 rounded">
                            <a href="#" className="block hover:underline">
                                আবারও সংসদ নেতা হচ্ছেন মোদি
                            </a>
                        </div>
                    </div>
                    <header className="mb-4 flex justify-between items-center">
                        <h1 className="text-2xl font-bold">বিপুল ভোটে জিতলেন সায়নী</h1>
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
                        src="https://i.ibb.co/g9grrG9/sayoni.webp" 
                        alt="Article" 
                        className="w-full h-auto mb-4" 
                    />
                    <p className="text-justify mb-4">
                        ভারতের লোকসভা নির্বাচনে যাদবপুর থেকে তৃণমূল কংগ্রেস প্রার্থী ও অভিনেত্রী সায়নী ঘোষ বিজয়ী হয়েছেন। 
                        নিকটতম প্রতিদ্বন্দ্বী, বিজেপির জাতীয় পুরস্কার জয়ী অভিনেতা গজেন্দ্র চৌহান কে হারিয়ে বেশী ভোটের ব্যবধানে 
                        তিনি বিজয়ী হয়েছেন।
                    </p>
                    <p className="text-justify mb-4">
                        মঙ্গলবার (৪ জুন) ভারতের নির্বাচন কমিশনের ওয়েবসাইট এ তথ্য জানা যায়। 
                        কমিশনের ওয়েবসাইটে দেয়া তথ্যে জানা যায়, যাদবপুর থেকে তৃণমূল প্রার্থী সায়নী পেয়েছেন ১ লাখ ১৭ 
                        হাজার ৩৬১ ভোট। আর বিজেপির গজেন্দ্র চৌহান পেয়েছেন ৯৮ হাজার ৯৬৫ ভোট।
                    </p>
                    <p className="text-justify mb-4">
                        অতিরিক্ত ১৯ হাজার ৩৯৬ ভোট বেশি পেয়ে সায়নী জয়ী হয়েছেন। ২০২১ সালের বিধানসভা নির্বাচনের প্রার্থীতায় 
                        অভিষেকের পর এবার তিনি প্রথমবারের মতো লোকসভা নির্বাচনে জয়লাভ করলেন।
                    </p>
                </article>

                {/* Left Sidebar Section */}
                <aside className="md:col-span-1">
                   
                    
                    <h2 className="text-lg font-bold mb-2 m-1">ঘটনাপ্রবাহ: লোকসভা নির্বাচন ২০২৪</h2>
                    <div className="grid gap-2">
                        <div className="border p-2 rounded">
                            <a href="#" className="block hover:underline">
                                চা বিক্রেতা থেকে প্রধানমন্ত্রী হিসেবে হ্যাটট্রিক মোদির!
                            </a>
                            <span className="text-gray-500 text-xs">০৯ জুন, ২০২৪ ১১:৪৩ এএম</span>
                        </div>
                        <div className="border p-2 rounded">
                            <a href="#" className="block hover:underline">
                                নীতিশকে যে টোপ দিয়েও ভাগাতে পারেনি ইন্ডিয়া জোট
                            </a>
                            <span className="text-gray-500 text-xs">০৯ জুন, ২০২৪ ১০:০০ এএম</span>
                        </div>
                        <div className="border p-2 rounded">
                            <a href="#" className="block hover:underline">
                                মোদির শপথ অনুষ্ঠানে শেখ হাসিনাসহ থাকবেন যেসব রাষ্ট্রনায়ক
                            </a>
                            <span className="text-gray-500 text-xs">০৯ জুন, ২০২৪ ০৯:১৭ এএম</span>
                        </div>
                        <div className="border p-2 rounded">
                            <a href="#" className="block hover:underline">
                                মোদির সঙ্গে জোট করে কী পেলেন নীতিশ-নাইডু
                            </a>
                            <span className="text-gray-500 text-xs">০৮ জুন, ২০২৪ ১০:৪৭ পিএম</span>
                        </div>
                        <div className="border p-2 rounded">
                            <a href="#" className="block hover:underline">
                                জেলে বসে ওমর আব্দুল্লাহকে হারানো কে এই রশিদ
                            </a>
                            <span className="text-gray-500 text-xs">০৮ জুন, ২০২৪ ০৪:৫৩ পিএম</span>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Comments Section */}
            <section className="mt-8">
                <h2 className="text-lg font-bold mb-4">মন্তব্য করুন</h2>
                <div className="bg-gray-100 p-4 rounded">
                    <form>
                        <textarea className="w-full p-2 border rounded mb-4" rows="4" placeholder="আপনার মন্তব্য লিখুন..."></textarea>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">মন্তব্য প্রকাশ করুন</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default PageDetails;

