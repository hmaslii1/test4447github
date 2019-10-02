exports.transferform = async (session, models, vars) => {
    models.transferform = vars.page;
    await session.screen('transferform');
};