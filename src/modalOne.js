function ModalOne (modalArray, open, close) {
    // input validation
    if(!(typeof modalArray === 'string' || Array.isArray(modalArray))){
        throw(new Error('error input'));
    }
    // type transfer
    if(typeof modalArray === 'string'){
        this.modalSearcherArray = [modalArray];
    }else{
        this.modalSearcherArray = modalArray;
    }
    // varaible init
    this.open = open;
    this.close = close;   
    this.modalOpen = null;
    this.modalObj = {};
    for(var i = this.modalSearcherArray.length - 1; i >= 0;i--){
        this.modalObj[this.modalSearcherArray[i]] = 'closed';
    }
}
ModalOne.prototype.choose = function (modalSearcher) {
    if(modalSearcher === this.modalOpen){
        if(this.modalObj[modalSearcher] === 'closed'){
            this.modalObj[modalSearcher] = 'open';
            this.open && this.open(modalSearcher);
        }else{
            this.modalObj[modalSearcher] = 'closed';
            this.close && this.close(modalSearcher);
        }
    }else{
        this.modalObj[modalSearcher] = 'open';
        this.modalOpen && (this.modalObj[this.modalOpen] = 'closed');
        this.open && this.open(modalSearcher);
        this.close && this.close(this.modalOpen);
        this.modalOpen = modalSearcher;
    }    
}

ModalOne.prototype.toString = function () {
    var status = '';
    for(var i = this.modalSearcherArray.length - 1; i >= 0;i--){
        status = this.modalObj[this.modalSearcherArray[i]] + ' ' + status;
    }
    return status;
}