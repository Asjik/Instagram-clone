import "./Timeline.css";
import Suggestions from "../Suggestions/Suggestions";
import Posts from "../Posts/Posts";
import { useCharacter } from "../../hooks/useCharacter";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading } from "../Loading/Loading";
import Story from "./Story";

function Timeline() {
  //// Infinite Posts
  const { characters, error, fetchNextPage, hasNextPage, status } =
    useCharacter();
  if (status === "loading") return <Loading />;

  if (status === "error") return <h4>Ups!, {`${error}`}</h4>;

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__story">
          {characters.results.slice(0, 8).map((post, index) => (
            <Story stroryImage={post} key={index} />
          ))}
        </div>
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
        <InfiniteScroll
          dataLength={characters ? characters.results.length : 0}
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={<Loading />}
        ></InfiniteScroll>
      </div>

      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
