import PropTypes from 'prop-types';


const StudentInfo = ({nama, age}) => {

    return(
    <>
    <h2>{nama}</h2>
    <h2>{age}</h2>
    </>
    );
}


StudentInfo.propTypes = {
    nama: PropTypes.string,
    age: PropTypes.number
}

export default StudentInfo;