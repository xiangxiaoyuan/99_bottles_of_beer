/**
 * Created by maoyanhui on 2018/4/24.
 */
function bottlesSong(bottles) {
    var str = '';
    var num = bottles;
    for(let i = 0;i<num;i++){
        if(bottles>2) {
            str +=
                bottles+ ' bottles of beer on the wall, ' +bottles+ ' bottles of beer.\n' +
                'Take one down and pass it around, ' +(bottles - 1)+ ' bottles of beer on the wall.\n';
            bottles--;
        }
        else if(bottles == 2){
            str +=
                bottles+ ' bottles of beer on the wall, ' +bottles+ ' bottles of beer.\n' +
                'Take one down and pass it around, ' +(bottles - 1)+ ' bottle of beer on the wall.\n'
            bottles--;

        }
        else if(bottles == 1){
            str +=
                '1 bottle of beer on the wall, 1 bottle of beer.\n'+
                'Take one down and pass it around, no more bottles of beer on the wall.\n'+
                'No more bottles of beer on the wall, no more bottles of beer.\n'+
                'Go to the store and buy some more, 99 bottles of beer on the wall.';

        }
    }
    return str;
}

module.exports = function main() {
    var bottles = 99;
    var result = bottlesSong(bottles);
    console.log(result);
    return result;
}
