import React from 'react'

interface GridItemProps {
    title: string,
    url: string
}

export const GridItem: React.FC<GridItemProps> = ({ title, url }): JSX.Element => {

    const gridItemComponent =
        <div className='card'>
            <img data-testid="gif" src={url} alt={title} />
            <p data-testid="image-title">{title}</p>
        </div>;
    return gridItemComponent;
}
