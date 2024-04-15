import React from 'react'
import ContentLoader from "react-content-loader"

const ProjectsSkeleton = () => {
  return (
    <ContentLoader 
    speed={2}
    width={600}
    height={560}
    viewBox="0 0 600 560"
    backgroundColor="#747272"
    foregroundColor="#4d4d4d"
    >
     <rect x="108" y="8"   rx="0" ry="0" width="372"  height="239"/> 
     <rect x="316" y="93"  rx="0" ry="0" width="370"  height="1"  /> 
     <rect x="108" y="291" rx="0" ry="0" width="377"  height="245"/> 
     <rect x="32"  y="79"  rx="0" ry="0" width="370"  height="1"  />  
  </ContentLoader>
  )
}

export default ProjectsSkeleton