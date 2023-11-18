import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  const activeId = isActive ? 'active-button' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${activeId}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
