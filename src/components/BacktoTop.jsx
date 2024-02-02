import React from "react"

const BackToTopButton = () => {
  const backToTop = () => window.scrollTo({ top: 0 })

  return <button onClick={backToTop}>Back to top</button>
}

export default BackToTopButton
