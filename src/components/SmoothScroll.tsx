"use client";

import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SmoothScroll = () => {
	const pathname = usePathname();

	useEffect(() => {
		if (pathname.includes("admin")) return;
		if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

		const lenis = new Lenis({
			// smoothTouch: true,
			// touchMultiplier: 2,
			// touchInertiaMultiplier: 1,
			//smoothTouch: false,
		});

		const raf = (time: DOMHighResTimeStamp) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);

		return () => {
			lenis.stop();
		};
	}, [pathname]);

	return null;
};
export default SmoothScroll;