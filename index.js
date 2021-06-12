(function() {
    //正規表現でできること
    
    let text;
    let regex;
    let result;

    //一致するところを切り抜く
    text = 'this is a pen'; //対象文字
    regex = /..is/g; //正規表現 g(オプション)は付けないと最初にマッチしたところで検索が終わってしまう。
    result = text.match(regex); //String.match(正規表現)でその正規表現にマッチした値を切り出してこれる。(配列で戻される)

    console.log(result);


    //適応するかの判定
    text = 'this is a pen'; //対象文字
    regex = /[a-z]/; //正規表現
    const flg = regex.test(text); //正規表現.test(対象文字列)でその正規表現にマッチしているかどうか真偽値で判定できる。

    console.log(flg);

    //文字の置換
    text = '010-5445-7645'; //対象文字
    regex = /[^0-9]/g; //正規表現
    result = text.replace(regex, ''); //対象文字列.replace(正規表現, '置換後文字列') で文字を置換する
    console.log(result);
    
}).call(this);

console.log('///////////////////////////////////');

(function() {
    //肯定先読み
    /*
        肯定先読みとは、初めに対象正規表現にマッチするか全文を先頭から検索して、マッチしていれば文のい先頭に戻って通常の正規表現の探索を始める
        肯定先読みをするには、(?= 対象正規表現)などとして初めに検索させる正規表現を設定する
        下記の例では、初めに(?=.*みそ)(?=.*しょうゆ)(?=.*しお)が検索され、全てがマッチしたら、文の初めに戻って「.*」(任意の文字が何文字でもok)が検索される
    */

    let text;
    let regex;

    text = 'みそとしょうゆベースのしおラーメン';
    regex = /(?=.*みそ)(?=.*しょうゆ)(?=.*しお).*/; //(?=.*)としているのは、文の先頭から検索していくので、.*で任意の文字が何文字でも(無くても)良いことにしている

    console.log('肯定先読み : ' + regex.test(text));

}).call(this);

console.log('///////////////////////////////////');

(function() {
    //URLを分割する

    let regex;
    let result;
    
    const URL = 'https://www.example.com/test/2021?key=value&aaa=bbb'; //対象文字列
    
    //ドメインを抜き出す
    regex = /^(https|http):\/\/([a-z||A-Z]*\.*)*([a-z||A-Z]+)\.([a-z||A-Z]+)/g;
    result = URL.match(regex);

    console.log('ドメイン : ' + result);

    ////////////////////////////////////////////////////////////////////////////////////////////

    //クエリーを抜き出す
    regex = /\?([a-z||A-Z||0-9||&||=]*)/g; //?の後を全て取得
    result = URL.match(regex);

    console.log('クエリー途中経過 : ' + result);


    regex = /[^?=&]+/g; //「? = &」を削除
    result = result[0].match(regex);

    console.log('クエリー途中経過 : ' + result);


    for(let i = 0; i < result.length; i++) {
        if(i % 2 == 0) {
            console.log('key : ' + result[i]);
        } else {
            console.log('value : ' + result[i]);
        }
    }
    
}).call(this);

console.log('///////////////////////////////////');

(function() {
    //URLを正しいか検証する

    let regex;
    let result;

    regex = /^([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

    console.log(regex.test('www.example.com'));
}).call(this);