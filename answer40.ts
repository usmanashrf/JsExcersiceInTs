function make_album(artistName:string, albumTitle:string, trackNumbers?:number):object{

    let obj={
        artistName : {artistName},
        albumTitle: {albumTitle},
        trackNumbers:{trackNumbers}
    };

    if(trackNumbers != undefined)
    {
        obj.trackNumbers={trackNumbers};
    }

    return obj;

}


var firstObj =make_album("Atif","Dori");
console.log(firstObj);

var secObj =make_album("AliZafar","Chano",5);
console.log(secObj);

var thirdObj =make_album("Mustafa Zahid","Chano",2);
console.log(thirdObj);