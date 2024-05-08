import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mapRange } from '@/lib/maths';

interface ParallaxProps {
  className?: string;
  children?: React.ReactNode;
  speed?: number;
  id?: string;
  position?: 'top' | 'bottom';
}

export function Parallax({
  className,
  children,
  speed = 1,
  id = 'parallax',
  position,
}: ParallaxProps): JSX.Element {
  const trigger = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);

  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const y = windowWidth * speed * 0.1;

    const setY = gsap.quickSetter(target.current, 'y', 'px');
    const set3D = gsap.quickSetter(target.current, 'force3D');

    const timeline = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current,
        scrub: true,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (e:ScrollTrigger ) => {
          if (position === 'top') {
            setY(e.progress * y);
          } else {
            setY(-mapRange(0, 1, e.progress, -y, y));
          }

          set3D(e.progress > 0 && e.progress < 1);
        },
      },
    });

    return () => {
      timeline.kill();
    };
  }, [id, speed, position, windowWidth]);

  return (
    <div ref={trigger}>
      <div ref={target} className={className}>
        {children}
      </div>
    </div>
  );
}
