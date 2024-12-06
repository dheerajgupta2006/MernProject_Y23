import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
    // Example data for seed descriptions
    const seedDescription = {
        name: "Sunflower Seeds",
        idealSoil: "Loamy soil with good drainage.",
        idealWeather: "Warm weather, full sun.",
        additionalInfo: [
            "Plant depth: 1-2 inches",
            "Spacing: 12-18 inches apart",
            "Watering: Regular, but avoid waterlogging"
        ]
    };

    return (
        <div className='description-box'>
            <div className="description-box-navigator">
                <div className="description-box-nav-box active">Description</div>
                <div className="description-box-nav-box-fade">Reviews</div>
            </div>
            <div className="description-box-description">
                <h2>{seedDescription.name}</h2>
                <h3>Ideal Soil:</h3>
                <p>{seedDescription.idealSoil}</p>
                <h3>Ideal Weather:</h3>
                <p>{seedDescription.idealWeather}</p>
                <h3>Additional Info:</h3>
                <ul>
                    {seedDescription.additionalInfo.map((info, index) => (
                        <li key={index}>{info}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DescriptionBox;
