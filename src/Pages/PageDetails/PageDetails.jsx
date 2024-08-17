import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaLink,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import UseNews from "../../AxiosFetch/UseNews";
import { Helmet } from "react-helmet-async";

const PageDetails = () => {
  const datas = useLoaderData();
  console.log(datas);

  const [activeSection, setActiveSection] = useState('latest');
  const [visibleCount, setVisibleCount] = useState(10);

  const handleToggle = (section) => {
    setActiveSection(section);
    setVisibleCount(10); // Reset the visible count when switching sections
  };

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setVisibleCount(prevCount => prevCount + 10); // Load more items when scrolled to bottom
    }
  };

  const [newer, setNewer] = useState([]);
  const [newer2, setNewerRelated] = useState([]);
  const [news] = UseNews();

  useEffect(() => {
    if (news.length === 0) return;
    const sorted = news.sort((a, b) => new Date(b.date) - new Date(a.date));
    const filtered = news.filter((n) => n.category === datas.category);
    const sorted2 = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    setNewer(sorted);
    setNewerRelated(sorted2);
  }, [news, datas]);

  const itemsToShow = activeSection === 'latest' ? newer : newer2;

  const [sortOrder, setSortOrder] = useState('Oldest');
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      setComments([...comments, { text: commentText, id: comments.length + 1 }]);
      setCommentText('');
    }
  };
