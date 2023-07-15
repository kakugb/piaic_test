function make_album(artist:string, title:string, tracks:number) {
    let album = {
      artist: artist,
      title: title,
      tracks:tracks
    };
    
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
    
    return album;
  }
  
  
  let album1 = make_album('Artist 1', 'Album 1',10);
  let album2 = make_album('Artist 2', 'Album 2', 12);
  let album3 = make_album('Artist 3', 'Album 3', 8);
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
  