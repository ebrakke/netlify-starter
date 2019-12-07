import React from "react"

import { IndexPageTemplate } from "../../templates/index-page"

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        html={data.body}
        title={data.title}
      />
    )
  }
  return <div>Loading...</div>
}

export default IndexPagePreview
