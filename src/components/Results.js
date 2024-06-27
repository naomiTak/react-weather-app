//Results.js
const Results = ({results})=> {
    const {country, cityName, temperature, conditionText, icon} = results;
    return(
        <>
            {country && <div>{country}</div>}
            {cityName && <div>{cityName}</div>}
            {temperature && <div>{temperature}<span>°C</span></div>}
            {conditionText && <div><img src={icon} alt = "icon"/>
            <span>{conditionText}</span></div>}
        </>
    );
};

export default Results;