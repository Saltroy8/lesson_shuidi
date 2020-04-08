fs.readFile('./',(content) => {
    setTimeout(() => {
        content += '123';
    },3000)
})
.then(() => {
    fs.append('./')
})
.then()

//Co 作者 TJ
es6 => generatear
co(
    function * test() {
        let c = yield fs.readFile();
        c += '123';
        let res = yield fs.append('./',c);
    }
)

//3.async
asycn () => {
    let c = await fs.readFile()
    c += '123';
    let res = await fs.append('./',c);
}