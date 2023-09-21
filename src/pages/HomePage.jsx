import React from "react";
import Card from '../components/Card'

// IMAGE LIST IN JSON FORMAT
const galleryList = [
  {
    id: 'mountain',
    title: 'mountain',
    img: '/image/img10.jpg'
  },
  {
    id: 'mountain',
    title: 'mountain',
    img: '/image/img1.jpg'
  },
  {
    id: 'canvas',
    title: 'canvas',
    img: '/image/img2.jpg'
  },
  {
    id: 'canvas',
    title: 'canvas',
    img: '/image/img3.jpg'
  },
  {
    id: 'landscape',
    title: 'landscape',
    img: '/image/img4.jpg'
    
  },
  {
    id: 'landscape',
    title: 'landscape',
    img: '/image/img5.jpg'
  },
  {
    id: 'mountain',
    title: 'mountain',
    img: '/image/img6.jpg'
  },
  {
    id: 'mountain',
    title: 'mountain',
    img: '/image/img7.jpg'
  },
  {
    id: 'mountain',
    title: 'mountain',
    img: '/image/img8.jpg'
  },
  {
    id: 'mountain',
    title: 'mountain',
    img: '/image/img9.jpg'
    
  },
  {
    id: 'flower',
    title: 'flower',
    img: '/image/img11.jfif'
    
  },
  // Add more images here as needed
];

const HomePage = ({search}) => {
  // STYLE FOR THE PREVIEW IMAGE ONDRAG
  const [images, setImages] = React.useState(galleryList);
  const moveImage = React.useCallback((dragIndex, hoverIndex) => {
    setImages((prevCards) => {
      const clonedCards = [...prevCards];
      const removedItem = clonedCards.splice(dragIndex, 1)[0];
      clonedCards.splice(hoverIndex, 0, removedItem);
      return clonedCards;
    });
  }, []);

  return (
    <main className="m_container">
      <div className="tag">
        <h5 className=" d-inline-block text-left myf">Tags: </h5>
        <h5 className=" d-inline-block mx-2 myborder p-1 rounded-2 myf">Mountain </h5>
        <h5 className=" d-inline-block mx-2 myborder p-1 rounded-2 myf">Canvas </h5>
        <h5 className=" d-inline-block mx-2 myborder p-1 rounded-2 myf">Landscape </h5>
        <h5 className=" d-inline-block mx-2 myborder p-1 rounded-2 myf">Flower </h5>
      </div>
      {React.Children.toArray(
        // MAPPING THROUGH THE IMAGES
        images.map((image, index) => (
            <Card
              className='my_card'
              src={image.img}
              title={image.title}
              id={image.id}
              index={index}
              moveImage={moveImage}
              search={search}
            />
            ))
            )}
    </main>
  );
};

export default HomePage;
