var predictPartyVictory = function(senate) {
    var killedR = 0, killedD = 0, livedR, livedD, a = Array.from(senate)
    do {
        livedR = livedD = 0
        a.forEach((v, i) => {
            if (v === 'D') {
                if (killedD) {
                    delete a[i]
                    killedD--
                } else {
                    livedD++
                    killedR++
                }
            } else {
                if (killedR) { 
                    delete a[i]
                    killedR--
                } else {
                    livedR++
                    killedD++ 
                }
            }
        })
    } while(livedR && livedD)
    return livedD ? 'Dire' : 'Radiant'
};

