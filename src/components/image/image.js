import PropTypes from 'prop-types';

function Image(props) {
    return (
        <img src={props.image} alt={props.name}/>
    )
}

Image.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Image;