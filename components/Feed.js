import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";

function Feed({ posts }) {
  return (
    <div
      className="flex-grow h-screen pb-44 pt-6 mr-4 h-screen
    xl:mr-40 overflow-y-auto scrollbar-hide"
    >
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl"></div>
      {/* Stories */}
      <Stories />
      {/* InputBox */}
      <InputBox />
      {/* Posts */}
      <Posts posts={posts} />
    </div>
  );
}

export default Feed;
