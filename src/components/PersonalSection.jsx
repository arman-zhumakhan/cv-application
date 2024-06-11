import PropTypes from 'prop-types';

function PersonalSection({data, handleData}) {
  return (
    <section>
      <h2 className="heading">Personal Data</h2>
      <div className="forms">
        <input type="text" id="name" placeholder="Full Name" value={data.name} onChange={handleData}/>
        <input type="email" id="email" placeholder="Email" value={data.email} onChange={handleData}/>
        <input type="text" id="linkedin" placeholder="LinkedIn" value={data.linkedin} onChange={handleData}/>
      </div>
    </section>
  );
}

PersonalSection.propTypes = {
  data: PropTypes.object,
  handleData: PropTypes.func,
};

export default PersonalSection;