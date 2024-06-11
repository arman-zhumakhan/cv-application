import PropTypes from 'prop-types';

function ResumePreview({ data, reference }) {
    return (
        <div className="resume" ref={reference}>
            <div className="header">
            <h1>{data.name}</h1>
            <p>{data.email}</p>
            <p>{data.linkedin}</p>
            </div>
            <div className="education">
            <h2>Education</h2>
            {data.education.map((item, index) => (
                <div key={index}>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <p>{item.graduation}</p>
                </div>
            ))}
            </div>
            <div className="experience">
            <h2>Experience</h2>
            {data.experience.map((item, index) => (
                <div key={index}>
                <h3>{item.company}</h3>
                <p>{item.position}</p>
                <p>{item.startDate} - {item.endDate}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

ResumePreview.propTypes = {
    data: PropTypes.object,
    reference: PropTypes.object,
};

export default ResumePreview;