import TextImageCard from "./TextImageCard";


const TextImageCardList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-2xl font-bold mb-8">Latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <TextImageCard
          image="https://i.ibb.co/WxrXhHY/hasina2.jpg"
          title="জেলা পরিষদ নির্বাচনে সদস্য প্রার্থী হচ্ছেন – সোহেল রানা (হোটবার)"
        />
        <TextImageCard
          image="https://i.ibb.co/WxrXhHY/hasina2.jpg"
          title="হাতের রিং সিডিকেটে ক্ষোভ চিকিৎসকদের"
        />
        <TextImageCard
          image="https://i.ibb.co/WxrXhHY/hasina2.jpg"
          title="কালীগঞ্জে বিক্রি হচ্ছিল মরা গরুর মাংস, ম্যাজিস্ট্রেট দেখে পালালো বিক্রেতা"
        />
      </div>
    </div>
  );
};

export default TextImageCardList;
