import { useGetArticleQuery } from "./apiSlice";

import ImageCard from "./component/imageCard";
export default function App() {
  const { data, isLoading, error } = useGetArticleQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="bg-gray-400 py-12">
        <h1 className="text-2xl font-bold p-2 text-center">
          Drupal Articles
        </h1>
        <section className="parent-section">
          {data?.map((data) => {
            return (
              <ImageCard key={data.id} title={data.title} body={data.body} tag={data.tags} />
            );
          })}
        </section>
      </div>
     
    </>
  );
}
