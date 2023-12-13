import { useState } from "react";
import { AddCategory, GifsGrid } from './components';


export const GifApp = (): JSX.Element => {

    const initialGifsCategoriesValue: string[] = ["One Punch Man"];
    const [gifsCategories, setGifsCategories] = useState(initialGifsCategoriesValue);

    const component: JSX.Element =
        <>
            {/* Title */}
            <h1> Gif App :D</h1>

            {/* Form */}
            <AddCategory gifsCategories={gifsCategories} setGifsCategories={setGifsCategories} />

            {/* Gifs Grid */}
            {
                gifsCategories.map((category) =>
                    <GifsGrid key={category} category={category} />
                )
            }

        </>;

    return component;
};