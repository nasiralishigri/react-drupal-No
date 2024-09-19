// eslint-disable-next-line react/prop-types
export default function ImageCard({ title, body, tag }) {
  return (

    <div className="card bg-white flex flex-col lg:flex-row mx-10 md:mx-20 rounded-lg lg:mx-52 mt-10 mb-10">
      <img className="lg:rounded-l-md md:rounded-t-md sm:rounded-t-md "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCJN1zIzvPDS3mCaNkkdimR9I9TWcWBoP1Q&s"
        alt=""
      />
      <div className="card-details">
        <div className="top flex flex-row justify-between mx-4 font-semibold text-gray-500">
          <div className="tag">#{[tag]}</div>
          <div className="date">28 April 2022</div>
        </div>
        <div className="middle mx-2">
          <h2 className="title text-2xl font-bold">{title}</h2>
          <div className="excerpt"> {body}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            numquam iure dignissimos facere necessitatibus commodi vero
            aut! Provident consequatur adipisci animi quam veritatis
            laboriosam eius nam, quos expedita nobis! Cupiditate.
          </div>
        </div>
        <div className="bottom text-sky-600">
          <div className="auther flex m-3">
            <img height={40} width={40} className="rounded-full shadow-lg border border-sky-500 p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToK_-LT9HmxfBNTsC0A8wfvjtfxKh3GjexbQ&s" alt="" />
            <p className="name m-2">Ali jan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
