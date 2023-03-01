import PropTypes from 'prop-types'

function SaveCancel({ props }) {
  const { onSave, onCancel } = props

  return (
    <>
      <button className="btn btn-sm btn-success border border-white me-2" type="button" onClick={onSave}>
        <i className="bi bi-check-lg me-2" />
        Save
      </button>
      <button className="btn btn-sm btn-secondary border border-white text-white me-2" type="button" onClick={onCancel}>
        <i className="bi bi-arrow-counterclockwise me-2" />
        Cancel
      </button>
    </>
  )
}

SaveCancel.propTypes = {
  props: PropTypes.shape({
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  }),
}
export default SaveCancel
