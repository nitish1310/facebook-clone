import Stories from "./Stories";
import InputBox from "./InputBox";

function Feed() {
  return (
    <div
      className="flex-grow h-screen pb-44 pt-6 mr-4 h-screen
    xl:mr-40 overflow-y-auto"
    >
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl"></div>
      {/* Stories */}
      <Stories />
      {/* InputBox */}
      <InputBox />
      {/* Posts */}
    </div>
  );
}

export default Feed;
