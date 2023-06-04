import "./Timeline.css";
import Suggestions from "../Suggestions/Suggestions";
import Posts from "../Posts/Posts";
import { useCharacter } from "../../hooks/useCharacter";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading } from "../Loading/Loading";
import Story from "./Story";

function Timeline() {
  //// Infinite Posts
  const { characters, error, fetchNextPage, hasNextPage, isError, isLoading } =
    useCharacter();

  function getStoryCharacters() {
    console.log("storyCharacter", characters.results.slice(0, 8));
    return characters.results.slice(0, 8);
  }

  if (isError) return <h4>Ups!, {`${error}`}</h4>;
  if (isLoading) return <Loading />;

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__story">
          {getStoryCharacters().map((image, index) => (
            <Story storyImage={image} key={index} />
          ))}
        </div>
        <InfiniteScroll
          dataLength={characters ? characters.results.length : 0}
          next={() => fetchNextPage(characters)}
          hasMore={!!hasNextPage}
          loader={<Loading />}
        >
          <div className="timeline_posts">
            {characters.results.map((post, index) => (
              <Posts
                user={post.name}
                postImage={post.image}
                likes={"100"}
                timeStamp={"25min"}
                key={index}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>

      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
