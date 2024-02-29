

import { circIn } from "framer-motion"

export const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i) => ({
        y: "0%",
        transition: {duration: 0.5, delay: 0.01 * i}
    }),
    closed: {
        y: "100%",
        transition: {duration: 0.5}
    }
}

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 0.5}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.5}
    }
}


export const menuSlide = {
    initial: {x: "calc(100% + 100px)"},
    enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
    exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}

export const slide = {
    initial: {x: 80},
    enter: i => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
    exit: i => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
}

export const scale = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
}


export const slideUpLanding = {
    initial: {
        y: 400
    },
    enter: {
        y: 0,
        transition: {duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0}
    }
}


export const slideUpAbout = {
    hidden: { opacity: 0, y:20 },
    show: { opacity: 1, y:0  }
}

export const staggerCildren= {
    hidden: { opacity: 0  },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: circIn
      }
     
}
}


export const slideUpText = {
  initial: {
      y: "100%"
  },
  open: (i) => ({
      y: "0%",
      transition: {duration: 0.5, delay: 0.05 * i}
  }),
  closed: {
      y: "100%",
      transition: {duration: 0.5}
  }
}

export const opacityAbout = {
  initial: {
      opacity: 0
  },
  open: {
      opacity: 1,
      transition: {duration: 0.7, delay:0.5}
  },
  closed: {
      opacity: 0,
      transition: {duration: 0.7, delay:0.5}
  }
}