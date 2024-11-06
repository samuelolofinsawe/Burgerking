import React from 'react';

const MenuSectionCard = ({ sectionName, items }) => {
    return (
        <div className="section-container">
            <h2 className="section-title">{sectionName}</h2>
            <div className="items-container">
                {items.map((item) => (
                    <div key={item.name} className="menu-card">
                        <img src={item.image} alt={item.name} className="card-image" />
                        <h3 className="item-name">{item.name}</h3>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuSectionCard;
