function Story({stroryImage}) {
  return (
    
      <img
        src= {stroryImage.image}
        className="story__item"
        alt="story"
      ></img>
    
  );
}

export default Story;
