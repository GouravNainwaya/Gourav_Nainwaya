let a = [1 ,1 ,2,3]

const findDuplicates =  () => {
    let temp = []
    for (let i = 0; i < a.length; i++) {
        if(a[i] == a[i+1]){
            temp.push(a[i])
        }
    }
    return temp
}

console.log(findDuplicates())