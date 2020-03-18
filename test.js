// class ui rendering
class UI{
    ​
        static displaySongs(){
            
            //object data
    const StoredSongs =[
        {
    title:'Eagles',
    artist:'Pompi',
    album:'Bwana'
    },
    ​
    {
        title:'Peanut Butter',
        artist:'Pompi',
        album:'Become'
    }];
    const songs = StoredSongs;
    ​
    ​
    songs.forEach((song)=>UI.addSongToList(song))
        }
    ​
    ​
    static addSongToList(song){
        const list = document.querySelector('#song-list');
        const row = document.createElement('tr');
        row.innerHTML=`
        <td> ${song.title}</td>
        <td> ${song.artist}</td>
        <td> ${song.album}</td>
        <td><a href ="#" class ="btn btn-danger btn-sm delete">x</a></td>
        `;
        list.appendChild(row);
    }
    ​
    }//class ui ends here
    ​
    //Event:Display a Song
    document.addEventListener('DOMContentLoaded',UI.displaySongs);
    ​