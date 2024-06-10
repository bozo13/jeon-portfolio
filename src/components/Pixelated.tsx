'use client'
import styles from './Styles/pixelated.module.scss';
import { useRef, useState, useEffect } from 'react';
import NextImage from 'next/image';
import { useInView } from 'react-intersection-observer';

interface Dimension {
    width: number;
    height: number;
}

export default function Pixelated({ src, src10 }: { src: string; src10: string }): JSX.Element {
    const [dimension, setDimension] = useState<Dimension>({ width: 0, height: 0 });
    const canvas = useRef<HTMLCanvasElement>(null);

    const { ref, inView } = useInView({
        threshold: 0.75,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView && dimension.width > 0) {
            const image = new Image();
            image.onload = () => {
                setTimeout(() => {
                    animate(image, dimension.width, dimension.height);
                }, 150);
            };
            image.src = src;
        }
    }, [inView, dimension, src]);
    
    const animate = (image: HTMLImageElement, width: number, height: number, size = 20) => {
        drawImage(image);
        if (size < 5) return;

        const w = width;
        const h = height;
        const ctx = canvas.current?.getContext("2d", { willReadFrequently: true });
        if (ctx) {
            const pixelArr = ctx.getImageData(0, 0, w, h).data;
            for (let y = 0; y < h; y += size) {
                for (let x = 0; x < w; x += size) {
                    let pos = (x + y * w) * 4;
                    ctx.fillStyle = `rgba(${pixelArr[pos]}, ${pixelArr[pos + 1]}, ${pixelArr[pos + 2]}, ${pixelArr[pos + 3]})`;
                    ctx.fillRect(x, y, size, size);
                }
            }
        }

        setTimeout(() => {
            animate(image, width, height, size / 2);
        }, 150);
    };

    const drawImage = (image: HTMLImageElement) => {
        const ctx = canvas.current?.getContext("2d", { willReadFrequently: true });
        if (ctx) {
            ctx.drawImage(image, 0, 0, dimension.width, dimension.height);
        }
    };



    return (
        <div className={styles.ImageContainer}>
            <NextImage
                ref={ref}
                src={src10}
                width={0}
                height={0}
                onLoadingComplete={(e) => {
                    setDimension({ width: e.width, height: e.height });
                }}
                priority={true}
                alt="image"
            />
            <canvas ref={canvas} width={dimension.width} height={dimension.height}></canvas>
        </div>
    );
}
