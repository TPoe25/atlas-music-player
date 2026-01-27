import PlayListItem from './PlaylistItem';

export default function Playlist() {
    return (
        <div className="bg-niners-gold/30 space-y-2">
            <PlayListItem selected />
            <PlayListItem />
            <PlayListItem />
            <PlayListItem />
            <PlayListItem />
            <PlayListItem />
            <PlayListItem />
            <PlayListItem />
        </div>
    );
}
