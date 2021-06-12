import StoryCard from "./StoryCard";

const stories = [
  // {
  //   name: "Dwayne Johnson",
  //   src: "https://www.pngfind.com/pngs/m/79-795497_dwayne-johnson-png-transparent-image-dwayne-johnson-transparent.png",
  //   profile:
  //     "https://www.pngfind.com/pngs/m/79-795497_dwayne-johnson-png-transparent-image-dwayne-johnson-transparent.png",
  // },
  {
    name: "Sonny Sangra",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/14v",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/fep",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;