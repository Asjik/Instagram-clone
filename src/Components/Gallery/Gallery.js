import InfiniteScroll from "react-infinite-scroll-component";
import { Loading } from "../Loading/Loading";
import { useCharacter } from "../../hooks/useCharacter";
import { useState } from "react";
import SideNav from "../Navigation/SideNav";
import CloseIcon from "@mui/icons-material/Close";
import "./Gallery.css";

function Gallery() {
  const [model, setModel] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const handlegetImage = (src) => {
    setImgSrc(src);
    setModel(true);
  };
  const { characters, error, fetchNextPage, hasNextPage, status } =
    useCharacter();

  if (status === "loading") return <Loading />;

  if (status === "error") return <h4>Ups!, {`${error}`}</h4>;

  return (
    <div>
      <div className="gallerypage">
        <div className="gallery__nav">
          <SideNav />
        </div>
        <div className="gallery__view">
          <div className={model ? "model open" : "model"}>
            <img src={imgSrc} alt="gallery" />
            <CloseIcon onClick={() => setModel(false)} />
          </div>

          <InfiniteScroll
            dataLength={characters ? characters.results.length : 0}
            next={() => fetchNextPage()}
            hasMore={!!hasNextPage}
            loader={<Loading />}
          >
            <div className="gallery">
              {characters.results.map((item, index) => {
                return (
                  <div
                    className="images"
                    key={index}
                    onClick={() => handlegetImage(item.image)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "100%" }}
                    ></img>
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
