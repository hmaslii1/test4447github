export let mock_menu = {
  logout: async function logout(params) {
        await this.go("login");
  }
};
