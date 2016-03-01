function ModalOne (modalArray, open, close) {
    if(!(typeof modalArray === 'string' || Array.isArray(modalArray))){
        throw(new Error('error input'));
    }
    if(typeof modalArray === 'string'){
        this.modalSearcherArray = [modalArray];
    }else{
        this.modalSearcherArray = modalArray;
    }            
    this.modalStatusArray = [];
    this.open = open;
    this.close = close;
}
ModalOne.prototype.choose = function (modalSearcher) {
    var searcherArray = this.modalSearcherArray;
    var statusArray = this.modalStatusArray;
    for(var i = searcherArray.length - 1; i >= 0; i--){
        if (searcherArray[i] === modalSearcher) {
            statusArray[i] = !statusArray[i];
        }else{
            statusArray[i] = false;
        }
        if(statusArray[i] === true){
            this.open && this.open(modalSearcher);
        }else{
            this.close && this.close(modalSearcher);
        }
    }
}

ModalOne.prototype.toString = function () {
    return this.modalStatusArray.toString();
}