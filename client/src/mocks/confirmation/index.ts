export let mock_confirmation = {
    done: async function done(params) {
        await this.go("transferform");
    }
};
