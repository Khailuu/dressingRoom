class ListChosen {
    constructor() {
        this.listItem = [];

        this.addItem = (item) => {
            this.listItem.push(item)
        }

        this.findIndex = (type) => {
            let index = -1;
            if(this.listItem && this.listItem.length > 0){
                this.listItem.forEach((v,i) => {
                    if(this.listItem[i].type === type){
                        index = i;
                    }
                });
            }
            return index
        }
    }
}