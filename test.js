function costCounter(prices,approvals,requiredApproval){
    let outputPrice = 0
    let temp = 0
    let approvedCount = 0
    for(let i = 0 ; i < approvals.length ; i++){
        temp += prices[i]
        if(approvals[i] === 'Approve'){
            approvedCount++
        }
        if(approvedCount === requiredApproval){
            if(outputPrice < temp){
                outputPrice = temp
            }
            temp = 0
        }
    }
    return outputPrice
}

console.log(costCounter([3,1,5,2,3,0,8,4,2],['Approve','Approve','Reject','Reject','Approve','Approve','Reject','Approve','Reject'],3));