import React, { useEffect } from 'react';
import Link from 'next/link';

interface Props {
  shuffletextEL: string;
  link: string;
  randomText : string[];
  
}

const ShuffleText: React.FC<Props> = ({ shuffletextEL, link }) => {
  const velocity: number = 50;

  const shuffleTextFu = (element: HTMLElement, originalText: string): void => {
    const elementTextArray: string[] = Array.from(originalText);
    let randomText: string[] = []; // Initialize randomText here

 
    const repeatShuffle = (times: number, index: number): void => {
      if (index === times) {
        element.textContent = originalText;
        return;
      }
  
      setTimeout(() => {
        randomText = shuffle(elementTextArray);
        for (let i = 0; i < index; i++) {
          randomText[i] = originalText[i];
       
        }
        if (randomText.length > 0) {
          element.textContent = randomText.join('');
        }
       
        index++;
        repeatShuffle(times, index);
      }, velocity);
    };
  
    repeatShuffle(element.textContent!.length, 0);
  };

  useEffect(() => {
    const handleMouseEnter = (event: MouseEvent): void => {
      const element = event.target as HTMLElement;
      shuffleTextFu(element, element.dataset.text!);
    };

    const shuffleElements = document.querySelectorAll<HTMLElement>('.shuffle');

    shuffleElements.forEach((element) => {
      element.dataset.text = element.textContent!;
      shuffleTextFu(element, element.dataset.text!);
      element.addEventListener('mouseenter', handleMouseEnter);
    });

    return () => {
      shuffleElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
      });
    };
  }, []);

  const shuffle = (o: string[]): string[] => {
    for (let i = o.length; i; i--) {
      const j = Math.floor(Math.random() * i);
      [o[i - 1], o[j]] = [o[j], o[i - 1]];
    }
    return o;
  };

  return (
    <Link href={link} replace>
      <span className='shuffle'>{shuffletextEL}</span>
    </Link>
  );
};

export default ShuffleText;
/*
randomText = randomText.join('');
element.textContent = randomText;
*/