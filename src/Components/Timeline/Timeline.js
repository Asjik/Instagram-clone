import "./Timeline.css";
import Suggestions from "../Suggestions/Suggestions";
import Posts from "../Posts/Posts";
import { useCharacter } from "../../hooks/useCharacter";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading } from "../Loading/Loading";

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
          <img
            src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"
            className="story__item"
            alt="story"
          ></img>
          <img
            src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"
            className="story__item"
            alt="story"
          ></img>
          <img
            src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"
            className="story__item"
            alt="story"
          ></img>
          <img
            src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"
            className="story__item"
            alt="story"
          ></img>
          <img
            src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"
            className="story__item"
            alt="story"
          ></img>
          <img
            src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"
            className="story__item"
            alt="story"
          ></img>
          <img
            src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"
            className="story__item"
            alt="story"
          ></img>
          <img
            src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"
            className="story__item"
            alt="story"
          ></img>
        </div>
        <div className="timeline_posts">
          {characters.results.map((post) => (
            <Posts
              user={post.name}
              postImage={post.image}
              likes={"100"}
              timeStamp={"25min"}
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
