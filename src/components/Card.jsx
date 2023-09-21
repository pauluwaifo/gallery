import React from "react";
import { useDrag, useDrop, } from "react-dnd";

// CARD COMPONENT
const Card = ({ src, title, id, index, moveImage, search, }) => {

  const ref = React.useRef(null);

    // DRAG AND DROP FUNCTIONALITIES
    const [, drop] = useDrop({
      accept: "image",
      hover: (item, monitor) => {
        if (!ref.current) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;
        if (dragIndex === hoverIndex) {
          return;
        }
        const hoverBoundingRect = ref.current?.getBoundingClientRect();
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
        moveImage(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    });
    const [{ isDragging }, drag] = useDrag({
      type: 'image',
      item: () => {
        return { id, index };
      },
      collect: (monitor) => {
        return {
          isDragging: monitor.isDragging()
        };
      }
    });
  
    const opacity = isDragging ? 0 : 1
    const cursor = isDragging ? 'grabbing' : 'grab'
    drag(drop(ref));
  
    return (
        <>
          {src ?
            // IMAGE AFTER LOAD
            <>
                {title.includes(search) ?
                    <div ref={ref} style={{opacity, cursor}} draggable className= 'card'>
                      <img src={src} alt={title} />
                    </div>
                :   
                !search ?
                  <div ref={ref} style={{opacity, cursor}} draggable className='card'>
                    <img src={src} alt={title} />
                  </div>
                :   null
                }
            </>
          : 
            // LOAD SPINNER
            <div className="card">
              <div className="spinner-border text-dark" role="status">
                <div className="sr-only">
                  Loading...
                </div>
              </div>
            </div>
          }
        </>
    );
};

export default Card;