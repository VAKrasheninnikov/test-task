import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width='80%'
    height={160}
    viewBox="100 60 1000 160"
    backgroundColor="#7444DA"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="56" rx="3" ry="3" width="800" height="57" /> 
    <rect x="1" y="124" rx="3" ry="3" width="278" height="20" />
  </ContentLoader>
)

export default MyLoader