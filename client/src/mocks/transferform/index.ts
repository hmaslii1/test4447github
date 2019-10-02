export let mock_transferform = {
    Submit: async function Submit(params) {
        await this.go("confirmation");
    },
    menu: async function menu(params) {
        await this.go("menuicons");
    },
    Submit2: async function Submit2(params) {
        await this.go("confirmation");
    }
};
