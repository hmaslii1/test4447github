exports.confirmation = async (session, models, vars) => {
    models.confirmation = vars.page;
    await session.screen('confirmation');
};
exports.confirmation2 = async (session, models, vars) => {
    models.confirmation = vars.page;
    await session.screen('confirmation');
};