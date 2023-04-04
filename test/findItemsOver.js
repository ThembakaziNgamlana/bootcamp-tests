function findItemsOver(qtyName, threshold) {
    const list = [];
    //let qtyList = list
    for (var i = 0; i < qtyName.length; i++) {
        const results = qtyName[i]
        if (results.qty > threshold) {
            list.push(results)
        }
        //else if (results.qty < threshold) {
        //list.push(results)
        //}



    }
    return list;



}