exports.login = async (session, models, vars) => {
    models.login = vars.page;
    await session.screen('login');
};