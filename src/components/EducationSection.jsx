function EducationSection({data, handleData}){
    return (
        <section>
            <h2 className="heading">Education</h2>
            <div className="forms">
                <input type="text" id="school" placeholder="School" value={data.education[0].school} onChange={handleData}/>
                <input type="text" id="degree" placeholder="Degree" value={data.education[0].degree} onChange={handleData}/>
                <input type="text" id="graduation" placeholder="Graduation" value={data.education[0].graduation} onChange={handleData}/>
            </div>
        </section>
    );
}

export default EducationSection;