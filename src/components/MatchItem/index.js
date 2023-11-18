import './index.css'

const MatchItem = props => {
  const {imageDetails, clickImage} = props
  const {id, thumbnailUrl} = imageDetails
  const onClickImage = () => {
    clickImage(id)
  }

  return (
    <li className="match-item">
      <button type="button" className="thumbnail-button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default MatchItem
