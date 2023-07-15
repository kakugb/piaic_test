function show_magics(magicians:string[]) {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  function make_greats(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "the Great " + magicians[i];
    }
  }
  
  let magicianNam = ["Karamat Ali", "Zulqarnain Hakeem", "Mubarak Ali", "Kashaf"];
  
  make_greats(magicianNam);
  show_magics(magicianNam);