import React, { useState, useRef } from 'react';
import Stories from 'react-insta-stories';
import { FaChevronRight, FaChevronLeft, FaTimes } from 'react-icons/fa';
import './StoryFicher.css';

const InstagramStoriesWithproduct = ({product}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const storiesRef = useRef(null);

  // داده‌های محصولات و استوری‌های مربوط به هر محصول


  const styles = {
    modal: {
      display: isOpen ? 'flex' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#000000',
      zIndex: 1000,
      justifyContent: 'center',
      alignItems: 'center'
    },
    navigationButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(255,255,255,0.3)',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      zIndex: 1002
    },
    prevButton: {
      right: '20px'
    },
    nextButton: {
      left: '20px'
    },
    closeButton: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: '#fff',
      fontSize: '24px',
      cursor: 'pointer',
      zIndex: 1001
    },
    productInfo: {
      position: 'absolute',
      bottom: '50px',
      right: '0',
      left: '0',
      textAlign: 'center',
      color: '#fff',
      zIndex: 1001,
      padding: '15px',
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    thumbnailsContainer: {
      display: 'flex',
      gap: '15px',
      justifyContent: 'center',
      margin: '20px 0',
      backgroundColor: '#000000',
      flexWrap: 'wrap'
    },
    productThumbnail: {
      width: '100px',
      height: '100px',
      borderRadius: '8px',
      border: '2px solid #e1306c',
      cursor: 'pointer',
      objectFit: 'cover',
      position: 'relative'
      
    },
    productName: {
      position: 'absolute',
      bottom: '0',
      right: '0',
      left: '0',
      background: ' ',
      color: '#fff',
      padding: '5px',
      fontSize: '12px',
      textAlign: 'center',
      borderBottomLeftRadius: '6px',
      borderBottomRightRadius: '6px'
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentProductIndex(index);
    setCurrentStoryIndex(0);
    setIsOpen(true);
  };

  const handlePrevProduct = () => {
    const newIndex = (currentProductIndex - 1 + product.length) % product.length;
    setCurrentProductIndex(newIndex);
    setCurrentStoryIndex(0);
    if (storiesRef.current) {
      storiesRef.current.resetStories();
    }
  };

  const handleNextProduct = () => {
    const newIndex = (currentProductIndex + 1) % product.length;
    setCurrentProductIndex(newIndex);
    setCurrentStoryIndex(0);
    if (storiesRef.current) {
      storiesRef.current.resetStories();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="stories-container" dir="rtl">
      <h2>استوری‌های محصولات</h2>
      
      {/* نمایش thumbnail محصولات */}
      <div style={styles.thumbnailsContainer}>
        {product.map((product, index) => (
          <div key={product.id} style={{ position: 'relative' }}>
            <img
              src={product.img}
              alt={product.name}
              style={styles.productThumbnail}
              onClick={() => handleThumbnailClick(index)}
            />
            <div style={styles.productName}>{product.name}</div>
          </div>
        ))}
      </div>

      {/* مودال استوری‌ها */}
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={handleClose}>
          <FaTimes />
        </button>
        
        {/* دکمه قبلی */}
        <button 
          style={{ ...styles.navigationButton, ...styles.prevButton }}
          onClick={handlePrevProduct}
        >
          <FaChevronRight />
        </button>
        
        {/* دکمه بعدی */}
        <button 
          style={{ ...styles.navigationButton, ...styles.nextButton }}
          onClick={handleNextProduct}
        >
          <FaChevronLeft />
        </button>

        {isOpen && (
          <>
            <Stories
            
              ref={storiesRef}
              stories={product[currentProductIndex].stories}
              currentIndex={currentStoryIndex}
              width="100%"
              height="100%"
              isRTL={true}
              keyboardNavigation
              onAllStoriesEnd={handleClose}
              onStoryEnd={(index) => {
                if (index === product[currentProductIndex].stories.length - 1) {
                  // اتوماتیک به محصول بعدی برود
                  setTimeout(handleNextProduct, 1000);
                }
              }}
              storyContainerStyles={{
                background: '#000000',
                alignItems : "center",
                marginRight : "55px"

                
                
              }}
              progressContainerStyles={{
                flexDirection: 'row-reverse',
                
                padding: '10px',
                gap: '4px'
              }}
              progressWrapperStyles={{
                backgroundColor: 'rgba(255,255,255,0.4)'
              }}
              progressStyles={{
                backgroundColor: '#fff'
              }}
            />
            
            {/* اطلاعات محصول */}
            <div style={styles.productInfo}>
              <h3>{product[currentProductIndex].name}</h3>
              <p>قیمت: {product[currentProductIndex].price}</p>
              <small>
                {currentStoryIndex + 1} / {product[currentProductIndex].stories.length}
              </small>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InstagramStoriesWithproduct;