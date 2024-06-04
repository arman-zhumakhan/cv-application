function ExperienceSection({data, handleData, addExperience, removeExperience}) {
    return (
        <section>
            <h2 className="heading">Experience</h2>
            {data.experience.map((item, index) => (
                <div key={index} className="forms">
                    <h5>Experience {index + 1}</h5>
                    <input type="text" id="company" placeholder="Company" value={item.company} onChange={handleData}/>
                    <input type="text" id="position" placeholder="Position" value={item.position} onChange={handleData}/>
                    <input type="text" id="startDate" placeholder="Start Date" value={item.startDate} onChange={handleData}/>
                    <input type="text" id="endDate" placeholder="End Date" value={item.endDate} onChange={handleData}/>
                    <button onClick={addExperience}>Add Experience</button>
                    <button onClick={removeExperience}>Remove Experience</button>
                </div>
            ))}
        </section>
    );
}

export default ExperienceSection;