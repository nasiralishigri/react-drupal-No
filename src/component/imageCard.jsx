// eslint-disable-next-line react/prop-types
export default function ImageCard({ title, body, tag, img, author, time  }) {
  return (

    <div className="card bg-white flex flex-col lg:flex-row mx-10 md:mx-20 rounded-lg lg:mx-52 mt-10 mb-10">
      <img className="lg:rounded-l-md md:rounded-t-md sm:rounded-t-md w-[30%] "
        src={img}
        alt={title}
      />
      <div className="card-details m-4">
        <div className="top flex flex-row justify-between mx-4 font-semibold text-gray-500">
          <div className="tag">#{[tag]}</div>
          <div className="date">{time}</div>
        </div>
        <div className="middle mx-2">
          <h2 className="title text-2xl font-bold capitalize">{title}</h2>
          <div className="excerpt"> {body}
            this is some default dummy text which add by default every time.
            this is some default dummy text which add by default every time.
            this is some default dummy text which add by default every time.
          </div>
        </div>
        <div className="bottom text-sky-600">
          <div className="author flex m-3">
            <img height={40} width={40} className="rounded-full shadow-lg border border-sky-500 p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToK_-LT9HmxfBNTsC0A8wfvjtfxKh3GjexbQ&s" alt="" />
            <p className="name m-2">{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
