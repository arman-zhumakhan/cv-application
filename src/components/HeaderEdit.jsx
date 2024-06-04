function HeaderEdit({loadSampleCV, handlePrint}) {
    return (
        <div>
            <h3>CV Application</h3>
            <button onClick={loadSampleCV}>Load Sample CV</button>
            <button onClick={handlePrint}>Print</button>
        </div>
    );
}

export default HeaderEdit;