console.log(datas.photo,datas.description);
  return (
    <div className="container pt-36 mx-auto text-black p-4 bg-white">
<Helmet>
  <title>{`NilAkashToday | ${datas.title}`}</title>
  <link rel="canonical" href="https://nilakashtoday.com" />
  <meta property="og:title" content={datas.title} />
  <meta property="og:description" content={datas.description} />
  <meta property="og:image" content={datas.photo} />
  <meta property="og:url" content={`https://nilakashtoday.com/newsDetails/${datas._id}`} />
  <meta property="og:type" content="article" />
</Helmet>

      <img className="w-full h-20 mb-4" src="https://i.ibb.co/t3xZ42G/8506705887870801222.png" alt="" />
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-4 lg:gap-5 bg-white">
        <div className="rounded-lg order-2 lg:order-1 md:order-1 bg-white">
          <div className="mb-4 text-sm bg-white">
            <a href="#" className="text-blue-500 hover:underline">{datas.category}</a> /
            <a href="#" className="text-blue-500 hover:underline"> টালিউড</a>
            <div className="text-black mt-1">
              <h1>প্রতিবেদক</h1>
              <h1>প্রকাশ : ০৪ জুন ২০২৪, ০৮:৫৫ পিএম</h1>
              <h1>অনলাইন সংস্করণ</h1>
            </div>
          </div>
          <article className="md:col-span-1 lg:col-span-1 bg-white">
            <h2 className="text-lg font-bold border-b-2 border-t-2 pb-3 pt-3 mb-2">এ সম্পর্কিত আরও খবর</h2>
            <div className="grid gap-2 mb-4 bg-white">
              <ul className="space-y-2">
                {newer2.slice(0, 5).map(item => (
                  <Link key={item.id} to={`/newsDetails/${item._id}`}>
                    <li className="flex hover:bg-gray-100 items-center justify-start gap-2 space-x-2">
                      <img className="h-14 w-16" src={item.photo} alt="" />
                      <a className="hover:text-blue-800 hover:font-extralight">{item.title}</a>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </article>
          <img className="w-full h-200px" src="https://i.ibb.co/99Bfx2B/Walton1465127503.webp" alt="" />
        </div>

        <div className="rounded-lg order-1 lg:order-2 md:order-2 lg:col-span-2 bg-white">
          <header className="mb-4 items-center md:col-span-2 lg:col-span-2 bg-white">
            <h1 className="text-2xl mb-4 font-bold">{datas.title}</h1>
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
          <img src={datas.photo} alt="Article" className="w-full h-auto mb-4 bg-white" />
          <p className="text-justify mb-4 bg-white" dangerouslySetInnerHTML={{ __html: datas.description }}></p>

          <div className="p-4 border rounded-lg">
            <h2 className="text-blue-600 font-bold mb-4">মন্তব্য করুন</h2>
            <div className="mb-4">
              <span className="font-bold">{comments.length} comments</span>
              <div className="float-right">
                <label htmlFor="sortOrder" className="mr-2">Sort by</label>
                <select
                  id="sortOrder"
                  value={sortOrder}
                  onChange={handleSortChange}
                  className="border bg-white border-gray-500 rounded p-1"
                >
                  <option value="Oldest">Oldest</option>
                  <option value="Newest">Newest</option>
                </select>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="flex-shrink-0 mr-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User avatar"
                  className="rounded-full"
                />
              </div>
              <div className="flex-grow">
                <textarea
                  className="w-full bg-white border border-gray-500 rounded p-2"
                  placeholder="Add a comment..."
                  value={commentText}
                  onChange={handleCommentChange}
                />
              </div>
            </div>
            <button
              className="bg-blue-500 text-white p-2 rounded"
              onClick={handleCommentSubmit}
            >
              Submit
            </button>
            <div className="mt-4">
              {comments.map((comment) => (
                <div key={comment.id} className="border-t pt-2 mt-2">
                  <div className="flex items-center mb-2">
                    <img
                      src="https://via.placeholder.com/30"
                      alt="User avatar"
                      className="rounded-full mr-2"
                    />
                    <span>User</span>
                  </div>
                  <p>{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
          <img className="w-full h-200px" src="https://i.ibb.co/99Bfx2B/Walton1465127503.webp" alt="" />
        </div>

        <div className="rounded-lg order-3 lg:order-3 md:order-3 bg-white">
          <img className="w-full h-200px" src="https://i.ibb.co/99Bfx2B/Walton1465127503.webp" alt="" />
          <div className="p-4 mt-3">
            <div className="flex mb-4">
              <button
                className={`mr-2 p-2 transition duration-500 ease-in-out transform ${activeSection === 'latest' ? 'bg-blue-500 text-white scale-105' : 'bg-gray-300'}`}
                onClick={() => handleToggle('latest')}
              >
                সর্বশেষ
              </button>
              <button
                className={`p-2 transition duration-500 ease-in-out transform ${activeSection === 'popular' ? 'bg-blue-500 text-white scale-105' : 'bg-gray-300'}`}
                onClick={() => handleToggle('popular')}
              >
                জনপ্রিয়
              </button>
            </div>
            <div className="h-64 overflow-y-scroll" onScroll={handleScroll}>
              <ul className="space-y-2">
                {itemsToShow.slice(0, visibleCount).map(item => (
                  <Link key={item.id} to={`/newsDetails/${item._id}`}>
                    <li key={item.id} className="flex hover:bg-gray-100 items-center justify-start gap-2 space-x-2">
                      <img className="h-14 w-16" src={item.photo} alt="" />
                      <a className="hover:text-blue-800 hover:font-extralight">{item.title}</a>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <img className="w-full h-200px" src="https://i.ibb.co/YW2Gqsx/images-2.jpg" alt="" />
          <img
                className="w-full h-32 md:h-48 object-cover mt-4"
                src="https://i.ibb.co/M82yNzT/Daraz-11-11-Featured.webp"
                alt=""
              />
              <img
                className="w-full h-32 md:h-48 object-cover mt-4"
                src="https://i.ibb.co/bmHXv48/Bkash-1-2209281207.jpg"
                alt=""
              />
               <img className="w-full h-200px mt-4" src="https://i.ibb.co/9cFD4ng/8aed5-x2015-04-11-27-3-b.jpg" alt="" />
               <img className="w-full h-200px mt-4" src="https://i.ibb.co/4YNYD2v/3da8b9197750446af5e6ef6767336d30.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
