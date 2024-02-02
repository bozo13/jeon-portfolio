'use client';
import Link from 'next/link';
import { useEffect } from 'react';

const Index = ({shuffletext, link}) => {
 const velocity = 50;

  const shuffleText = (element, originalText) => {
    const elementTextArray = Array.from(originalText);
    let randomText = [];

    const repeatShuffle = (times, index) => {
      if (index === times) {
        element.textContent = originalText;
        return;
      }

      setTimeout(() => {
        randomText = shuffle(elementTextArray);
        for (let i = 0; i < index; i++) {
          randomText[i] = originalText[i];
        }
        randomText = randomText.join('');
        element.textContent = randomText;
        index++;
        repeatShuffle(times, index);
      }, velocity);
    };

    repeatShuffle(element.textContent.length, 0);
  };

  useEffect(() => {
    
    const handleMouseEnter = (event) => {
      const element = event.target;
      shuffleText(element, element.dataset.text);
    };

    const shuffleElements = document.querySelectorAll('.shuffle');

    shuffleElements.forEach((element) => {
      element.dataset.text = element.textContent;
      shuffleText(element, element.dataset.text);
      element.addEventListener('mouseenter', handleMouseEnter);
    });

    return () => {
      shuffleElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
      });
    };
  }, []);

  const shuffle = (o) => {
    for (let i = o.length; i; i--) {
      const j = Math.floor(Math.random() * i);
      [o[i - 1], o[j]] = [o[j], o[i - 1]];
    }
    return o;
  };
  return (

    <Link href={link} replace>
      <span className='shuffle'>
        {shuffletext}
      </span>
    </Link>
  );
};

export default Index;






