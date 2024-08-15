import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaLink,
  FaPrint,
} from "react-icons/fa";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from 'react-share';
import { Link, useLoaderData } from "react-router-dom";
import UseNews from "../../AxiosFetch/UseNews";
import { Helmet, HelmetProvider } from 'react-helmet-async';

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

 // Split the description into words
 const words = datas.description.split(' ');

 // Define the points to split the description
 const splitIndex1 = 200;
 const splitIndex2 = 400;

 // Create the first, second, and third parts of the description
 const firstPart = words.slice(0, splitIndex1).join(' ');
 const secondPart = words.slice(splitIndex1, splitIndex2).join(' ');
 const thirdPart = words.slice(splitIndex2).join(' ');

 const shareUrl = window.location.href;
 const handlePrint = () => {
  window.print();
};

  return (
    
      <div className="container pt-36 mx-auto text-black p-4 bg-white">



<Helmet>
        <title>{datas.title}</title>
        <meta name="description" content={datas.description} />

        {/* Open Graph Meta Tags */}
        <meta property="og:url" content={`https://nil-akash-newspaper.netlify.app/newsDetails/${datas._id}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="sagfdsgg" />
        <meta property="og:description" content="gdsgadsagga" />
        <meta property="og:image" content={datas.photo} />
        <meta property="og:image:secure_url" content={datas.photo} />
        <meta property="og:image:alt" content="khgkasdhgk" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>


      <div>
        <h1>{datas.title}</h1>
        <p>{datas.description}</p>
        <img src={datas.photo} alt={datas.title} />
      </div>

        
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-5 lg:gap-5 bg-white">
          <div className="rounded-lg order-2 lg:order-1 md:order-1 bg-white">
            <div className="mb-4 text-sm bg-white">
              <a href="#" className="text-blue-500 hover:underline">{datas.category}</a> /
              <a href="#" className="text-blue-500 hover:underline"> পত্রিকা </a>
              <div className="text-black mt-1">
                <h1>প্রতিবেদক : {datas.reporter}</h1>
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
            <img className="w-full h-[150px]" src="https://i.ibb.co/f9SmLH4/8bb4a054-a1a6-4283-af32-ad0ff75f149f.jpg" alt="" />
          </div>

          <div className="rounded-lg order-1 lg:order-2 md:order-2 lg:col-span-3 bg-white">
          <img className="w-full h-36 mb-4" src="https://i.ibb.co/LRyY1ht/b9880a9b-001f-4308-95d1-56609da8577e.jpg" alt="" />
          <header className="mb-4 items-center md:col-span-2 lg:col-span-2 bg-white">
      <h1 className="text-2xl mb-4 font-bold">{datas.title}</h1>
      <div className="flex space-x-2">
        <FacebookShareButton url={shareUrl} className="px-3 py-1 rounded-full flex items-center">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <FacebookMessengerShareButton url={shareUrl} className="px-3 py-1 rounded-full flex items-center">
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
        <TwitterShareButton url={shareUrl} className="px-3 py-1 rounded-full flex items-center">
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} className="px-3 py-1 rounded-full flex items-center">
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={shareUrl} className="px-3 py-1 rounded-full flex items-center">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <EmailShareButton url={shareUrl} className="px-3 py-1 rounded-full flex items-center">
          <EmailIcon size={32} round />
        </EmailShareButton>
        <button className="px-3 py-1 bg-gray-700 text-white rounded-full flex items-center">
          <FaLink />
        </button>
        <button onClick={handlePrint} className="px-3 py-1 bg-gray-500 text-white rounded-full flex items-center">
          <FaPrint />
        </button>
      </div>
    </header>
            <img src={datas.photo} alt="Article" className="w-full h-auto mb-4 bg-white" />

            <p className="text-justify mb-4 bg-white" dangerouslySetInnerHTML={{ __html: firstPart }}></p>
      
      {/* Insert the first image */}
      <img className="w-full h-56 mb-4" src="https://i.ibb.co/jJVB81x/02244e8e-1be5-4d7c-9566-25f238a8c6b8.jpg" alt="" />
      
      {/* Render the second part of the description */}
      <p className="text-justify mb-4 bg-white" dangerouslySetInnerHTML={{ __html: secondPart }}></p>
      
      {/* Insert the second image */}
      <img className="w-full h-56 mb-4" src="https://i.ibb.co/YQ3PTXs/91047daf-4df5-45df-ada5-4b6a65c7aa29.jpg" alt="" />
      
      {/* Render the third part of the description */}
      <p className="text-justify mb-4 bg-white" dangerouslySetInnerHTML={{ __html: thirdPart }}></p>

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
            <img className="w-full h-[300px]" src="https://i.ibb.co/ThqC7t5/33d582ad-0750-464f-b4dd-47d5b7558717.jpg" alt="" />
          </div>

          <div className="rounded-lg order-3 lg:order-3 md:order-3 bg-white">
            <img className="w-full h-[300px]" src="https://i.ibb.co/4Vt7yvt/82f949d1-225f-434d-9cbb-d0dd9a7ff41c.jpg" alt="" />
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
            <img className="w-full h-[100px]" src="https://i.ibb.co/VpZzSpY/5c96d337-1bf3-454d-9a3d-7d5ca9028fac.jpg" alt="" />
            <img className="w-full mt-20 h-[100px]" src="https://i.ibb.co/d20bkbt/96f7937e-e3af-42d6-893f-2c0ed2872f97.jpg" alt="" />
          </div>
        </div>
      </div>
  );
};

export default PageDetails;
