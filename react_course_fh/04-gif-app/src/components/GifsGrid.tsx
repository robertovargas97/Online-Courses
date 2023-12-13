import { GridItem } from "./GridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


interface GifsGridProps {
    category: string
}

export const GifsGrid: React.FC<GifsGridProps> = ({ category }): JSX.Element => {


    const { gifs, isLoading } = useFetchGifs(category);

    const gridComponent =
        <>
            <h3>
                {category}
            </h3>
            {
                isLoading && (<h2 data-testid="loading"> Loading...</h2>)
            }


            <div className="card-grid">
                {
                    gifs.map(
                        (gif) => (
                            <GridItem key={gif.id} {...gif} />
                        )
                    )
                }
            </div>
        </>;
    return gridComponent;
}


