var isIsomorphic = function (s, t) {

  if (s.length !== t.length) { return false };

  // for (let i = 0; i < s.length; i++) {
  //   // console.log(s[i])
  //   for (let j = i; j < t.length; j++) {
  //     // console.log(t[j])
  //     if (s[i] !== t[j]) {
  //       console.log(s[i], t[j])
  //       return false
  //     }
  //   }
  // }
  // return true;


  const mapa = new Map();
  const mapb = new Map();

  for (let i = 0; i < s.length; i++) {
    if (mapa.has(s[i]) && mapa.get(s[i]) !== t[i]) {
      console.log('s[i]', s[i])
      console.log('t[i]', t[i])
      return false;
    } else {
      mapa.set(s[i], t[i])
      console.log("s[i]", s[i]);
      console.log("t[i]", t[i]);
      console.log('mapa :', mapa)
    }
    console.log('**********************************')
    if (mapb.has(t[i] && mapb.get(t[i]) !== s[i])) {
      console.log("s[i]", s[i]);
      console.log("t[i]", t[i]);
      return false;
    } else {
      mapb.set(t[i], s[i])
      console.log("s[i]", s[i]);
      console.log("t[i]", t[i]);
      console.log("mapb :", mapb);
    }
  }
  return true;
}



console.log(isIsomorphic("egg", "foo"))
