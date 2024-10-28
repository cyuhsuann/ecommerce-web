'use client'
import { atom, useAtom } from 'jotai'
import { Button } from '~/components/ui/button'

const animeAtom = atom([
    {
        title: 'Ghost in the Shell',
        year: 1995,
        watched: true
    },
    {
        title: 'Serial Experiments Lain',
        year: 1998,
        watched: false
    }
]);

function AnimeApp() {
    const [anime, setAnime] = useAtom(animeAtom)
    const addAnime = () => setAnime((anime: any) => [
        ...anime,
        {
            title: 'Cowboy Bebop',
            year: 1998,
            watched: false
        }
    ])


    return (
        <>
            <ul>
                {anime.map((item: any) => (
                    <li key={item.title}>{item.title}</li>
                ))}
            </ul>
            <Button onClick={addAnime}>
                Add Cowboy Bebop
            </Button>
        </>
    )
}

export default function Page() {
    function click(): void {
        console.log("hahaah")
    }

    return (
        <div>
            {/* <Button onClick={click}>HAHAHA</Button> */}
            <AnimeApp />
        </div>
    )
}
